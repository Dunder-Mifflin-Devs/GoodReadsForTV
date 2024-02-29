import axios from 'axios';

const BASE_URL = 'https://dmd-waw-dev.onrender.com/media/omdb/';

const headers = {
  'Content-Type': 'application/json',
};

const axiosConfig = {
  headers: headers,
};

export const getRandomShows = async amount => {
  try {
    const response = await axios.get(BASE_URL + 'random?amount=' + (amount || 10));
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
