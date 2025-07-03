import React from "react";
import ReactDOM from "react-dom";

function header() {
  const menuList = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Become a Vendor",
      link: "../",
    },
    {
      title: "About",
      link: "/dashboard",
    },
    {
      title: "Support",
      link: "../home",
    },
  ];
  return (
    <div>
      <header className="theheader">
        <nav className="navbar">
          <div className="nav-logo">
            <p>
              Logi<span>Hub</span>
            </p>
          </div>

          <ul className="nav-menu">
            {menuList.map((menu, index) => (
              <li className="nav-list" key={index}>
                <a className="nav-link" href={menu.link}>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="signupButtons">
            <button className="login">
              <a href="./login">Login</a>
            </button>
            <button className="register">
              <a href="./signup">Register</a>
            </button>
          </div>
        </nav>
      </header>
      {/* <header className="theheader">
        <nav className="navbar">
          <div className="nav-logo">
            <p>
              Logi<span>Hub</span>
            </p>
          </div>

          <ul className="nav-menu">
            <li className="nav-list">
              <a className="nav-link" href="../home">
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
              <a className="nav-link" href="../userdash">
                About
              </a>
            </li>
          </ul>

          <div className="signupButtons">
          <button className="login" ><a href="./login">Login</a> </button>
            <button className="register"><a href="./signup">Register</a></button>
          </div>
        </nav>
      </header>  */}
    </div>
  );
}

export default header;
