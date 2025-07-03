import react from "react";
import { paxos } from "../constant/asset";
import { newchip } from "../constant/asset";
import Medable from "../assets/images/Medable svg.png";
import { parcel } from "../constant/asset";
import { flight } from "../constant/asset";
import { truck } from "../constant/asset";
import { carbon } from "../constant/asset";
import Services from "../services";
import Vendor from "../components/vendor";
import Reviews from "../components/review";
import Header from "../components/header";
import Footer from "../components/footer";

function main() {
  return (
    <div>
      <Header />
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
                <a href="./request"> Send Delivery Request Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="faint-logo">
        <img className="img1" src={Medable} alt="" />
        <img className="img2" src={newchip} alt="" />
        <img className="img3" src={paxos} alt="" />`
      </section>

      <section className="section3">
        <section className="section3b">
          <h1>We cover Everything Logistics</h1>
          <div className="logistics">
            <div className="card">
              <img src={parcel} alt="" />
              <div className="title">
                <h4>Parcel Delivery</h4>
              </div>
              <div className="card-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <hr></hr>
            </div>

            <div className="card">
              <img src={truck} alt="" />
              <div className="title">
                <h4>Truck Delivery</h4>
              </div>
              <div className="card-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <hr></hr>
            </div>

            <div className="card">
              <img src={carbon} alt="" />
              <div className="title">
                <h4>Office/ Home relocation</h4>
              </div>
              <div className="card-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <img src={flight} alt="" />
              <div className="title">
                <h4>International delivery</h4>
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

      <Services />
      <Vendor />
      <Reviews />
      <Footer />
    </div>
  );
}

export default main;
