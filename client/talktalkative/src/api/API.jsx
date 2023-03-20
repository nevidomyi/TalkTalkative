import axios from "axios";

const API_URL = "http://localhost:3001"; // TODO move to env variables

export const createAPI = (token) => {
  const client = axios.create({
    baseURL: API_URL,
    headers: { Authorization: token },
  });
  return {
    client,
    // user enpoints
    loginUser: async (data) => (await client.post(`/users/login`, data)).data,
    registerUser: async (data) => (await client.post(`/users/new`, data)).data,
    getUser: async (id) => (await client.get(`/users/${id}`)).data,
    getProfile: async () => (await client.get(`/users/profile/`)).data,
    updateUser: async (id, data) =>
      (await client.put(`/users/${id}`, data)).data, 
    deleteUser: async (id) => (await client.delete(`/users/${id}`)).data,
    // chat endpoints
  };
};
