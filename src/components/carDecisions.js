import React from "react";
import "./CarDecision.css";

const features = [
  {
    title: "Chat with",
    title2: "Qarby",
    icon: "../images/chat.png",
    link: "#",
  },
  {
    title: "The",
    title2: "MatchMaker",
    icon: "../images/matchmaker.png",
    link: "#",
  },
  { title: "Your", title2: "Garage", icon: "../images/garage.png", link: "#" },
];

const CarDecision = () => {
  return (
    <div className="car-decision-section">
      <h2 className="car-decision-heading">Your go-to for car decisions</h2>
      <p className="car-decision-subtext">
        Your AI Car-Buying Assistant. Qarby simplifies car buying with trusted
        information, expert insights, and personalized guidance, making the
        process clear and stress-free.
      </p>

      <div className="car-decision-container">
        {features.map((feature, index) => (
          <div key={index} className="car-decision-card">
            <div className="main-card-decision">
              <img src="../images/smallCard.png" alt="" />
              <div className="card-content">
                <div className="car-decision-icon">
                  <img src={feature.icon} alt="" />
                </div>
                <div className="text-card">
                  <p className="car-decision-title">{feature.title}</p>
                  <p className="car-decision-title">{feature.title2}</p>
                </div>
              </div>
              <a href={feature.link} className="car-decision-link">
                ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDecision;
