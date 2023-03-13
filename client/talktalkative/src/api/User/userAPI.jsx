import axios from "axios";

function signupAPI() {
  const routerURL = "http://localhost:3001/users";

  const routes = {
    createPOST: "/new",
    loginPOST: "/login",
    updatePUT: "/update",
    deleteDELETE: "/delete",
    tokenGET: "/",
  };

  // User objext expected
  function createUser(res) {
    return axios
      .post(`${routerURL + routes.createPOST}`, res)
      .catch((error) => console.error(error))
      .then((res) => res);
  }

  // Credential expected
  function loginUser(res) {
    return axios
      .post(`${routerURL + routes.loginPOST}`, res)
      .catch((error) => console.error(error))
      .then((res) => res);
  }

  // User object expected
  function updateUser(res) {
    return axios
      .put(`${routerURL + routes.updatePUT}`, res)
      .catch((error) => error)
      .then((res) => res);
  }

  // User id and password expected
  function removeUser(res) {
    return axios
      .delete(`${routerURL + routes.deleteDELETE}`, res)
      .catch((error) => error)
      .then((res) => res);
  }

  //Token expected
  function getUser(res) {
    return axios
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

export default signupAPI;
