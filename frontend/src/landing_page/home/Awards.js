import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img
            className="mt-3"
            style={{ width: "75%" }}
            src="media/images/largest-broker.svg"
            alt="Broker-image"
          />
        </div>
        <div className="col-6 p-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            1.5+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media\images\press-logos.png"
            alt="Press logo"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
