import axios from 'axios';

const api = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: { 'user-key': '77576b2dae845bf32c1de0795a7753e1' },
});

export default api;
