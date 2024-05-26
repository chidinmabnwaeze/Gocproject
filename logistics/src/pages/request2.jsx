import React from "react";
import Header from "../components/headProfile";
import Progress from "../components/progress";
import { location } from "../constant/asset";


const function Prices =[
    {
agentName: "Gokada";

    }
]

export default function request2() {
  return (
    <div className="payment-request">
      <Header />
      <div className="requestheading">
        <h2>Request Parcel Delivery</h2>
      </div> 
      <Progress />

      <div className="pickOff">
        <div className="pickupIndicator">
          <h4>Pickup</h4>
          <img src={location} alt="" />
        </div>

        <div className="pickupLocation">
          <p>Magic Land, No. 1, Kukwaba Hills, Constitution Ave, Wuye, Abuja</p>
        </div>
      </div>

      <div className="dropOff">
        <div className="mapIndicator">
          <h4>D1</h4>
          <img src={location} alt="" />
        </div>

        <div className="pickupLocation">
          <p>Jabi Lake Mall, Bala Sokoto Way, Jabi 900108, Abuja</p>
        </div>
      </div>

      <div className="delivery-agents">
        <div className="agent">
          <div className="agentInfo">
            <h5 >Gokoda</h5>
            <p className="kilo">
              35km <span>&#183;</span> 20min
            </p>
            <p className="distance">2min away from you</p>
          </div>
          <div className="price">
            <h1 className="amount">N1,700</h1>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
