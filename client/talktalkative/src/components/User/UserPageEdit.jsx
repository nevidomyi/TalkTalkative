import React from "react";
import { ImageUpload } from "../../utils/ImageUpload";

function UserPageEdit() {
  return (
    <div
      id="container"
      className="min-h-full items-center justify-center py-10 spa sm:px-6 lg:px-20"
    >
      <div id="navbar" className="flex h-16 items-center justify-between">
        <a
          href=""
          alt="Home page"
          className="flex flex-row items-center text-4xl text-awesome-blue h-12"
        >
          <h1>Talk</h1>
          <p className="font-bold ">Talkative</p>
          <img src="..\image\dialog-logo.svg" className="h-12"></img>
        </a>

        <div id="btn-group" className="flex space-x-8">
          <a
            href=""
            className="flex justify-center items-center text-center w-32 h-12 bg-awesome-blue rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-blue cursor-pointer"
          >
            <p className="text-inherit">Chat</p>
          </a>
          <a
            href=""
            className="flex justify-center items-center text-center w-32 h-12 bg-awesome-red rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-red cursor-pointer"
          >
            <p className="text-inherit">Log-out</p>
          </a>
        </div>
      </div>
      <div id="user-card" className="flex mt-10 lg:px-20 xl:px-40 2xl:px-60 ">
        <div className="flex flex-col flex-shrink-0 w-auto mr-4 items-center justify-between">
          <div className="relative overflow-hidden w-52 h-52 rounded-full border border-black">
            <img src="..\image\BoJack_profile.png" alt="" />
            <label
              htmlFor="img"
              className="flex justify-center items-center h-10 absolute bottom-0 right-1/2 translate-x-1/2 w-full bg-gray-400/75 hover:bg-gray-400 cursor-pointer"
            >
              <img src="..\image\edit-icon.svg" className="h-5" alt="" />
            </label>
          </div>
          <div className="flex flex-col">
            <input
              type="button"
              value="Save"
              className="w-32 h-12 mt-5 bg-white border  border-awesome-blue rounded-2xl text-awesome-blue text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-awesome-blue hover:text-white cursor-pointer"
            />
            <input
              type="button"
              value="Cancel"
              className="w-32 h-12 mt-5 bg-white border  border-awesome-red rounded-2xl text-awesome-red text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-awesome-red hover:text-white cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-grow">
          <form
            action=""
            method="get"
            className="px-4 flex flex-col items-start space-y-5"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-64 h-9 px-4 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-64 h-9 px-4 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact info"
              className="w-64 h-9 px-4 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <input
              type="text"
              name="github"
              placeholder="GitHub"
              className="w-64 h-9 px-4 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <textarea
              name="about"
              id=""
              rows="10"
              maxlength="120"
              autoComplete="off"
              placeholder="About me"
              className="w-full h-36 px-4 text-l resize-none overflow-hidden text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            ></textarea>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className="hidden"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserPageEdit;
