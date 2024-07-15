import React from "react";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg bg-white border-bottom">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="media\images\logo.svg" style={{width: "25%"}} alt="Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                Support
                </a>
              </li>
              <li class="nav-item">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
