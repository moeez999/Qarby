import React from "react";
import "./Partners.css";

const partners = [
  { name: "OnlyOne", logo: "../images/onlyone.png" },
  { name: "Zillow", logo: "../images/zillow.png" },
  { name: "VML", logo: "../images/vml.png" },
  { name: "ECHO", logo: "../images/echo.png" },
  { name: "Exact", logo: "../images/exact.png" },
  { name: "Suma", logo: "../images/suma.png" },
  { name: "IDEO", logo: "../images/IDE.png" },
];

const Partners = () => {
  return (
    <div className="partners-section">
      <h3 className="partners-heading">FEW OF OUR PARTNERS</h3>
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
