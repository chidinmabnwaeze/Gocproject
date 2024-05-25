import React from "react";
import Header from "../components/headProfile";
import Progress from "../components/progress";
import { location } from "../constant/asset";

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
            <h5>Gokoda</h5>
            <p className="kilo">
              35km <span>&#183;</span> 20min
            </p>
            <p className="distance">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
