import React, { useEffect, useState, useContext, useRef } from "react";
import io from "socket.io-client";
import { useHooks } from "../../hooks/hooks";
import { AuthContext } from "../../context/AuthContext";
import Message from "./Message";

const socket = io.connect("http://localhost:3001");

const dateFormate = (dateISO) => {
  const date = new Date(dateISO);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(2);

  const formattedDate = `${hours}:${minutes} ${day}.${month}.${year}`;

  return formattedDate;
}

function Chat() {
  const { api } = useContext(AuthContext);
  const { user } = useHooks();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const lastMessageRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await api.getMessages();

      res.map(async (message) => {
        const owner = await api.getUser(message.owner);

        setMessages((prev) => [...prev, {
          avatar: owner.avatar,
          username: owner.username,
          timeStamp: dateFormate(message.createdAt),
          text: message.text,
        }]);
      })
    };
    fetchMessages();
  }, [])

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      data.timeStamp = dateFormate(data.timeStamp);

      setMessages((prev) => [...prev, data])
    });
  }, [socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const typingHandler = (e) => {
    setMessage((prev) => (
      prev = e.target.value
    ));
  }

  const sendHandler = () => {
    setMessage((prev) => (
      prev = prev.trim()
    ));
    if (message.length != 0) {
      setMessage('');
      socket.emit("message", {
        text: message,
        owner: user.id,
        username: user.username,
        avatar: user.avatar,
      });
    }
  }

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      sendHandler();
    }
  }

  return (
    <div id="chat-container" className="flex h-full flex-col">
      <div
        id="chat-navbar"
        className="flex items-center px-10 pb-6 pt-8 justify-between relative"
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
            <a href="/user/profile" className="hover:underline">{`@` + user.username}</a>
            <a href="/user/edit" className="text-awesome-blue hover:underline">
              📝Edit
            </a>
            <a href="" className="text-awesome-red hover:underline">
              🚪Log out
            </a>
          </div>
          <div className="h-16 w-16 border border-black rounded-full overflow-hidden">
            <img src={user.avatar} alt="" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xl font-bold">
          <span>
            <b className="text-awesome-red">#</b> What’s new today 💌
          </span>
        </div>
      </div>
      <div id="chat" className="grid h-full grid-cols-6">
        <div id="chat-list" className="col-span-1">
          <div className="flex items-center justify-center py-2 my-bg-gradient">
            <span>Rooms for you</span>
          </div>
          <div className="p-2">
            <ul className="list-style-arrow list-inside">
              <li>
                Walkie Talkie
                <ul className="pl-4 list-style-tag list-inside">
                  <li>What’s new today 💌</li>
                  <li>Today’s agenda 🤔</li>
                  <li>Hot games 🥵 </li>
                </ul>
              </li>
              <li>Parties today</li>
            </ul>
          </div>
        </div>
        <div id="general-area" className="col-span-4 px-6">
          <div
            id="msg-container"
            className="px-10 h-45-rem overflow-auto chat-bg border rounded-b-2xl border-t-0 border-black"
          >
            {messages.map((data) =>

              <Message avatar={data.avatar}
                username={data.username}
                timeStamp={data.timeStamp}
                text={data.text}
              />
            )}
            <div ref={lastMessageRef} />
          </div>
          <div className="flex flex-row items-center pt-3">
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={typingHandler}
              onKeyDown={keyHandler}
              className="textarea text-sm h-14 resize-none border border-black rounded-xl"
              placeholder="...type smt here"
            ></textarea>
            <div className="flex flex-col items-center px-1">
              <label
                htmlFor="imgUpload"
                className="cursor-pointer w-7 text-lg text-center rounded-md  hover:bg-slate-200"
              >
                📎
              </label>
              <label
                htmlFor="imgUpload"
                className="cursor-pointer w-7 text-lg text-center rounded-md  hover:bg-slate-200 "
              >
                📹
              </label>
              <input type="file" id="imgUpload" className="hidden" />
              <input type="file" id="gifUpload" className="hidden" />
            </div>
            <input
              type="button"
              value="Send"
              htmlFor="message"
              onClick={sendHandler}
              className="w-32 h-14 bg-awesome-blue rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-blue cursor-pointer"
            />
          </div>
        </div>
        <div id="user-list" className="col-span-1 h-full">
          <div className="flex items-center justify-center py-2 my-bg-gradient">
            <span>Users in the room</span>
          </div>
          <div className="pr-3">
            <div id="user-preview" className="flex flex-row py-2 justify-end">
              <div className="flex flex-col break-all justify-between items-end px-1 text-xs">
                <span>@BoJack_horseman</span>
                <span className="text-awesome-red">Admin</span>
              </div>
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-black">
                <img src="..\image\BoJack_profile.png" alt="" />
              </div>
            </div>
            <div id="user-preview" className="flex flex-row py-2 justify-end">
              <div className="flex flex-col break-all justify-between items-end px-1 text-xs">
                <span>@Jakie_jako</span>
                <span>User</span>
              </div>
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-black">
                <img className="h-10" src="..\image\Jakie_profile.jpg" alt="" />
              </div>
            </div>
            <div id="user-preview" className="flex flex-row py-2 justify-end">
              <div className="flex flex-col break-all justify-between items-end px-1 text-xs">
                <span>@BOB_squarepants</span>
                <span className="text-awesome-blue">Mod</span>
              </div>
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-black">
                <img src="..\image\bob_profile.jpg" alt="" />
              </div>
            </div>
            <div id="user-preview" className="flex flex-row py-2 justify-end">
              <div className="flex flex-col break-all justify-between items-end px-1 text-xs">
                <span>@Jimmy_neutronicus</span>
                <span>User</span>
              </div>
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-black">
                <img src="..\image\jimmy_profile.jpg" alt="" />
              </div>
            </div>
            <div id="user-preview" className="flex flex-row py-2 justify-end">
              <div className="flex flex-col break-all justify-between items-end px-1 text-xs">
                <span>@Leonardo_Da_Vinci</span>
                <span>User</span>
              </div>
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-black">
                <img src="..\image\leonardo_profile.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
