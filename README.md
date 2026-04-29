# 🎂 Birthday Reminder App

A full-stack birthday reminder application built with **React** and **Express** using **MVC architecture**. Never forget a birthday again!

## 📋 Features

- ✅ Add and manage birthdays
- ✅ Track upcoming birthdays (next 30 days)
- ✅ Calculate age automatically
- ✅ Delete birthday entries
- ✅ Responsive and modern UI
- ✅ RESTful API with Express backend
- ✅ MongoDB database integration
- ✅ CORS enabled for cross-origin requests

## 🏗️ Project Structure

```
birthday-reminder/
├── server.js                 # Express server entry point
├── package.json             # Backend dependencies
├── .env.example             # Environment variables template
├── .gitignore              # Git ignore file
│
├── config/
│   └── database.js         # MongoDB connection configuration
│
├── models/
│   └── Birthday.js         # Mongoose Birthday schema
│
├── controllers/
│   └── birthdayController.js  # Business logic for birthdays
│
├── routes/
│   └── birthdayRoutes.js    # API routes
│
├── middleware/
│   └── errorHandler.js      # Error handling middleware
│
├── client/                  # React frontend
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── main.jsx         # React entry point
│       ├── App.jsx          # Main component
│       ├── App.css
│       ├── main.css
│       ├── api/
│       │   └── birthdayAPI.js  # API service
│       └── components/
│           ├── BirthdayForm.jsx
│           ├── BirthdayForm.css
│           ├── BirthdayList.jsx
│           ├── BirthdayList.css
│           ├── BirthdayCard.jsx
│           └── BirthdayCard.css
│
└── public/                  # Built React app (production)
```

## 🛠️ Technology Stack

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- CORS support
- Environment variables with dotenv

**Frontend:**
- React 18+
- Vite
- Axios for API calls
- Modern CSS3

**Architecture:**
- **MVC Pattern** (Model-View-Controller)
  - **Models**: Mongoose schemas (`Birthday.js`)
  - **Views**: React components
  - **Controllers**: Business logic (`birthdayController.js`)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud - MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   cd birthday-reminder
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and update:
   ```
   MONGODB_URI=mongodb://localhost:27017/birthday-reminder
   PORT=5000
   CORS_ORIGIN=http://localhost:5173
   ```

3. **Install backend dependencies**
   ```bash
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   npm run client:install
   ```

   Or manually:
   ```bash
   cd client
   npm install
   cd ..
   ```

### Running the Application

#### Option 1: Separate terminals

**Terminal 1 - Backend (Express)**
```bash
npm run dev
```
Server will start at `http://localhost:5000`

**Terminal 2 - Frontend (React)**
```bash
npm run client
```
React will start at `http://localhost:5173`

#### Option 2: Concurrent (if concurrently is installed)
```bash
npm run dev:full
```

#### Option 3: Production build
```bash
npm run build
NODE_ENV=production npm start
```

### Quick Start All-in-One

```bash
npm run install:all && npm run dev:full
```

## 📚 API Endpoints

All endpoints are prefixed with `/api/birthdays`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all birthdays |
| GET | `/:id` | Get a specific birthday |
| GET | `/upcoming` | Get upcoming birthdays (next 30 days) |
| POST | `/` | Create a new birthday |
| PUT | `/:id` | Update a birthday |
| DELETE | `/:id` | Delete a birthday |

### Example API Requests

**Create a birthday:**
```bash
curl -X POST http://localhost:5000/api/birthdays \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "dateOfBirth": "1990-05-15",
    "phone": "+234 800 000 0000",
    "notes": "Loves chocolate cake"
  }'
```

**Get all birthdays:**
```bash
curl http://localhost:5000/api/birthdays
```

**Get upcoming birthdays:**
```bash
curl http://localhost:5000/api/birthdays/upcoming
```

## 🎨 Database Schema

**Birthday Model:**
```javascript
{
  name: String (required, max 100 chars),
  email: String (required, valid email),
  dateOfBirth: Date (required),
  phone: String,
  notes: String,
  reminders: [Date],
  notificationsSent: Boolean,
  createdAt: Date,
  updatedAt: Date,
  // Virtuals:
  age: Number,
  daysUntilBirthday: Number
}
```

## 🔧 Development

### Backend modifications:
- Edit files in `controllers/`, `models/`, `routes/`
- Server auto-reloads with `npm run dev`

### Frontend modifications:
- Edit files in `client/src/`
- Vite will hot-reload automatically

### Build for production:
```bash
npm run client:build
NODE_ENV=production npm start
```

## 🐛 Troubleshooting

**MongoDB connection error:**
- Ensure MongoDB is running locally or check MONGODB_URI in `.env`
- For MongoDB Atlas, use: `mongodb+srv://username:password@cluster.mongodb.net/birthday-reminder`

**Port already in use:**
- Change PORT in `.env`
- Or kill the process: `lsof -ti:5000 | xargs kill -9`

**CORS errors:**
- Check `CORS_ORIGIN` in `.env` matches your frontend URL

**API requests failing:**
- Ensure backend is running: `http://localhost:5000/api/health`
- Check browser console for errors

## 📝 Environment Variables

Copy `.env.example` to `.env` and configure:

```
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/birthday-reminder

# CORS
CORS_ORIGIN=http://localhost:5173

# Email (optional - for future notifications)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## 🚢 Deployment

### Deploy to Vercel (Frontend + Backend)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Deploy to Heroku

```bash
heroku login
heroku create your-app-name
heroku config:set MONGODB_URI=<your-mongo-uri>
git push heroku main
```

## 📄 License

ISC License

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 👨‍💻 Author

Created with ❤️ for AltSchool Africa

---

**Happy Birthday Reminding! 🎉**
