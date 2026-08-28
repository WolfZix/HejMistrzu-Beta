const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

// Zabezpiecza dane pochodzące bezpośrednio od użytkownika
// przed potraktowaniem ich jako HTML w wiadomości.
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `📩 ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Wiadomość z formularza kontaktowego</title>
        </head>

        <body style="
          margin:0;
          padding:0;
          background:#0f1115;
          font-family:Arial,Helvetica,sans-serif;
          color:#f5f5f5;
          -webkit-text-size-adjust:100%;
          -ms-text-size-adjust:100%;
        ">

          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              width:100%;
              margin:0;
              padding:0;
              background:#0f1115;
            "
          >
            <tr>
              <td
                align="center"
                style="
                  padding:24px 12px;
                "
              >

                <table
                  role="presentation"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    width:100%;
                    max-width:700px;
                    margin:0 auto;
                    background:#181b22;
                    border:1px solid #2b2f38;
                    border-radius:16px;
                    overflow:hidden;
                  "
                >

                  <tr>
                    <td
                      align="center"
                      style="
                        padding:28px 20px;
                        border-bottom:1px solid #2b2f38;
                      "
                    >

                      <img
                        src="https://hejmistrzu.netlify.app/logo.webp"
                        alt="Hej Mistrzu"
                        width="60"
                        style="
                          width:60px;
                          max-width:60px;
                          height:auto;
                          display:block;
                          margin:0 auto 16px auto;
                          border:0;
                        "
                      >

                      <h1 style="
                        margin:0;
                        padding:0;
                        color:#c79b3b;
                        font-size:26px;
                        line-height:1.3;
                        font-weight:bold;
                      ">
                        Hej Mistrzu!
                      </h1>

                      <p style="
                        margin:10px 0 0 0;
                        padding:0;
                        color:#b8b8b8;
                        font-size:15px;
                        line-height:1.5;
                      ">
                        Formularz kontaktowy • Hej Mistrzu
                      </p>

                    </td>
                  </tr>

                  <tr>
                    <td style="
                      padding:30px 24px;
                    ">

                      <table
                        role="presentation"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="
                          width:100%;
                          margin:0 0 28px 0;
                        "
                      >

                        <tr>
                          <td style="
                            padding:10px 0;
                            color:#999;
                            font-size:14px;
                            line-height:1.5;
                            width:120px;
                            vertical-align:top;
                          ">
                            Imię
                          </td>

                          <td style="
                            padding:10px 0;
                            color:#f5f5f5;
                            font-size:14px;
                            line-height:1.5;
                            font-weight:bold;
                            word-break:break-word;
                          ">
                            ${safeName}
                          </td>
                        </tr>

                        <tr>
                          <td style="
                            padding:10px 0;
                            color:#999;
                            font-size:14px;
                            line-height:1.5;
                            vertical-align:top;
                          ">
                            Email
                          </td>

                          <td style="
                            padding:10px 0;
                            font-size:14px;
                            line-height:1.5;
                            word-break:break-word;
                          ">
                            <a
                              href="mailto:${safeEmail}"
                              style="
                                color:#c79b3b;
                                text-decoration:none;
                                word-break:break-word;
                              "
                            >
                              ${safeEmail}
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td style="
                            padding:10px 0;
                            color:#999;
                            font-size:14px;
                            line-height:1.5;
                            vertical-align:top;
                          ">
                            Temat
                          </td>

                          <td style="
                            padding:10px 0;
                            color:#f5f5f5;
                            font-size:14px;
                            line-height:1.5;
                            word-break:break-word;
                          ">
                            ${safeSubject}
                          </td>
                        </tr>

                        <tr>
                          <td style="
                            padding:10px 0;
                            color:#999;
                            font-size:14px;
                            line-height:1.5;
                            vertical-align:top;
                          ">
                            Wysłano
                          </td>

                          <td style="
                            padding:10px 0;
                            color:#f5f5f5;
                            font-size:14px;
                            line-height:1.5;
                          ">
                            ${new Date().toLocaleString("pl-PL")}
                          </td>
                        </tr>

                      </table>

                      <h2 style="
                        margin:0 0 12px 0;
                        padding:0;
                        color:#c79b3b;
                        font-size:20px;
                        line-height:1.4;
                      ">
                        Treść wiadomości
                      </h2>

                      <div style="
                        background:#101216;
                        border:1px solid #2b2f38;
                        border-radius:12px;
                        padding:18px;
                        color:#f5f5f5;
                        font-size:14px;
                        line-height:1.7;
                        word-break:break-word;
                        overflow-wrap:anywhere;
                        white-space:pre-wrap;
                      ">
                        ${safeMessage}
                      </div>

                    </td>
                  </tr>

                  <tr>
                    <td
                      align="center"
                      style="
                        padding:20px 16px;
                        border-top:1px solid #2b2f38;
                        color:#777;
                        font-size:13px;
                        line-height:1.6;
                      "
                    >
                      Wiadomość została wysłana z formularza kontaktowego strony
                      <br>
                      <strong style="color:#999;">
                        Hej Mistrzu
                      </strong>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
        </html>
      `,
    });

    res.json({
      success: true,
      message: "Mail wysłany",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Nie udało się wysłać maila",
    });
  }
});

module.exports = router;