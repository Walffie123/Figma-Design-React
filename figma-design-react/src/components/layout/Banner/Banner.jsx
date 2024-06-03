import React from "react";
import "./Banner.css";
import BannerImage from "../../../constants/BannerImage.png";
function Banner() {
  return (
    <div className="banner-container">
      <section className="left-banner">
        <p>
          Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
          varius enim in eros .
        </p>
        <div>
          <button
            className="banner-btn"
            style={{ backgroundColor: "#007FFC", color: "white" }}
          >
            View Projects
          </button>
          <button
            className="banner-btn"
            style={{ backgroundColor: "white", color: "#007FFC" }}
          >
            Learn more
          </button>
        </div>
      </section>
      <section className="right-banner">
        <img
          className="banner_image"
          src={BannerImage}
          alt="3 people smiling"
        />

        <button className="left-button">◀</button>
        <button className="right-button">▶</button>
      </section>
    </div>
  );
}

export default Banner;
