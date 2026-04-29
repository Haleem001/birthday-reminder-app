import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendBirthdayEmail = async (user) => {
  const mailOptions = {
    from: `"Mahmud Ghali" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: `Warm Birthday Wishes, ${user.name} 🎂`,
    html: `
      <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 40px; border-radius: 8px; background-color: #ffffff; color: #2d3436; border: 1px solid #e0f2f1; box-shadow: 0 10px 25px rgba(0, 77, 64, 0.05);">
        <div style="border-bottom: 3px solid #00695c; padding-bottom: 20px; margin-bottom: 30px; text-align: left;">
          <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #00695c; letter-spacing: -0.5px;">Birthday Greetings ✨</h1>
        </div>
        
        <div style="font-size: 16px; line-height: 1.8; color: #37474f;">
          <p>Dear ${user.name},</p>
          <p>
            On this special occasion of your birthday, I would like to extend my warmest wishes to you. 
            May the year ahead be filled with continued success, health, and fulfillment.
          </p>
          <p>
            I hope you have an excellent day of celebration with your loved ones. 🥂
          </p>
          <div style="margin-top: 40px; padding: 20px; background-color: #f0fdfa; border-radius: 6px; border-left: 4px solid #00695c;">
            <p style="margin: 0; color: #004d40; font-style: italic;">
              "Wishing you a fantastic year ahead!"
            </p>
          </div>
          <p style="margin-top: 40px;">
            Best regards,
          </p>
          <p style="font-weight: 600; color: #00695c;">
            Mahmud Ghali
          </p>
        </div>
        
        <div style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #e0f2f1; text-align: left; color: #99aaa8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
          <p style="margin: 0;">Automated Birthday Notification System </p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${user.name} (${user.email}): ${info.messageId}`);
    return true;
  } catch (error) {
    console.error(`Error sending email to ${user.email}:`, error);
    return false;
  }
};
