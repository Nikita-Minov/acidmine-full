import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true
});

export const usersAPI = {
  loginAccount(username, password) {
    return instance
      .post('/login', { username: username, password: password })
      .then((res) => {
         return res.data;
      });
  },
  getMe() {
    return instance
      .get('/me')
      .then((res) => {
        return res.data;
      });
  },
  logout() {
    return instance
      .get('/logout')
      .then((res) => {
        return res.data;
      });
  }
};