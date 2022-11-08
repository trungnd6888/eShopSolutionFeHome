import axiosClient from './axiosClient';

const newsApi = {
  getAll(params) {
    const url = '/news';
    return axiosClient.get(url, { params });
  },
  getById(id) {
    const url = `/news/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/news';
    return axiosClient.post(url, data);
  },
  addFormData(data) {
    const url = '/news';
    return axiosClient.post(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  update(id, data) {
    const url = `/news/${id}`;
    return axiosClient.patch(url, data);
  },
  updateFormData(id, data) {
    const url = `/news/${id}`;
    return axiosClient.patch(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  remove(id) {
    const url = `news/${id}`;
    return axiosClient.delete(url);
  },
};

export default newsApi;
