import axios from 'axios';

/*
 Technique 1
*/
const BASE_URL = 'https://dmd-waw-dev.onrender.com/media/omdb/';

const headers = {
  'Content-Type': 'application/json',
};

const axiosConfig = {
  headers: headers,
};

export const getRandomShows = async () => {
  try {
    const response = await axios.get(BASE_URL + 'random');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// getRandomShows() called in dashboard.jsx

/*
 Technique 2
*/
axios
  .get('https://dmd-waw-dev.onrender.com/media/omdb/random')
  .then(res => {
    console.log('data', res.data);
  })
  .catch(err => {
    console.log('error', err);
  });
