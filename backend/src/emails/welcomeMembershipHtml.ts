/** Compiled into dist so Vercel does not need a copied .html file. */
const FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif";
const CREAM = "#FFFEF9";

const icon = (file: string, size: number): string =>
  `<img src="{{ASSET_BASE}}/icons/${file}" alt="" width="${size}" height="${size}" style="display:block;width:${size}px;height:${size}px;border:0;outline:none;text-decoration:none;" />`;

const eventRow = (file: string, title: string, desc: string): string => `
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F4F4F4;border-radius:12px;margin-bottom:10px;">
                <tr>
                  <td width="52" valign="middle" align="center" style="width:52px;padding:12px 0 12px 8px;">${icon(file, 28)}</td>
                  <td valign="middle" style="padding:12px 16px 12px 6px;font-family:${FONT};font-size:14px;line-height:1.5;color:#5A4040;">
                    <strong style="font-size:15px;color:#3A1F1F;">${title}</strong><br />${desc}
                  </td>
                </tr>
              </table>`;

const terms = [
  "Available only to first-time users.",
  "Can only be redeemed in Canada.",
  "Valid exclusively for IQIYI International.",
  "You are responsible for payment after this free month.",
  "Valid for one month from the date of issuance; membership starts on activation.",
  "Once activated, membership is non-transferable.",
  "You may cancel at any time after redemption.",
  "IQIYI may modify or cancel this offer at any time without prior notice.",
]
  .map((t, i) => `<p style="margin:0 0 3px;">${i + 1}. ${t}</p>`)
  .join("\n                          ");

