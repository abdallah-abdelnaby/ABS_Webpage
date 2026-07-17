# ABS — Alternative Bold Solutions

Corporate website for ABS, built with Next.js (App Router) and deployed to
Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare).

## Development

```bash
npm install
npm run dev          # Next.js dev server (UI/validation; email needs the Worker runtime)
npm run preview      # build + run the real Cloudflare Worker locally (email works here)
npm run deploy       # build + deploy to Cloudflare
```

## Contact form

The inquiry form (`components/contact-form.tsx`) posts JSON to the server route
`app/api/contact/route.ts`, which validates the submission and emails it via
**Gmail SMTP** using [worker-mailer](https://github.com/zou-yu/worker-mailer)
over Cloudflare's TCP socket API. Delivery requires:

| Variable             | Type   | Purpose                                                        |
| -------------------- | ------ | -------------------------------------------------------------- |
| `GMAIL_USER`         | var    | Gmail/Workspace account for auth + the visible `From` address  |
| `GMAIL_APP_PASSWORD` | secret | Google **App Password** (not the normal password)              |
| `CONTACT_TO_EMAIL`   | var    | Destination inbox (defaults to `contact@absolution-gmbh.com`)  |
| `CONTACT_FROM_NAME`  | var    | Optional display name on the `From` line                       |

Create an App Password at <https://myaccount.google.com/apppasswords> (requires
2-Step Verification on the Google account).

**Local dev:** copy `.dev.vars.example` to `.dev.vars`, fill in the values, and
test with `npm run preview`. Email sending relies on `cloudflare:sockets`, which
only exists in the Workers runtime — it does **not** work under `npm run dev`
(the route returns a 503 there).

**Production:** set the secret and vars on the deployed Worker:

```bash
npx wrangler secret put GMAIL_APP_PASSWORD
# add GMAIL_USER and CONTACT_TO_EMAIL as vars in the Cloudflare
# dashboard, or in a "vars" block in wrangler.jsonc
```

Notes:

- Gmail requires the `From` address to equal `GMAIL_USER`; the visitor's address
  is placed in `Reply-To`, so replying from the inbox reaches them directly.
- Gmail SMTP sending limits apply (~500 messages/day for consumer Gmail, ~2,000
  for Workspace) — fine for contact-form volume.
- If the credentials are missing, the endpoint responds with an honest
  "temporarily unavailable" message (HTTP 503) and logs it — it never falsely
  reports success to a visitor.
- Troubleshooting: set `CONTACT_DEBUG=1` to have a failed send return the raw
  SMTP error (e.g. bad credentials) in the response. Leave it off in production.

### Recommended follow-up: abuse protection

`/api/contact` is a public endpoint that sends email on every valid request.
The honeypot stops naive bots, but a scripted client can still flood it. Before
heavy public traffic, add one of (both use your existing Cloudflare account):

- a **Rate Limiting Rule** / WAF rule on `/api/contact` (dashboard, no code), or
- **Cloudflare Turnstile** in front of the form with server-side token
  verification (stronger; needs a site key + secret and a small client change).
