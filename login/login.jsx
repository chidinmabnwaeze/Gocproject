import react from "react";
import { lock } from "../logistics/src/constant/asset";

export default function Login() {
  return (
    <div className="Login">
      <div className="image-div">
        <img className="padlock" src={lock} alt="" />
      </div>
      <div className="login-input">
        <div className="welcome">
          <h2 className="welcome-head">Welcome Back!</h2>
          <p className="welcome-text"> Lorem ipsum dolor sit amet sit amet.</p>
        </div>
        <div className="icons">
          <img className="icon1" src="" alt="google" />
          <img className="icon2" src="" alt="apple" />
          <img className="icon3" src="" alt="facebook" />
        </div>
        <div className="or">
         <hr></hr> 
          <span>
            <p>OR</p> 
          </span>
          <hr />
        </div>

        <form action="submit">
          <label htmlFor="email">
            Email
            <input type="text" placeholder="@gmail.com" />
          </label>
          <label htmlFor="password">
            Password
            <input type="text" placeholder="Enter Password" />
          </label>
          <div className="remember-reset">
            <div className="remember">
              <input type="checkbox" />
              <p id=""> Remember me</p>
            </div>
            <div className="reset">
              <a href="">Reset Password</a>
            </div>
          </div>
          <div className="login-button">
            <button>Login</button>
          </div>
          <div className="dont-have">
            <p id="">
              Don't have an account{" "}
              <span>
                <a href="">Sign up</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
