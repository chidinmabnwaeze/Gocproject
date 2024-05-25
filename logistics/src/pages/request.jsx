import React from "react";
import Header from "../components/headProfile";
import Footer from "../components/footer";

export default function request() {
  return (
    <div className="request-pd">
      <Header />
      <div className="wholeParcelPage">
        <div className="requestheading">
          <h2>Request Parcel Delivery</h2>
        </div>

        <div className="progress">
          <div className="one">
            <div className="circle1">
              <p>1</p>
            </div>
           <div className="progress-title">
           <p className="progress-name">Shipping</p>
           </div>

          </div>

          <div className="hr-div">
            <hr className="theHr" />
          </div>

          <div className="two">
            <div className="circle2">
              <p>2</p>
            </div>
            <p className="progress-name">Payment</p>
          </div>
          <div className="hr-div">
            <hr />
          </div>

          <div className="three">
            <div className="circle3">
              <p>3</p>
            </div>
            <p className="progress-name">Confirmation</p>
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
                <p>
                  Customer's name <span className="asterisk">*</span>
                </p>
                <input type="text" id="name" />
              </label>

              <label htmlFor="email">
                <p>
                  Email <span className="asterisk">*</span>
                </p>
                <input type="text" id="email" />
              </label>

              <label htmlFor="phoneNumber">
                <p>
                  Pickup Phone number <span className="asterisk">*</span>
                </p>
                <input type="tel" id="phoneNumber" />
              </label>

              <label htmlFor="address">
                <p>
                  Address <span className="asterisk">*</span>
                </p>
                <input type="text" id="address" />
              </label>

              <label htmlFor="category">
                <p>
                  Category <span className="asterisk">*</span>
                </p>
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
              <p>Delivery Point 1 </p>
              <hr />
            </div>
            <form action="/action.page">
              <label htmlFor="rName" aria-required>
                <p>
                  Receipient's Name <span className="asterisk">*</span>
                </p>
                <input type="text" id="rName" />
              </label>

              <label htmlFor="pPhone">
                <p>
                  Pickup Phone Number <span className="asterisk">*</span>
                </p>
                <input type="text" id="pPhone" />
              </label>

              {/* needs javscript to be able to add a new delivery point */}
              <div className="addDelivery">
                <label htmlFor="pAddress" aria-required>
                  <p>
                    Pickup Address <span className="asterisk">*</span>
                  </p>
                  <input type="text" id="pAddress" />
                </label>

                <p className="add">+ Add another delivery point</p>
              </div>

              {/* needs javscript to be able to schedule delivery time */}
              <label htmlFor="pTime">
                <p>Pickup Time</p>
                <input type="text" id="pTime" />
              </label>
            </form>
          </div>
        </div>

        <div className="proceed-button">
          <button className="proceedToNext">
            <a href="./request2">Proceed</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
