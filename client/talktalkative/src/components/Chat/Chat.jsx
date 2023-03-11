import React from "react";

function Chat() {
  return (
    <div id="chat-container" className="py-8 px-4 sm:px-6 lg:px-8">
      <div
        id="chat-navbar"
        className="flex items-center pb-6 justify-between relative"
      >
        <div
          href=""
          alt="Home page"
          className="flex flex-row items-center text-4xl text-awesome-blue h-12 select-none"
        >
          <h1>Talk</h1>
          <p className="font-bold ">Talkative</p>
          <img src="image\dialog-logo.svg" className="h-12"></img>
        </div>
        <div id="user-profile" className="flex">
          <div className="flex flex-col justify-center items-end mr-2 text-sm">
            <a>@BoJack_horseman</a>
            <a href="" className="pr-6 text-awesome-blue">
              📝Edit
            </a>
            <a href="" className="text-awesome-red">
              🚪Log out
            </a>
          </div>
          <div className="h-16 w-16 border border-black rounded-full overflow-hidden">
            <img src="\image\BoJack_profile.png" alt="" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xl font-bold">
          <span>
            {" "}
            <b className="text-awesome-red">#</b> What’s new today
          </span>
        </div>
      </div>
      <div
        id="chat"
        className="grid grid-flow-col grid-cols-6 grid-rows-1 gap-4"
      >
        <div id="chat-list" className="col-span-1">
          <div>Rooms for you</div>
          <div>
            <ul>
              <li>
                * Walkie Talkie
                <ul className="pl-4">
                  <li># What’s new today 💌</li>
                  <li># Today’s agenda 🤔</li>
                  <li># Hot games 🥵 </li>
                </ul>
              </li>
              <li>* Parties today</li>
            </ul>
          </div>
        </div>
        <div id="general-area" className="bg-slate-400 col-span-4">
          <h1></h1>
        </div>
        <div id="user-list" className="col-span-1">
          <div>Rooms for you</div>
          <div>
            <ul>
              <li>
                * Walkie Talkie
                <ul className="pl-4">
                  <li># What’s new today 💌</li>
                  <li># Today’s agenda 🤔</li>
                  <li># Hot games 🥵 </li>
                </ul>
              </li>
              <li>* Parties today</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
