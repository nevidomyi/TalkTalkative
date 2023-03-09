import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({});

  function setData(param) {
    console.log(user);
    setUser((prev) => ({
      ...prev,
      [param.target.name]: param.target.value,
    }));
  }

  function handleLogin() {
    auth.login(user);
    navigate(`/myprofile`);
  }

  return (
    <>
      <div className="login-component">
        <div className="header">
          <h1>
            TalkTalkative <img src="public\image\dialog-logo.svg"></img>
          </h1>
          <h2>Welcome back, talker!</h2>
        </div>
        <div className="login-form">
          <form action="" method="get">
            <input type="text" name="username" onChange={setData} />
            <input type="password" name="password" onChange={setData} />
            <input type="checkbox" name="rmbm" id="rmbm" />
            <label htmlFor="rmbm">Remember me</label>
            <input type="button" value="Sign-in" onClick={handleLogin} />
          </form>
        </div>
        <div className="footer">
          <span>
            <p>You don't have profile? Not a problem</p>
          </span>
          <input type="button" value="Sign-up" />
          <span>© 2023</span>
        </div>
      </div>
      <div
        id="container"
        className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div id="signup-component" className="w-full max-w-lg space-y-2">
          <div className="flex flex-col items-center">
            <span className="flex flex-row items-center text-4xl text-awesome-blue h-12">
              <h1>Talk</h1>
              <p className="font-bold ">Talkative</p>
              <img src="image\dialog-logo.svg" className="h-12"></img>
            </span>
            <h2 className="text-4xl text-black font-bold ">
              Welcome back, <span className="text-awesome-red">talker</span>!
            </h2>
          </div>
          <div id="signup-form" className="my-bg-gradient">
            <form
              action=""
              method="get"
              className="py-4 px-4 flex flex-col items-center login-form-bg"
            >
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="w-64  h-11 px-8 mt-6 text-l   text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-64  h-11 px-6 mt-6 text-l  text-awesome-blue border rounded-3xl border-black transition ease-in-out delay-50 hover:bg-gray-200"
              />
              <input
                type="button"
                value="Sign-up"
                className="w-32 h-12 mt-5 bg-awesome-red rounded-2xl text-white text-xl transition ease-in-out delay-50 hover:shadow-inner hover:bg-hower-aw-red cursor-pointer"
              />
            </form>
          </div>

          <div className="flex justify-center mt-6">
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
    </>
  );
}

export default Login;
