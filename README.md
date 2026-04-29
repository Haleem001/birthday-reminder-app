# Birthday Reminder

A minimalist full-stack application that automates birthday wishes. The system tracks birthdays and automatically sends personalized emails to celebrants every day at 7:00 AM.

## Features

- Automated daily birthday checks via cron jobs
- Email notifications using Nodemailer and Gmail
- Responsive minimalist UI for managing entries
- Unified server architecture (Express serving both API and React frontend)

## Core Stack

- **Frontend**: React, Vite, Tailwind CSS v4
- **Backend**: Node.js, Express, node-cron
- **Database**: MongoDB, Mongoose
- **Email**: Nodemailer (SMTP)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm run install:all
   ```

2. **Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/birthday-reminder
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

3. **Run in Development**
   ```bash
   npm run dev:full
   ```

## Cron Job Configuration

The system is configured to run daily. You can adjust the schedule and timezone in `jobs/cron.js`.

- **Default Schedule**: `0 7 * * *` (7:00 AM)
- **Timezone**: `Africa/Lagos`

## Deployment

To host both the frontend and backend on a single server:

1. **Build the Frontend**
   ```bash
   npm run build
   ```
2. **Start the Production Server**
   ```bash
   NODE_ENV=production npm start
   ```

The Express server will serve the static React files from the `public` directory and handle API requests on the same port.

## License

ISC License
