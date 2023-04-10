import React from "react";
import { useHooks } from "../../hooks/hooks";

function UserPageEdit() {
  const { logOut, user, selectedFile, preview, handleFileUpload, handleInputChange, update } = useHooks();

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
            href="/chat"
            className="flex justify-center items-center text-center w-32 h-12 bg-awesome-blue rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-blue cursor-pointer"
          >
            <p className="text-inherit">Chat</p>
          </a>
          <a
            onClick={logOut}
            className="flex justify-center items-center text-center w-32 h-12 bg-awesome-red rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-red cursor-pointer"
          >
            <p className="text-inherit">Log-out</p>
          </a>
        </div>
      </div>
      <div id="user-card" className="flex mt-10 lg:px-20 xl:px-40 2xl:px-60 ">
        <div className="flex flex-col flex-shrink-0 w-auto mr-4 items-center justify-between">
          <div className="relative overflow-hidden w-52 h-52 rounded-full border border-black">
            <img src={selectedFile ? preview : user.avatar} alt="" />
            <label
              htmlFor="img"
              className="flex justify-center items-center h-10 absolute bottom-0 right-1/2 translate-x-1/2 w-full bg-gray-400/75 hover:bg-gray-400 cursor-pointer"
            >
              <img src="..\image\edit-icon.svg" className="h-5" alt="" />
            </label>
          </div>
          <div className="flex flex-col">
            <input
              form="editForm"
              type="button"
              value="Save"
              onClick={update}
              className="w-32 h-12 mt-5 bg-white border  border-awesome-blue rounded-2xl text-awesome-blue text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-awesome-blue hover:text-white cursor-pointer"
            />
            <a
              href="/user/profile"
              type="button"
              className="w-32 h-12 mt-5 flex justify-center items-center bg-white border  border-awesome-red rounded-2xl text-awesome-red text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-awesome-red hover:text-white cursor-pointer"
            >
              Cancel
            </a>
          </div>
        </div>
        <div className="flex-grow">
          <form
            id="editForm"
            action=""
            method="get"
            className="px-4 flex flex-col items-start space-y-5"
          >
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="w-64 h-9 px-4 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-64 h-9 px-4 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            />
            {/* <input
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
            /> */}
            <textarea
              name="contact_info"
              id=""
              rows="10"
              maxLength="120"
              autoComplete="off"
              value={user.contact_info}
              onChange={handleInputChange}
              placeholder="Contact info"
              className="w-full h-36 px-4 text-l resize-none overflow-hidden text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
            ></textarea>
            <input
              type="file"
              id="img"
              name="img"
              onChange={handleFileUpload}
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
