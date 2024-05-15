import react from "react";

function Login (){
    return(
       <div className="login">
<div className="image-div">
    <img src={padlock} alt="" />
</div>
<div className="login-input">
    <div className="welcome">
        <h1>Welcome Back</h1>
        <p>Lorem ipsum dolor sit amet sit amet.</p>
    </div>
    <div className="icons">
        <img className="icon1" src="" alt="google" />
        <img className="icon2" src="" alt="apple" />
        <img className="icon3" src="" alt="facebook" />
    </div>
    <div className="or">
        <hr /><span>OR</span><hr />
    </div>
    <form action="submit">
        <label htmlFor="email">
            Email
            <input type="text" placeholder="@gmail.com"/>
        </label>
        <label htmlFor="password">Password
        <input type="text" placeholder="Enter Password"/>
        </label>
      <div className="remember-reset">
      <div className="remember">
            <input type="checkbox" />
            Remember me
        </div>
        <div className="reset">
            <a href="">Reset Password</a>
        </div>
      </div>
    </form>
</div>
       </div> 
    )
}