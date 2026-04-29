import mongoose from 'mongoose';

const birthdaySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Please provide date of birth'],
    },
    phone: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    reminders: {
      type: [Date],
      default: [],
    },
    notificationsSent: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual to calculate age
birthdaySchema.virtual('age').get(function () {
  const today = new Date();
  let age = today.getFullYear() - this.dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.dateOfBirth.getDate())) {
    age--;
  }
  
  return age;
});

// Virtual for upcoming birthday (days until birthday)
birthdaySchema.virtual('daysUntilBirthday').get(function () {
  const today = new Date();
  const nextBirthday = new Date(
    today.getFullYear(),
    this.dateOfBirth.getMonth(),
    this.dateOfBirth.getDate()
  );
  
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  
  const timeDiff = nextBirthday - today;
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
});

birthdaySchema.set('toJSON', { virtuals: true });

export default mongoose.model('Birthday', birthdaySchema);
