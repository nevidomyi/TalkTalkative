import axios from "axios";

function userAPI() {
  const routerURL = "http://localhost:3001/users";

  const routes = {
    createPOST: "/new",
    loginPOST: "/login",
    updatePUT: "/update",
    deleteDELETE: "/delete",
    tokenGET: "/",
  };

  // User objext expected
  async function createUser(res) {
    return await axios
      .post(`${routerURL + routes.createPOST}`, res)
      .catch((error) => console.error(error))
      .then((res) => res);
  }

  // Credential expected
  async function loginUser(res) {
    return await axios
      .post(`${routerURL + routes.loginPOST}`, res)
      .catch((error) => console.error(error))
      .then((res) => res);
  }

  // User object expected
  async function updateUser(res) {
    return await axios
      .put(`${routerURL + routes.updatePUT}`, res)
      .catch((error) => error)
      .then((res) => res);
  }

  // User id and password expected
  async function removeUser(res) {
    return await axios
      .delete(`${routerURL + routes.deleteDELETE}`, res)
      .catch((error) => error)
      .then((res) => res);
  }

  //Token expected
  async function getUser(res) {
    return await axios
      .get(`${routerURL + routes.deleteDELETE}`, res)
      .catch((error) => error)
      .then((res) => res);
  }

  return {
    createUser,
    loginUser,
    updateUser,
    removeUser,
    getUser,
  };
}

export default userAPI;
