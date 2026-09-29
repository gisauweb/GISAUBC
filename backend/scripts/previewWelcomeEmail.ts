/**
 * Writes a local preview of the welcome email. Nothing is sent.
 *
 * Signup mail does not read the file this script writes. Resend uses
 * src/emails/welcomeMembershipHtml.ts through src/services/mail.ts.
 *
 * From the backend folder:
 *   npm run email:preview
 *
 * Then open client/public/emails/preview.html, or with the client running:
 *   http://localhost:5173/emails/preview.html
 *
 * Narrow the browser below 620px to see the phone layout.
 * If this file is deployed with the site, it is only a public preview page.
 * It is marked noindex and is not linked from the app.
 */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { WELCOME_MEMBERSHIP_HTML } from "../src/emails/welcomeMembershipHtml.js";

const outFile = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../client/public/emails/preview.html"
);

const html = WELCOME_MEMBERSHIP_HTML.replace(
  "<head>",
  `<head>
  <!--
    Preview of the welcome email. This file is not sent to members.
    Regenerate from the backend folder: npm run email:preview
  -->
  <meta name="robots" content="noindex" />`
)
  .replaceAll("{{FIRST_NAME}}", "Gaida")
  .replaceAll("{{LOGO_URL}}", "gisau-logo.png")
  .replaceAll("{{MAPLE_URL}}", "maple-leaf.png")
  .replaceAll("{{GIFT_QR_URL}}", "iqiyi-qr.png")
  .replaceAll("{{SOTO_RSVP_URL}}", "https://gisaubc.com/events")
  .replaceAll("{{APP_URL}}", "https://gisaubc.com")
  .replaceAll("{{ASSET_BASE}}", ".");

writeFileSync(outFile, html);
console.log(`Wrote ${outFile}`);
