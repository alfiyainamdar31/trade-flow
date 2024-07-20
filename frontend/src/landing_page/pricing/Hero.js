import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container pt-5">
      <div className="pricing-header border-bottom container section text-center p-5">
        <h1>Pricing</h1>
        <h5 className="pb-5">Free equity investments and flat ₹20 intraday and F&O trades</h5>
      </div>
      <div className="pricing-sections text-center border-bottom row">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="pricing-equity" />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" alt="trades" />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="free-mf" />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
