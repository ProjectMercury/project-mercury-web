import axios from 'axios';

export const userLogin = (email, password, history) => async dispatch => {
  try {
    let res = await axios.post(
      'https://us-central1-form-builder-97c3a.cloudfunctions.net/api/login',
      {
        email,
        password
      }
    );

    localStorage.setItem('token', `${res.data.token}`);
    history.push('/questions');
  } catch (error) {
    console.error(error.message);
  }
};
