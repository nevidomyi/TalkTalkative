import axios from "axios";

// User objext expected
export const createUser = async (req) => {
  const response = await axios.post("/users/new", req);
  return response.data;
};

// Credential expected

export const loginUser = async (req) => {
  const response = await axios.post("/users/login", req);
  return response.data;
};

// User object expected
async function updateUser(res) {
  return await axios
    .put(`${routerURL + routes.updatePUT}`, res)
    .catch((error) => error);
}

// User id and password expected
async function removeUser(res) {
  return await axios
    .delete(`${routerURL + routes.deleteDELETE}`, res)
    .catch((error) => error);
}

//Token expected
export const getUser = async (id) => {
  const response = await client.get(`/users/+${id}`);

  return response.data;
};

