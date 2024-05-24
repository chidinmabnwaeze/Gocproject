import React from "react";
import Header from "../components/headProfile";

export default function request() {
  return (
    <>
     <Header />
    <div className="request-pd">
     
      <div className="requestheading">
        <h2>Request Parcel Delivery</h2>
      </div>

      <div className="progress">
       
        <div className="one">
          <div className="circle1">
            <p>1</p>
          </div>
          <p className="progress-name">Shipping</p>
          <span><hr /></span>
        </div>

        <div className="hr-div">
          <hr />
        </div>

        <div className="one">
          <div className="circle1">
            <p>1</p>
          </div>
          <p className="progress-name">Shipping</p>
        </div>
        <div className="hr-div">
          <hr />
        </div>

        <div className="one">
          <div className="circle1">
            <p>1</p>
          </div>
          <p className="progress-name">Shipping</p>
        </div>

      </div>

      <div className="bodyForms">
        <div className="pickup">
            <div className="pickupHead">
                <h3>Pickup details</h3>
                <hr />
            </div>

            <form action="submit">
                {/* <div className="customerName"> */}
                <label htmlFor="name">
                    <p>Customer's name</p>
                    <input type="text"  />
                </label>

                <label htmlFor="email">
                    <p>Email</p>
                    <input type="text" />
                </label>
                {/* </div> */}
            </form>
        </div>
      </div>
    </div>
    </>
  );
}
