import React from "react";

function RightSection({ imageURL, productName, productDesc, tryDemo }) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-5 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{productDesc}</p>
          <div>
            <a href={tryDemo} style={{ marginRight: "50px" }}>
              {tryDemo}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
                style={{ marginLeft: "5px" }}
              ></i>
            </a>
          </div>
        </div>
        <div className="col-7">
          <img src={imageURL} alt="product-image" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
