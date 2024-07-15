import React from "react";
import { Link } from "react-router-dom";
import "../landing_page/home/Hero.css";
import "./ErrorLink.css";
import "./Footer.css";

function ErrorLink() {
  return (
    <>
      <main className="container-error-link">
        <section className="mini-container">
          <div className="row between design-content">
            <div className="six columns">
              <h4>404</h4>
              <h1>Couldn’t find that page</h1>
              <h5>
                We couldn’t find the page you were looking for. Visit{" "}
                <Link to="/">Zerodha’s home page</Link>
              </h5>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ErrorLink;
