import axios from 'axios';

const API_BASE_URL = '/api/birthdays';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const birthdayAPI = {
  // Get all birthdays
  getAllBirthdays: async () => {
    const response = await api.get('/');
    return response.data;
  },

  // Get upcoming birthdays (next 30 days)
  getUpcomingBirthdays: async () => {
    const response = await api.get('/upcoming');
    return response.data;
  },

  // Get single birthday by ID
  getBirthdayById: async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  // Create a new birthday
  createBirthday: async (data) => {
    const response = await api.post('/', data);
    return response.data;
  },

  // Update birthday
  updateBirthday: async (id, data) => {
    const response = await api.put(`/${id}`, data);
    return response.data;
  },

  // Delete birthday
  deleteBirthday: async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
  },
};

export default birthdayAPI;
