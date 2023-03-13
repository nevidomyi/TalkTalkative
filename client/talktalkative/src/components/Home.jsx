import React from "react";

function UserPage() {
  return (
    <div
      id="container"
      className="min-h-full flex flex-col items-center justify-center"
    >
      <div
        id="navbar"
        className="flex h-full w-full items-center justify-between pt-12 pb-16 px-32  select-none home-bg"
      >
        <div
          href=""
          alt="Home page"
          className="flex flex-row items-center text-4xl text-awesome-blue h-12"
        >
          <h1>Talk</h1>
          <p className="font-bold ">Talkative</p>
          <img src="..\image\dialog-logo.svg" className="h-12"></img>
        </div>

        <div id="btn-group" className="flex space-x-8">
          <a
            href="/login"
            className="flex justify-center items-center text-center w-32 h-12 bg-white border border-awesome-blue rounded-2xl text-awesome-blue text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-awesome-blue hover:text-white cursor-pointer"
          >
            <p className="text-inherit">Sign-in</p>
          </a>
          <a
            href="/signup"
            className="flex justify-center items-center text-center w-32 h-12 bg-white border border-awesome-red rounded-2xl text-awesome-red text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-awesome-red hover:text-white cursor-pointer"
          >
            <p className="text-inherit">Sign-up</p>
          </a>
        </div>
      </div>
      <div className="flex flex-grow px-32 mt-11">
        <div className="">
          <h1 className="font-semibold text-7xl leading-snug w-4/5">
            Just <span className="text-awesome-red">awesome</span>
            <span className="text-awesome-blue"> cute</span> chat, and nothing
            else!
          </h1>
          <h3 className="pt-10 text-3xl leading-relaxed w-1/2">
            You can find new <span className="text-awesome-blue">friends</span>{" "}
            here, new <span className="text-awesome-red">mates</span>, new{" "}
            <span className="text-awesome-blue">fellows</span> and just adorable{" "}
            <span className="text-awesome-red">persons</span> with which you
            will be hang out.
          </h3>
          <div className="pt-10">
            <a
              href="/signup"
              className="flex justify-center items-center text-center w-80 h-20 bg-awesome-red rounded-3xl text-white text-2xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-red hover:text-white cursor-pointer"
            >
              <p className="text-inherit">Get started!</p>
            </a>
          </div>
        </div>
        <div className="self-end flex-shrink-0">
          <img src="image/homepage-cup.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
