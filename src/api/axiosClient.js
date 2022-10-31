import axios from 'axios';
import { STORAGE_CONST } from '../constants/common';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7095/api/public',
  // baseURL: 'http://192.168.1.5:8000/api/public',
  header: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    //Attach token to request if exits
    //Refresh token
    const accessToken = localStorage.getItem(STORAGE_CONST.TOKEN);
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { data, config, status } = error.response;
    const urlList = ['/auth/authenticate', '/auth/register'];

    if (urlList.includes(config?.url) && status == 401) {
      // throw new Error(data.error);
      throw new Error(data.error);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;