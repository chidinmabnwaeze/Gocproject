import react from "react";
import ReactDOM from "react-dom";


function header() {
  return (
    <div>
        <header className="theheader">
      <nav className="navbar">
<div className="nav-logo">
    <p>Logi<span>Hub</span></p>
    </div>

        <ul className="nav-menu">
          <li className="nav-list">
            <a className="nav-link" href="">
              Home
            </a>
          </li>

          <li className="nav-list">
            <a className="nav-link" href="">
            Become a Vendor
            </a>
          </li>

          <li className="nav-list">
            <a className="nav-link" href="">
            Support
            </a>
          </li>

          <li className="nav-list">
            <a className="nav-link" href="">
            About
            </a>
          </li>
        </ul>

<div className="signupButtons">
<button className="login">Login</button>
        <button className="register">Register</button>
</div>
        
        
      </nav>
      </header>
    </div>
  );
}

export default header;
