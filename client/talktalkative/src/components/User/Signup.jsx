import React from "react";

function Signup() {
    return(
        <div className="login-component">
            <div className="header">
                <h1>TalkTalkative <img src="public\image\dialog-logo.svg"></img></h1>
                <h2>Let's start, talker!</h2>
            </div>
            <div className="login-form">
                <form action="" method="get">
                    <label for="img">Image</label>
                    <input type="file" id="img" name="img" accept="image/*"/>
                    <input type="text" name="username" />
                    <input type="password" name="password" />
                    <input type="checkbox" name="rmbm" id="rmbm"/>
                    <label htmlFor="rmbm">Remember me</label>
                    <input type="button" value="Sign-in"/>
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

export default Signup;