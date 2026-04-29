import express from 'express';
import {
  getAllBirthdays,
  getBirthdayById,
  createBirthday,
  updateBirthday,
  deleteBirthday,
  getUpcomingBirthdays,
} from '../controllers/birthday.controller.js';

const router = express.Router();

// Get upcoming birthdays
router.get('/upcoming', getUpcomingBirthdays);

// Get all birthdays
router.get('/', getAllBirthdays);

// Get single birthday by ID
router.get('/:id', getBirthdayById);

// Create a new birthday
router.post('/', createBirthday);

// Update birthday
router.put('/:id', updateBirthday);

// Delete birthday
router.delete('/:id', deleteBirthday);

export default router;
