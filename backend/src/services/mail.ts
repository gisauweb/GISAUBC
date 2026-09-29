import { Resend } from "resend";
import { WELCOME_MEMBERSHIP_HTML } from "../emails/welcomeMembershipHtml.js";

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const buildWelcomeText = (firstName: string, appUrl: string, sotoRsvpUrl: string): string =>
  [
    `Hello, ${firstName},`,
    "",
    "Thank you so much for becoming a member of GISAU! We are so glad to have you with us.",
    "",
    "We aim to foster an inclusive, close knitted, and connected community that exemplifies the signature Indonesian warmth and welcomes the diverse UBC society of Indonesian and non Indonesian students alike.",
    "",
    "What events do we host?",
    "",
    "SOTO — our big welcome bash, games + good vibes + the food we all miss",
    `Happening Oct 1, sign up now! RSVP: ${sotoRsvpUrl}`,
    "",
    "Liwetan — communal feast on banana leaves",
    "Lathusa — celebrating Indonesian culture with the wider UBC community",
    "Indomie Olympics — our flagship noodle showdown, pure chaos and laughter",
    "Mentorship Program — your stepping stone for career growth",
    "",
    "A small welcome gift for you! one month free of IQIYI — scan the QR code in this email to redeem.",
    "",
    "We are excited to have you as part of our GISAU family and can't wait to see you at our upcoming events. If you have any questions, feel free to reach out anytime.",
    "",
    "Warm regards,",
    "GISAU",
    "",
    `You're receiving this email because you signed up as a member of GISAU. ${appUrl}`,
  ].join("\n");

export const sendWelcomeEmail = async (input: {
  to: string;
  firstName: string;
}): Promise<void> => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  const replyTo = process.env.MAIL_REPLY_TO || "contact.gisau@gmail.com";

  if (!apiKey || !from) {
    console.warn(
      "Welcome email skipped: RESEND_API_KEY or MAIL_FROM is not set"
    );
    return;
  }

  const appUrl = process.env.CLIENT_ORIGIN || "https://gisaubc.com";
  const logoUrl =
    process.env.MAIL_LOGO_URL || `${appUrl}/emails/gisau-logo.png`;
  const mapleUrl =
    process.env.MAIL_MAPLE_URL || `${appUrl}/emails/maple-leaf.png`;
  // Email links must point to the public site, never localhost.
  const siteUrl = "https://gisaubc.com";
  const assetBase = process.env.MAIL_ASSET_BASE || `${siteUrl}/emails`;
  const sotoRsvpUrl = process.env.MAIL_SOTO_RSVP_URL || `${siteUrl}/events`;
  const giftQrUrl =
    process.env.MAIL_GIFT_QR_URL || `${appUrl}/emails/iqiyi-qr.png`;
  const firstName = input.firstName.trim() || "there";

  const html = WELCOME_MEMBERSHIP_HTML
    .replaceAll("{{FIRST_NAME}}", escapeHtml(firstName))
    .replaceAll("{{LOGO_URL}}", escapeHtml(logoUrl))
    .replaceAll("{{MAPLE_URL}}", escapeHtml(mapleUrl))
    .replaceAll("{{SOTO_RSVP_URL}}", escapeHtml(sotoRsvpUrl))
    .replaceAll("{{ASSET_BASE}}", escapeHtml(assetBase))
    .replaceAll("{{GIFT_QR_URL}}", escapeHtml(giftQrUrl))
    .replaceAll("{{APP_URL}}", escapeHtml(appUrl));

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    replyTo,
    to: input.to,
    subject: "Welcome to GISAU!",
    html,
    text: buildWelcomeText(firstName, appUrl, sotoRsvpUrl),
  });

  if (error) {
    throw new Error(error.message);
  }
};
