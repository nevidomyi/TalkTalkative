import React, { useState } from "react";

function Login() {
    const [user, setUser] = useState({});  

    function setData(param) {
        console.log(user);
        setUser((prev) => ({
            ...prev,
            [param.target.name]: param.target.value
        }));
    }

    function handleLogin() {
        auth.login(user);
        navigate(`/myprofile`);
    }

    return(
        <div className="login-component">
            <div className="header">
                <h1>TalkTalkative <img src="public\image\dialog-logo.svg"></img></h1>
                <h2>Welcome back, talker!</h2>
            </div>
            <div className="login-form">
                <form action="" method="get">
                    <input type="text" name="username" onChange={setData}/>
                    <input type="password" name="password" onChange={setData}/>
                    <input type="checkbox" name="rmbm" id="rmbm"/>
                    <label htmlFor="rmbm">Remember me</label>
                    <input type="button" value="Sign-in" onClick={handleLogin}/>
                </form>
            </div>
            <div className="footer">
                <span><p>You don't have profile? Not a problem</p></span>
                <input type="button" value="Sign-up" />
                <span>© 2023</span>
            </div>
        </div>
    )
}

export default Login;