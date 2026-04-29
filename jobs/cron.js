import cron from 'node-cron';
import Birthday from '../models/birthday.model.js';
import { sendBirthdayEmail } from '../services/email.service.js';

export const startCronJobs = () => {
  // Run every day at 7:00 AM
  // Schedule format: '0 7 * * *'
  cron.schedule('12 23 * * *', async () => {
    console.log('Running daily birthday check cron job at 7 AM...');

    try {
      const today = new Date();
      const currentMonth = today.getMonth();
      const currentDay = today.getDate();

      // Find all birthdays
      const allBirthdays = await Birthday.find();

      // Filter those whose birthday is exactly today
      const todayBirthdays = allBirthdays.filter(b => {
        const bDate = new Date(b.dateOfBirth);
        return bDate.getMonth() === currentMonth && bDate.getDate() === currentDay;
      });

      console.log(`Found ${todayBirthdays.length} birthday(s) today!`);

      // Send email to each celebrant
      for (const celebrant of todayBirthdays) {
        await sendBirthdayEmail(celebrant);
      }

    } catch (error) {
      console.error('Error in daily birthday cron job:', error);
    }
  }, {
    scheduled: true,
    timezone: "Africa/Lagos"
  });

  console.log('Cron jobs initialized (Daily at 7:00 AM)');
};
