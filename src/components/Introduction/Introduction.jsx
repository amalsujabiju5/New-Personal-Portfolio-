import React from "react";
import "./Introduction.css";
import { intro, technologies } from "../../constants/data";

const Introduction = () => {
  return (
    <div className="overview">
      <div className="intro">
        <h1>{intro[1].title}</h1>
      </div>
      <h3>{intro[1].desc}</h3>
      <div className="buttons">
        <button className="btn">
          <a
            href="https://github.com/amalsujabiju5/Resume/blob/main/AmalSBiju%20.pdf"
            className="btn-link"
          >
            Resume
          </a>
        </button>
        <button className="btn">
          <a
            href="https://www.linkedin.com/in/amal-suja-biju-9a6107212/"
            className="btn-link"
          >
            LinkedIn
          </a>
        </button>
        <button className="btn">
          <a
            href="https://github.com/amalsujabiju5?tab=repositories"
            className="btn-link"
          >
            Github
          </a>
        </button>
      </div>
      <div className="knowledge">
        {technologies.map((tech, index) => (
          <div className="skills" key={index}>
            <div className="image1">
              <img src={tech.icon} alt="img" />
              <h2 className="formatted-text">
                {tech.name.split(" ").map((word, idx) => (
                  <React.Fragment key={idx}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
