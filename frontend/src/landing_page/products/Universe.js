import React from "react";
import "../home/Hero.css";

function Universe() {
  return (
    <div className="container p-5">
      <div className="row">
        <h2 className="text-center">The Zerodha Universe</h2>
        <p className="text-center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 ">
          <img
            src="media\images\smallcaseLogo.png"
            alt="small case"
            style={({ maxWidth: "100%" }, { height: "50px" })}
          />
          <p
            className="mt-2"
            style={({ color: "#9b9b9b" }, { fontSize: "12px" })}
          >
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\images\streakLogo.png"
            alt="small case"
            style={({ maxWidth: "100%" }, { height: "50px" })}
          />
          <p
            className="mt-2"
            style={({ color: "#9b9b9b" }, { fontSize: "12px" })}
          >
            Algo & strategy platform
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\images\sensibullLogo.svg"
            alt="small case"
            style={({ maxWidth: "90%" }, { height: "40%" })}
          />
          <p
            className="mt-2"
            style={({ color: "#9b9b9b" }, { fontSize: "12px" })}
          >
            Options trading platform
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\zerodhaFundhouse.png"
            alt="small case"
            style={({ maxWidth: "100%" }, { height: "50px" })}
          />
          <p
            className="mt-2"
            style={({ color: "#9b9b9b" }, { fontSize: "12px" })}
          >
            Asset management
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\tijori.svg"
            alt="small case"
            style={({ maxWidth: "100%" }, { height: "50px" })}
          />
          <p
            className="mt-2"
            style={({ color: "#9b9b9b" }, { fontSize: "12px" })}
          >
            Fundamental research platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\dittoLogo.png"
            alt="small case"
            style={({ maxWidth: "100%" }, { height: "50px" })}
          />
          <p
            className="mt-2"
            style={({ color: "#9b9b9b" }, { fontSize: "12px" })}
          >
            Insurance
          </p>
        </div>
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

export default Universe;
