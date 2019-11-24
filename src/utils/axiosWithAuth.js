import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://us-central1-form-builder-97c3a.cloudfunctions.net/api',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
