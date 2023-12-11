import nodemailer from "nodemailer";
import { ContactParams } from "../types/contact";

const sendMail = (email: string, client: ContactParams) => {
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER_EMAIL,
      pass: process.env.NODEMAILER_APP_PASSWORD,
    },
  });

  const mailDetails = {
    from: process.env.NODEMAILER_USER_EMAIL,
    to: email,
    subject: "Hope4All - Customer connect request!",
    html: `
        <html>
        <head>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    color: #555;
                }

                .container {
                    max-width: 600px;
                    margin: 0 auto;
                }

                .header {
                    background-color: #faf8f4;
                    text-align: center;
                    padding: 20px;
                }

                .content {
                    padding: 20px;
                }

                .message {
                    font-size: 16px;
                    line-height: 1.6;
                }

                .contact-details {
                    margin-top: 20px;
                }

                .footer {
                    border-top: 2px solid #007BFF;
                    padding-top: 20px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Hope4All - Customer Connect Request</h2>
                </div>
                <div class="content">
                    <p class="message">${client.message}</p>
                    <div class="contact-details">
                        <p><strong>Name:</strong> ${client.name}</p>
                        <p><strong>Email:</strong> ${client.email}</p>
                    </div>
                </div>
                <div class="footer">
                    <p><strong>Hope4All</strong></p>
                    <p>A committed crowdfunding platform in India aiming to provide transparent and sustainable aid to underprivileged communities</p>
                </div>
            </div>
        </body>
    </html>`,
  };

  mailTransporter.sendMail(mailDetails, (err, data) => {
    if (err) {
      console.log("Error :", err);
    } else {
      console.log(`Successfully send email to ${email}`);
    }
  });
};

export default sendMail;
