import React from "react";
import "../App.css";

const Hero = ({ onExplore }) => {
  return (
    <div className="hero-container">
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src="/Paracadutismo.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>

      <div className="hero-title-container">
        <h1 className="hero-title">Esplora selvaggio, condividi l’avventura</h1>
      </div>
    </div>
  );
};

export default Hero;
