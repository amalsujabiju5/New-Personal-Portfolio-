import React from "react";
import "./Hero.css";
import am from "../../assets/moon.png";
import { intro } from "../../constants/data";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="image">
          <img src={am} alt="" />
        </div>
        <div className="details">
          <h1>
            Hi My Name is <br />
            <span>{intro[0].title}</span>
          </h1>
          <p>{intro[0].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
