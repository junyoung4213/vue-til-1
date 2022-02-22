import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // axios.post('http://localhost:3000/signup', userData);
  return instance.post('signup', userData);
}

export { registerUser };
