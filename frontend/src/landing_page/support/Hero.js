import React from "react";
import './Support.css'

function Hero() {
  return (
    <section className="container-fluid" id="support-hero">
      <div className="p-5 mt-5" id="support-wrapper">
        <h4>Support Portal</h4>
        <a href="" className="supportTop-link">
          Track tickets
        </a>
      </div>
      <div className="row mb-5">
        <div className="col-6 mb-5">
          <h1 id="search-support" className="search-support">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div id="search-text">
            <input
              type="text"
              placeholder="Eg: how do i activate F&Q, why is my order getting rejected..."
            ></input>
          </div>
          <div id="search-links">
           <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 mb-5 mt-3">
          <h1 id="search-support" className="feature-support">
            Featured
          </h1>
          <div className="supportTop-link two-links-support">
            <div className="link-1">
              <span>
                1. <a href=""> Surveillance measure on scrips - July 2024</a>
              </span>
            </div>
            <div className="link-2">
              <span>
                2.{" "}
                <a href="">Latest Intraday leverages and Square-off timings</a>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
