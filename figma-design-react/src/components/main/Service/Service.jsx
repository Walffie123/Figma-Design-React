import React from "react";
import "./Service.css";
import Speaker from "../../../constants/svg/speaker.svg";
import Store from "../../../constants/svg/store.svg";
import Phone from "../../../constants/svg/phone.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
function Service() {
  return (
    <div className="service-container">
      <h1> OUR SERVICES</h1>
      <p>
        Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
        varius enim in eros .
      </p>

      <section className="card-container">
        <div className="card">
          <div className="card_subtitle">
            <img src={Speaker} alt="Speaker" />
            <h2>Jane Doe</h2>
            <p>
              Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
              varius enim in eros .
            </p>
            <a href="#"> Learn more</a>
          </div>
        </div>
        <div className="card">
          <div className="card_subtitle">
            <img src={Store} alt="Speaker" />
            <h2>Ecommerce</h2>
            <p>
              Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
              varius enim in eros .
            </p>
            <a href="#"> Learn more</a>
          </div>
        </div>
        {/*Card 3*/}
        <div className="card">
          <div className="card_subtitle">
            <img src={Phone} alt="Speaker" />
            <h2>Application</h2>
            <p>
              Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
              varius enim in eros .
            </p>
            <a href="#"> Learn more</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
