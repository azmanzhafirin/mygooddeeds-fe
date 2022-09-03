import React from "react";
import "./Main_Banner.scss";
import Banner from "../../assets/images/image-placeholder.png";

function Main_Banner() {
  return (
    <div className="main_banner">
      <div className="container-fluid">
        <div className="main-banner-content">
          <h1>
            <span>We Believe,</span>
            <span> We can save More Lifes with you.</span>
          </h1>
          <div className="primary-btn">Donate Now</div>
        </div>
      </div>
    </div>
  );
}

export default Main_Banner;
