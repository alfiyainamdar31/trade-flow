import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <h1 className="fs-2 support-title" style={{ color: "#444" }}>
        To create a ticket, select a relevant topic
      </h1>
      <div className="row">
        <div className="col-4 support-column">
          <h5 className="support-head">
            <a href="">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp; Account
              Opening
            </a>
          </h5>
          <div className="support-links">
            <a href="">Getting started</a>
            <a href="">Online</a>
            <a href="">Offline</a>
            <a href="">Charges</a>
            <a href="">Company, Partnership and HUF</a>
            <a href="">Non Resident Indian (NRI)</a>
          </div>
        </div>
        <div className="col-4 support-column">
          <h5 className="support-head">
            <a href="">
              <i class="fa fa-user-o" aria-hidden="true"></i>&nbsp; Your Zerodha
              Account
            </a>
          </h5>
          <div className="support-links">
            <a href="">Login credentials</a>
            <a href="">Your Profile</a>
            <a href="">Account modification and segment addition</a>
            <a href="">CMR & DP ID</a>
            <a href="">Nomination</a>
            <a href="">Transfer and conversion of shares</a>
          </div>
        </div>
        <div className="col-4 support-column">
          <h5 className="support-head">
            <a href="">
              <i class="fa fa-signal" aria-hidden="true"></i>&nbsp; Trading and
              Markets
            </a>
          </h5>
          <div className="support-links">
            <a href="">Trading FAQs</a>
            <a href="">Kite</a>
            <a href="">Margins</a>
            <a href="">Product and order types</a>
            <a href="">Corporate actions</a>
            <a href="">Kite features</a>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-4 support-column">
          <h5 className="support-head">
            <a href="">
              <i class="fa fa-window-maximize" aria-hidden="true"></i>&nbsp;
              Funds
            </a>
          </h5>
          <div className="support-links">
            <a href="">Fund withdrawal</a>
            <a href="">Adding funds</a>
            <a href="">Adding bank accounts</a>
            <a href="">eMandates</a>
          </div>
        </div>
        <div className="col-4 support-column">
          <h5 className="support-head">
            <a href="">
              <i class="fa fa-life-ring" aria-hidden="true"></i>&nbsp; Console
            </a>
          </h5>
          <div className="support-links">
            <a href="">IPO</a>
            <a href="">Portfolio</a>
            <a href="">Funds statement</a>
            <a href="">Profile</a>
            <a href="">Reports</a>
            <a href="">Referral program</a>
          </div>
        </div>
        <div className="col-4 support-column">
          <h5 className="support-head">
            <a href="">
              <i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp; Coin
            </a>
          </h5>
          <div className="support-links">
            <a href="">Understanding mutual funds and Coin</a>
            <a href="">Coin app</a>
            <a href="">Coin web</a>
            <a href="">Transactions and reports</a>
            <a href="">National Pension Scheme (NPS)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
