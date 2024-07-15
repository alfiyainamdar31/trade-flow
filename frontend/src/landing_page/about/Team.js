import React from "react";
import "./Team.css";

function Team() {
  return (
    <div class="section about-people">
      <div class="mini-container">
        <h2 class="text-center">People</h2>
        <div class="row between ceo-container">
          <div class="columns five text-center">
            <img
              class="founder-image"
              src="media/images/nithinKamath.jpg"
              alt="Nithin Kamath, CEO"
            />
            <h5>Nithin Kamath</h5>
            <p class="text-muted">Founder, CEO</p>
          </div>
          <div class="columns seven">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on &nbsp;
              <a href="">Homepage&nbsp;</a>
              /&nbsp;
              <a href="">TradingQnA&nbsp;</a>
              /&nbsp;
              <a href="">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;