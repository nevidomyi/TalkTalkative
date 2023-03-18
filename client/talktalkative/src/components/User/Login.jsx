import React, { useState } from "react";
// import { loginUser } from "../../api/User/userAPI";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

function Login() {
  const { login, api } = useAuth();
  const navigate = useNavigate();
  const credentialsData = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(credentialsData);

  const handleInputChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async () => {
    const res = await api.loginUser(credentials);
    login(res.token);
    navigate(`/user/profile`);
  };

  return (
    <div
      id="container"
      className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div id="signup-component" className="w-full max-w-lg space-y-2">
        <div className="flex flex-col items-center mb-10">
          <a
            href="/"
            className="flex flex-row items-center text-4xl text-awesome-blue h-12"
          >
            <h1>Talk</h1>
            <p className="font-bold ">Talkative</p>
            <img src="..\image\dialog-logo.svg" className="h-12"></img>
          </a>
          <h2 className="text-4xl text-black font-bold ">
            Welcome back, <span className="text-awesome-red">talker</span>!
          </h2>
        </div>
        <div id="signup-form" className="my-bg-gradient">
          <form className="py-4 px-4 flex flex-col items-center login-form-bg">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="w-64  h-11 px-6 mt-8 text-l   text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              className="w-64  h-11 px-6 mt-8 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <div className="flex items-center mt-14">
              <input
                type="checkbox"
                name="rmbm"
                id="rmbm"
                className="mr-3 border-black rounded-md"
              />
              <label htmlFor="rmbm">Remember me</label>
            </div>
            <input
              type="button"
              value="Sign-in"
              onClick={submitForm}
              className="w-32 h-12 mt-10 mb-6 bg-awesome-blue rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-blue cursor-pointer"
            />
          </form>
        </div>
        <div id="signin" className="flex flex-col items-center">
          <span className="break-words mt-6">
            You already have profile? Not a problem
          </span>
          <a
            href="/signup"
            className="flex justify-center items-center text-center w-32 h-12 mt-8 bg-awesome-red rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-red cursor-pointer"
          >
            <p className="text-inherit">Sign-up</p>
          </a>
        </div>
        <div className="flex justify-center pt-4">
          <span className="text-center">© 2023</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
