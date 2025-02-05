import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-section">
      <img className="bg-img" src="../images/hero.png" alt="hero" />
      <img className="bg-img-mb" src="../images/hero-mobile.png" alt="hero" />
      <div className="hero-content-mob">
        <img className="" src="../images/hero-2.png" alt="hero" />
        <a href="#" className="hero-link">
          ↗
        </a>
      </div>
      <div className="hero-content">
        <button className="find-car-btn">
          Find Your Car{" "}
          <img className="arrow" src="../images/arrow.png" alt="arrow" />
        </button>
        <div className="hero-card">
          <img className="hero-2" src="../images/hero-2.png" alt="hero" />
          <div className="hero-desc">
            <h3>Try our Matchmaker</h3>
            <p>
              Pizza ipsum dolor meat lovers <br /> buffalo. Anchovies ham deep
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
