import Birthday from '../models/birthday.model.js';

// Get all birthdays
export const getAllBirthdays = async (req, res) => {
  try {
    const birthdays = await Birthday.find().sort({ dateOfBirth: 1 });
    res.status(200).json({
      success: true,
      count: birthdays.length,
      data: birthdays,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single birthday by ID
export const getBirthdayById = async (req, res) => {
  try {
    const birthday = await Birthday.findById(req.params.id);
    
    if (!birthday) {
      return res.status(404).json({
        success: false,
        message: 'Birthday not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: birthday,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create a new birthday
export const createBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Birthday created successfully',
      data: birthday,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update birthday
export const updateBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    
    if (!birthday) {
      return res.status(404).json({
        success: false,
        message: 'Birthday not found',
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Birthday updated successfully',
      data: birthday,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete birthday
export const deleteBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndDelete(req.params.id);
    
    if (!birthday) {
      return res.status(404).json({
        success: false,
        message: 'Birthday not found',
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Birthday deleted successfully',
      data: birthday,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get upcoming birthdays (next 30 days)
export const getUpcomingBirthdays = async (req, res) => {
  try {
    const allBirthdays = await Birthday.find();
    
    const upcomingBirthdays = allBirthdays.filter((birthday) => {
      const daysUntil = birthday.daysUntilBirthday;
      return daysUntil >= 0 && daysUntil <= 30;
    }).sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday);
    
    res.status(200).json({
      success: true,
      count: upcomingBirthdays.length,
      data: upcomingBirthdays,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
