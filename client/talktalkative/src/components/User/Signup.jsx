import axios from "axios";
import React, { useState } from "react";
import { ImageUpload } from "../../utils/ImageUpload";

function Signup() {
  const { selectedFile, preview, onSelectFile } = ImageUpload();
  const userData = {
    avatar: "",
    email: "",
    password: "",
    username: "",
    contact_info: "",
    status: 1,
  };

  const url = "http://localhost:3001/users/new";

  const [user, setUserData] = useState(userData);

  //  Is it good way to use promise here?
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setUserData((prev) => ({
      ...prev,
      avatar: base64,
    }));
    onSelectFile(e);
  };

  const handleInputChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(user);
  };

  const submitForm = () => {
    axios.post(url, user).catch((error) => console.log(error));
    // axios.
  };

  return (
    <div
      id="container"
      className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div id="signup-component" className="w-full max-w-lg space-y-2">
        <div className="flex flex-col items-center">
          <span className="flex flex-row items-center text-4xl text-awesome-blue h-12">
            <h1>Talk</h1>
            <p className="font-bold ">Talkative</p>
            <img src="..\image\dialog-logo.svg" className="h-12"></img>
          </span>
          <h2 className="text-4xl text-black font-bold ">
            Let's start, <span className="text-awesome-red">talker</span>!
          </h2>
        </div>
        <div id="signup-form" className="my-bg-gradient">
          <form className="py-4 px-4 flex flex-col items-center signup-form-bg">
            <label
              htmlFor="img"
              className="w-24 h-24 bg-gray-50 rounded-full border overflow-hidden border-black flex justify-center transition ease-in-out delay-50 hover:bg-gray-200 active:bg-gray-400 cursor-pointer"
            >
              <img
                src={selectedFile ? preview : "image/plus-icon.svg"}
                className={selectedFile ? "max-w-max" : "w-6"}
              ></img>
            </label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="w-64  h-11 px-6 mt-6 text-l   text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              className="w-64  h-11 px-6 mt-6 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
              className="w-64 h-11 px-6 mt-6 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <textarea
              name="contact_info"
              id=""
              rows="10"
              maxLength="120"
              autoComplete="off"
              placeholder="Contact info"
              onChange={handleInputChange}
              className="w-64 h-36 px-6 mt-6 text-l resize-none overflow-hidden text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            ></textarea>
            <input
              type="button"
              value="Sign-up"
              onClick={submitForm}
              className="w-32 h-12 mt-5 bg-awesome-red rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-red cursor-pointer"
            />
          </form>
        </div>

        <div className="flex justify-center pt-20">
          <span className="text-center">© 2023</span>
        </div>
        <div id="signin" className="flex flex-row absolute top-3 right-3">
          <span className="break-words w-44 mr-2">
            You already have profile? Not a problem
          </span>
          <a
            href=""
            className="flex justify-center items-center text-center w-32 h-12 bg-white border border-awesome-blue rounded-2xl text-awesome-blue text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-awesome-blue hover:text-white cursor-pointer"
          >
            <p className="text-inherit">Sign-in</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
