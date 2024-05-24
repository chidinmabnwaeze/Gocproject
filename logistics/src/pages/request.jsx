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
            <span>
              <hr />
            </span>
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
                <input type="text" id="name" />
              </label>

              <label htmlFor="email">
                <p>Email</p>
                <input type="text" id="email" />
              </label>

              <label htmlFor="phoneNumber">
                <p>Pickup Phone number </p>
                <input type="tel" id="phoneNumber" />
              </label>

              <label htmlFor="address">
                <p>Address</p>
                <input type="text" id="address" />
              </label>

              <label htmlFor="category">
                <p>Category</p>
                <input
                  type="text"
                  id="category"
                  placeholder="Select category"
                />

                <select id="category">
                  <option value="Parcel" id="category">
                    Parcel delivery
                  </option>
                  <option value="Parcel" id="category">
                    Parcel delivery
                  </option>
                  <option value="Parcel" id="category">
                    Parcel delivery
                  </option>
                </select>
              </label>
              {/* </div> */}
            </form>
          </div>

          <div className="deliveryPoint1">
            <div className="deliveryHead">
              <p>Delivery Point 1</p>
              <hr />
            </div>
            <form action="/action.page">
              <label htmlFor="rName" aria-required>
                <p>Receipient's Name</p>
                <input type="text" id="rName" />
              </label>

              <label htmlFor="pPhone">
                <p>Pickup Phone Number</p>
                <input type="text" id="pPhone" />
              </label>

{/* needs javscript to be able to add a new delivery point */}
              <div className="addDelivery">
                <label htmlFor="pAddress" aria-required>
                  <p>Pickup Address</p>
                  <input type="text" id="pAddress" />
                </label>

                <p className="add">+ Add another delivery point</p>
              </div>

              <label htmlFor="pTime">
                <p>Pickup Time</p>
                <input type="text" id="pTime" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
