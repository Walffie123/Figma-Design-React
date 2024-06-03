import React from "react";
import "./Features.css";
import Feature1 from "../../../constants/Feature1.png";
import Feature2 from "../../../constants/Feature2.png";
function Features() {
  return (
    <div className="feature-container">
      <h1> OUR SERVICES</h1>
      <p>
        Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
        varius enim in eros .
      </p>
      {/*First image*/}
      <section className="feature-section">
        <div className="left-feature">
          <img src={Feature1} alt="spotify" />
          <p>
            120 million curious readers
            <br />
            and growing.
          </p>
        </div>
        {/*Second Image*/}
        <div className="right-feature">
          <img src={Feature2} alt="manstand" />
          <p>
            Expand your reading.
            <br />
            Expand your mind.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Features;
