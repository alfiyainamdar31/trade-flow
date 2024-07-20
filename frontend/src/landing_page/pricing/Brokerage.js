import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-8 p-4">
          <a href="" className="text-center">
            <h5>Brokerage calculator</h5>
          </a>
          <ul className="text-muted" style={{ fontSize: "0.75rem" }}>
            <li style={{ marginBottom: "5.5px" }}>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li style={{ marginBottom: "5px" }}>
              Digital contract notes will be sent via e-mail.
            </li>{" "}
            <li style={{ marginBottom: "5px" }}>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li style={{ marginBottom: "5px" }}>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li style={{ marginBottom: "5px" }}>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li style={{ marginBottom: "5px" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="">
            <h5>List of charges</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
