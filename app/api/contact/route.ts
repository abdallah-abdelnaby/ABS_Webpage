import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

import { siteConfig } from "@/config/site";

// The inquiry endpoint must run per-request, never statically optimized.
export const dynamic = "force-dynamic";

type ContactEnv = {
  GMAIL_USER?: string;
  GMAIL_APP_PASSWORD?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_NAME?: string;
};

const FIELD_LIMITS = {
  name: 200,
  organization: 200,
  email: 320,
  projectType: 120,
  message: 5000,
} as const;

// Deliberately permissive: catches obvious mistakes without rejecting valid addresses.
// Forbidding whitespace also blocks CR/LF header-injection attempts in the address.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_TO = "contact@absolution-gmbh.com";
const DEFAULT_FROM_NAME = "ABS Website Inquiry";

/**
 * Reads runtime configuration from the Cloudflare Worker context (production and
 * `next dev` via OpenNext), falling back to `process.env` for plain Node dev.
 */
function resolveEnv(): ContactEnv {
  try {
    return getCloudflareContext().env as unknown as ContactEnv;
  } catch {
    return process.env as ContactEnv;
  }
}

function cleanSingleLine(value: unknown): string {
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim() : "";
}

function cleanMultiLine(value: unknown): string {
  return typeof value === "string" ? value.replace(/\r\n/g, "\n").trim() : "";
}

function fail(status: number, error: string) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  const { honeypotName, projectTypeOptions } = siteConfig.contact.form;

  // Reject oversized bodies before buffering/parsing them into the isolate.
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 64 * 1024) {
    return fail(413, "Request too large.");
  }

  let payload: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return fail(400, "Invalid request body.");
    }
    payload = parsed as Record<string, unknown>;
  } catch {
    return fail(400, "Invalid request body.");
  }

  // Honeypot: bots fill the hidden field. Silently accept so we don't reveal the trap.
  if (cleanSingleLine(payload[honeypotName])) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanSingleLine(payload.name);
  const organization = cleanSingleLine(payload.organization);
  const email = cleanSingleLine(payload.email);
  const projectType = cleanSingleLine(payload.projectType);
  const message = cleanMultiLine(payload.message);

  const invalid =
    !name ||
    name.length > FIELD_LIMITS.name ||
    !organization ||
    organization.length > FIELD_LIMITS.organization ||
    !email ||
    email.length > FIELD_LIMITS.email ||
    !EMAIL_PATTERN.test(email) ||
    !projectType ||
    !(projectTypeOptions as readonly string[]).includes(projectType) ||
    !message ||
    message.length > FIELD_LIMITS.message;

  if (invalid) {
    return fail(422, "Please complete all fields with valid details.");
  }

  const env = resolveEnv();
  const gmailUser = env.GMAIL_USER?.trim();
  // App passwords are displayed in 4-char groups; Gmail accepts them without spaces.
  const appPassword = env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const toEmail = env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
  const fromName = env.CONTACT_FROM_NAME?.trim() || DEFAULT_FROM_NAME;

  if (!gmailUser || !appPassword) {
    // Configuration gap, not a visitor error — log loudly, respond honestly.
    console.error(
      "Contact form is not configured: set GMAIL_USER and GMAIL_APP_PASSWORD (secret).",
    );
    return fail(503, "The contact form is temporarily unavailable. Please email us directly.");
  }

  const subject = `New inquiry — ${projectType} — ${name}`;
  const textBody = [
    "New inquiry from the ABS website",
    "",
    `Name:         ${name}`,
    `Organization: ${organization}`,
    `Email:        ${email}`,
    `Project type: ${projectType}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    // Load worker-mailer's ESM build explicitly. It only works in the Workers
    // runtime (production / `npm run preview`), not under `next dev`, because it
    // imports `cloudflare:sockets`. The `.mjs` entry keeps that an ESM `import`
    // (a CJS `require` of it becomes a throwing stub in the ESM Worker bundle).
    const { WorkerMailer } = await import("worker-mailer/dist/index.mjs");

    await WorkerMailer.send(
      {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        credentials: { username: gmailUser, password: appPassword },
        authType: ["plain", "login"],
        socketTimeoutMs: 10_000,
      },
      {
        // Gmail requires the From address to be the authenticated account; the
        // visitor's address goes in Reply-To so a reply reaches them directly.
        from: { name: fromName, email: gmailUser },
        to: toEmail,
        reply: { name, email },
        subject,
        text: textBody,
      },
    );
  } catch (error) {
    console.error("Gmail SMTP delivery failed:", error);
    if (process.env.CONTACT_DEBUG === "1") {
      return fail(502, `debug: ${error instanceof Error ? error.message : String(error)}`);
    }
    return fail(502, "We couldn't send your inquiry just now. Please try again shortly.");
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return fail(405, "Method not allowed.");
}
