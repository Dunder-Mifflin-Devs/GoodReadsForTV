import axios from 'axios';

const BASE_URL = 'https://dmd-waw-dev.onrender.com/';

export const getRandomShows = async amount => {
  try {
    const response = await axios.get(BASE_URL + 'media/omdb/random?amount=' + (amount || 10));
    return response.data;
  } catch (error) {
    console.error('Error getRandomShows:', error);
    throw error;
  }
};

export const postSignup = async formData => {
  try {
    const response = await axios.post(BASE_URL + 'usermgmt/signup/email', {
      method: 'POST',
      email: formData.email,
      userName: formData.name,
      password: formData.password,
    });

    return response.data;
  } catch (error) {
    console.error('Error postSignup:', error);
    throw error;
  }
};
