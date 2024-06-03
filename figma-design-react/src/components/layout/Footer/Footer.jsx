import React from "react";
import FooterLogo from "../../../constants/svg/FooterLogo.svg";
import Footer1 from "../../../constants/footer1.png";
import Footer2 from "../../../constants/footer2.png";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-footer">
          <img src={FooterLogo} className="App-logo" alt="logo" />
          <p>
            We're brand strategy and digital design agency, building brands that
            matter in culture.
          </p>
        </div>
        <div className="right-footer">
          <div>
            <h1>Service</h1>
            <p>Blog</p>
            <p>Partner with Freehand</p>
            <p>Apps &amp; Plugins</p>
            <p>FAQ</p>
            <p>UI Kit</p>
          </div>
          <div>
            <h1>Company</h1>
            <p>About </p>
            <p>Terms</p>
            <p>Privacy Policy</p>
            <p>Careers</p>
          </div>
          <div>
            <h1>Contact us</h1>
            <p>We're Always Happy to Help </p>
            <p>mail@freehand.io</p>
            <img src={Footer1} alt="GDPR" />
            <img src={Footer2} alt="Trustpilot" />
          </div>
        </div>
      </div>
      <p className="copy-right">Copyright © 2020. Crafted with love.</p>
    </footer>
  );
}

export default Footer;
