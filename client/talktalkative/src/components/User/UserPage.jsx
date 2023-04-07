import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHooks } from "../../hooks/hooks";

function UserPage() {
  const { logOut } = useHooks();
  const { api } = useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getProfile();
      setUser(response);
    };
    fetchData();
  }, []);

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
        <div className="flex flex-col flex-shrink-0 mr-4 items-center justify-between">
          <img
            src={user.avatar}
            alt=""
            className="w-52 h-52 rounded-full border border-black"
          />
          <a
            href="/user/edit"
            className="w-32 h-12 mt-5 flex items-center justify-center bg-white border  border-awesome-blue rounded-2xl text-awesome-blue text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-awesome-blue hover:text-white cursor-pointer"
          >
            Edit
          </a>
        </div>
        <div className="space-y-5">
          <div>
            <span className="text-awesome-red">
              User Name:
              <p className="inline text-black ml-1">{user.username}</p>
            </span>
          </div>
          <div>
            <span className="text-awesome-red">
              Email:
              <p className="inline text-black ml-1">{user.email}</p>
            </span>
          </div>
          <div>
            <span className="text-awesome-red">
              Contact Info:
              <p className="inline text-black  ml-1">{user.contact_info}</p>
            </span>
          </div>
          <div>
            <span className="text-awesome-red">
              Status:
              <p className="inline text-black  ml-1">{user.status}</p>
            </span>
          </div>
          {/* <div>
            <span className="text-awesome-red">
              GitHub link:
              <p className="inline text-black ml-1">BoJack@gmail.com</p>
            </span>
          </div>
          <div>
            <span className="text-awesome-red">
              About me:
              <p className="inline text-black ml-1">
                Mauris quis mi turpis. Sed bibendum massa vel malesuada
                placerat. Suspendisse dignissim leo vitae magna interdum, in
                pharetra purus ultricies. Nam viverra non tellus id tristique.
                Duis pulvinar commodo mauris sit amet euismod. Nulla mattis
                tortor nec molestie ullamcorper.
              </p>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
