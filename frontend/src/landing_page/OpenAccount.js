import React from "react";
import "../landing_page/home/Hero.css";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-2">Open a Zerodha account</h1>
        <p className="fs-5.5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "18%", margin: "0 auto", backgroundColor: "#387ed1" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
