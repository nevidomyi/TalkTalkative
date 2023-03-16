import axios from "axios";

const API_URL = "http://localhost:3001"; // TODO move to env variables

export const createAPI = (token) => {
  const client = axios.create({ baseURL: API_URL, headers: { Authorization: token }});
  return {
    // user enpoints
    login: (data) => (await client.get(`/users/login`, data)).data,
    register: (data) => (await client.post(`/users/new`, data)).data,
    getUser: (id) => (await client.get(`/users/${id}`)).data,
    updateUser: (id, data) => (await client.put(`/users/${id}`, data)).data,
    deleteUser: (id) => (await client.delete(`/users/${id}`)).data,

    // chat endpoints
  }
}