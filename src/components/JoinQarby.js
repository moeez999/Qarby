import React from "react";
import "./JoinQr.css";

function JoinQr() {
  return (
    <section className="join-section">
      <div className="background-grid"></div>
      <div className="join-content">
        <h1 className="join-title">Join Qarby Community</h1>
        <p className="join-description">
          Pizza ipsum dolor meat lovers buffalo. Anchovies ham deep
        </p>
        <div className="joinus-img">
          <img src="../images/join.png" alt="Join Us" />
        </div>
        <button className="join-now-btn">Join Now</button>
      </div>
    </section>
  );
}

export default JoinQr;
