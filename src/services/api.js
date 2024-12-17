import axios from 'axios';

const API_URL = 'http://localhost:3000';

export async function predictGlucose(data) {
  try {
    const response = await axios.post(`${API_URL}/predict`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to make prediction');
  }
}

export async function checkHealth() {
  try {
    const response = await axios.get(`${API_URL}/health`);
    return response.data;
  } catch (error) {
    throw new Error('API is not available');
  }
}