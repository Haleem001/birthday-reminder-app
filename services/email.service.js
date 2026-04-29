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
    subject: `🎉 Happy Birthday, ${user.name}! 🎂`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #fbf9f9;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #006a60; font-size: 28px;">Happy Birthday!</h1>
          <h2 style="color: #08b1a1; font-size: 24px;">${user.name}</h2>
        </div>
        
        <p style="font-size: 16px; color: #1b1c1c; line-height: 1.6;">
          Wishing you a fantastic birthday filled with joy, laughter, and wonderful memories. 
          May this special day bring you everything your heart desires!
        </p>
        
        <div style="text-align: center; margin: 40px 0;">
          <span style="font-size: 48px;">🎁 🎈 🎊</span>
        </div>
        
        <p style="font-size: 16px; color: #1b1c1c; line-height: 1.6;">
          Have a wonderful celebration today!
        </p>
        
        <div style="margin-top: 40px; border-top: 1px solid #bbcac6; padding-top: 20px; text-align: center; color: #6c7a77; font-size: 12px;">
          <p>Sent with ❤️ by Mahmud Ghali</p>
          <p>Automated Birthday Reminder app.</p>
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
