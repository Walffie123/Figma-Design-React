import React from "react";
import "./PricePlan.css";
function PricePlan() {
  return (
    <div className="priceplan-container">
      <p>
        Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
        varius enim in eros .
      </p>

      <section className="card-container">
        {/*card 1*/}
        <div
          className="card-subtitle"
          style={{ borderTop: "5px solid #0593FA" }}
        >
          <h2>Started Plan</h2>
          <p style={{ color: "#0593FA" }}>Free</p>
          <p>per month</p>
          <p>
            Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
            varius enim in eros .
          </p>
          <button className="start-button">Get Started</button>
        </div>

        {/*card 2*/}

        <div
          className="card-subtitle"
          style={{ borderTop: "5px solid #56CBAE" }}
        >
          <h2>Started Plan</h2>
          <p style={{ color: "#56CBAE" }}>$20.00</p>
          <p>per month</p>
          <p>
            Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
            varius enim in eros .
          </p>
          <button className="start-button">Get Started</button>
        </div>

        {/*Card 3*/}

        <div
          className="card-subtitle"
          style={{ borderTop: "5px solid #FA6770" }}
        >
          <h2>Started Plan</h2>
          <p style={{ color: "#FA6770" }}>$50.00</p>
          <p>per month</p>
          <p>
            Lorem ipsum dolor sit amet, coectetur adipiscing elit. SuspendisseF
            varius enim in eros .
          </p>
          <button className="start-button">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default PricePlan;
