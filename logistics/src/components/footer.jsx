import react from "react";

function Footer() {
  return (
    <div className="whole-footer">
      <div className="footer">

         <div className="footer1">
        <div className="footer-logo">
          <p>
            Logi<span>Hub</span>
          </p>
        </div>
        <div className="sm-links">
        <img className='facebook' src="./icons/"></img>
        <img className='twitter' src="./icons/" ></img>
        <img className='linkedin' src="./icons/" ></img>
        <img className='instagram' src="./icons/" ></img>
        </div>
        </div>

        <footer-links>
          <p className="footer-head">Company</p>
          <p className="footer-sub">Contact Us</p>
        </footer-links>

        <footer-links>
          <p className="footer-head">Legal</p>
          <p className="footer-sub">Privacy Policy</p>
          <p className="footer-sub">Terms of Service</p>
        </footer-links>

        <footer-links>
          <p className="footer-head">Help</p>
          <p className="footer-sub">Read our FAQs</p>
        </footer-links>

      </div>
      <div className="copy">
          <hr />
          <small>Copyright © 2022 LogiHub. All rights reserved.</small>
        </div>
    </div>
  );
}

export default Footer;
