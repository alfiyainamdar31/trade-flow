import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  LearnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-7 p-5">
          <img src={imageURL} alt="product-image" />
        </div>
        <div className="col-5 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{productDesc}</p>
          <div>
            <a href={tryDemo} style={{ marginRight: "50px" }}>
              {tryDemo}
              {tryDemo && (
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              )}
            </a>
            <a href={LearnMore}>
              {LearnMore}
              {LearnMore && (
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              )}
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="google-play-badge"
                style={{ marginRight: "20px" }}
              />
            </a>
            <a href={appStore}>
              <img src="media/images/appstore-badge.svg" alt="appstore-badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
