import react from "react";

function main() {
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

      <section className="section1">
        <div className="middle-text">
          <div className="second-div">
            <h1 className="center-text">
              The one-stop hub for<br></br> everything logistics
            </h1>
            <p className="sub-text">
              Best prices. Seamless experience. Multiple service option
            </p>
            <div>
              <button className="delivery-request">
                Send Delivery Request Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faint-logo">
        <img className="img1" src="../" alt="" />
        <img className="img2" src="" alt="" />
        <img className="img3" src="" alt="" />`
      </section>

      <section className="section3">
        <section className="section3b">
          <h1>We cover Everything Logistics</h1>
          <div className="logistics">
            <div className="card">
              <img src="images" alt="" />
              <div className="title">
                <h4>Parcel Delivery</h4>
              </div>
              <div className="card-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <hr></hr>
            </div>

            <div className="card">
              <img src="images" alt="" />
              <div className="title">
                <h4>Parcel Delivery</h4>
              </div>
              <div className="card-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <hr></hr>
            </div>

            <div className="card">
              <img src="images" alt="" />
              <div className="title">
                <h4>Parcel Delivery</h4>
              </div>
              <div className="card-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <img src="images" alt="" />
              <div className="title">
                <h4>Parcel Delivery</h4>
              </div>
              <div className="card-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="butt">
          <button>Request delivery Now</button>
        </div>
      </section>
    </div>
  );
}

export default main;