export const WELCOME_MEMBERSHIP_HTML = `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Welcome to GISAU</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
  <style>
    @media only screen and (max-width:620px) {
      .container { width:100% !important; border-radius:0 !important; }
      .px { padding-left:20px !important; padding-right:20px !important; }
      .h1 { font-size:24px !important; }
      .stack { display:block !important; width:100% !important; max-width:100% !important; }
      .sprite-cell { padding:4px 20px 20px !important; }
      .sprite { margin:0 auto !important; }
      .qr { width:180px !important; height:180px !important; }
      .gift-title { font-size:18px !important; }
      .outer { padding:0 !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F5F5F5;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F5F5F5;">
    <tr>
      <td align="center" class="outer" style="padding:24px 12px;">
        <!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" align="center"><tr><td><![endif]-->
        <table role="presentation" class="container" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;max-width:600px;background-color:${CREAM};border-radius:16px;">

          <!-- Header -->
          <tr>
            <td align="center" bgcolor="#6B1C20" class="px" style="background-color:#6B1C20;padding:32px 24px 30px;">
              <img src="{{LOGO_URL}}" alt="GISAU logo" width="84" height="84" style="display:block;width:84px;height:84px;margin:0 auto 16px;border:0;border-radius:50%;outline:none;" />
              <h1 class="h1" style="margin:0;font-family:${FONT};font-size:28px;line-height:1.25;font-weight:700;color:#FFFFFF;">Welcome to GISAU!</h1>
            </td>
          </tr>

          <!-- Intro. Columns are inline-blocks so the mascot wraps under the text on a phone without a media query. -->
          <tr>
            <td bgcolor="${CREAM}" align="center" style="background-color:${CREAM};font-size:0;line-height:0;">
              <!--[if mso]><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td width="440" valign="middle"><![endif]-->
              <div class="stack" style="display:inline-block;width:100%;max-width:440px;vertical-align:middle;font-size:15px;line-height:1.7;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td class="px" style="padding:28px 16px 16px 32px;font-family:${FONT};font-size:15px;line-height:1.7;color:#3A1F1F;word-wrap:break-word;overflow-wrap:break-word;">
                      <p style="margin:0 0 14px;font-weight:700;">Hello {{FIRST_NAME}}!</p>
                      <p style="margin:0 0 14px;">Thank you so much for becoming a member of GISAU! We are so glad to have you with us.</p>
                      <p style="margin:0;">We aim to foster an inclusive, close knitted, and connected community that exemplifies the signature Indonesian warmth and welcomes the diverse UBC society of Indonesian and non Indonesian students alike.</p>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso]></td><td width="140" valign="middle"><![endif]-->
              <div class="stack sprite-cell" style="display:inline-block;width:100%;max-width:140px;vertical-align:middle;font-size:15px;line-height:normal;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="center" style="padding:12px 18px 16px 8px;">
                      <img class="sprite" src="{{MAPLE_URL}}" alt="GISAU maple leaf mascot" width="116" height="96" style="display:block;width:116px;max-width:100%;height:auto;border:0;outline:none;" />
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>

          <!-- Events -->
          <tr>
            <td class="px" style="padding:20px 36px 4px;background-color:${CREAM};">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 14px;">
                <tr>
                  <td valign="middle" style="padding-right:8px;">${icon("party.png", 22)}</td>
                  <td valign="middle" style="font-family:${FONT};font-size:18px;font-weight:700;color:#6B1C20;">What events do we host?</td>
                </tr>
              </table>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F4F4F4;border-radius:12px;margin-bottom:10px;">
                <tr>
                  <td width="52" valign="middle" align="center" style="width:52px;padding:12px 0 12px 8px;">${icon("soto.png", 28)}</td>
                  <td valign="middle" style="padding:14px 16px 14px 6px;font-family:${FONT};font-size:14px;line-height:1.5;color:#5A4040;">
                    <strong style="font-size:15px;color:#3A1F1F;">SOTO</strong><br />
                    our big welcome bash, games + good vibes + the food we all miss
                  </td>
                </tr>
              </table>
${eventRow("leaf.png", "Liwetan", "communal feast on banana leaves")}
${eventRow("flag.png", "LaNusa", "celebrating Indonesian culture with the wider UBC community")}
${eventRow("noodles.png", "Indomie Olympics", "our flagship noodle showdown, pure chaos and laughter")}
${eventRow("briefcase.png", "Mentorship Program", "your stepping stone for career growth")}
            </td>
          </tr>

          <!-- Gift. #A32323D4 on cream; Outlook uses the flattened solid. -->
          <tr>
            <td class="px" style="padding:12px 36px 8px;background-color:${CREAM};">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#B34847" style="background-color:#A32323D4;border-radius:16px;">
                <tr>
                  <td align="center" style="padding:30px 24px 28px;">
                    <p class="gift-title" style="margin:0 0 6px;font-family:${FONT};font-size:20px;line-height:1.3;font-weight:700;color:#FFFFFF;">A small welcome gift for you!</p>
                    <p style="margin:0 0 20px;font-family:${FONT};font-size:14px;color:#F4DADA;">one month free of iQIYI &mdash; scan to redeem!</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="background-color:#FFFFFF;border-radius:12px;">
                      <tr>
                        <td style="padding:12px;">
                          <img class="qr" src="{{GIFT_QR_URL}}" alt="QR code to redeem one month free of iQIYI" width="200" height="200" style="display:block;width:200px;height:200px;border:0;" />
                        </td>
                      </tr>
                    </table>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:22px;">
                      <tr><td height="1" style="height:1px;line-height:1px;font-size:1px;background-color:#C47A7A;">&nbsp;</td></tr>
                      <tr>
                        <td align="left" style="padding-top:16px;font-family:${FONT};font-size:11px;line-height:1.55;color:#F4DADA;">
                          <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#FFFFFF;">iQIYI International Terms &amp; Conditions</p>
                          ${terms}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td class="px" style="padding:26px 36px 12px;background-color:${CREAM};font-family:${FONT};font-size:15px;line-height:1.7;color:#3A1F1F;">
              <p style="margin:0 0 16px;">We are excited to have you as part of our GISAU family and can&rsquo;t wait to see you at our upcoming events. If you have any questions, feel free to reach out anytime.</p>
              <p style="margin:0;">Warm regards,<br /><strong>GISAU</strong></p>
            </td>
          </tr>
          <tr>
            <td align="center" class="px" style="padding:16px 36px 32px;background-color:${CREAM};font-family:${FONT};font-size:11px;line-height:1.5;color:#9A9A9A;">
              You&rsquo;re receiving this email because you signed up as a member of GISAU.
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>
`;
