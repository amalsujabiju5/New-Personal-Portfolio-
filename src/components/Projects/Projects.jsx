import React from "react";
import "./Projects.css";
import youtube from "../../assets/youtube.png";
import portfolio from "../../assets/portfolio.png";
import netflix from "../../assets/Netflix1.png";
import spotify from "../../assets/spotify.png";
import weather from "../../assets/weather.png";
import ChatApp from "../../assets/chatApp.png";
import { projects } from "../../constants/data";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects">
        <div className="section">
          <div className="dp">
            <img src={projects[0].image} alt="youtube clone" />
            <h2>{projects[0].name}</h2>
            <h4>{projects[0].description}</h4>
            <div className="languages">
              <h5>#HTML</h5>
              <h5>#JavaScript</h5>
              <h5>#React</h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="dp">
            <img src={projects[1].image} alt="youtube clone" />
            <h2>{projects[1].name}</h2>
            <h4>{projects[1].description}</h4>
            <div className="languages">
              <h5>#HTML</h5>
              <h5>#JavaScript</h5>
              <h5>#React</h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="dp">
            <img src={projects[2].image} alt="youtube clone" />
            <h2>{projects[2].name}</h2>
            <h4>{projects[2].description}</h4>
            <div className="languages">
              <h5>#Flutter</h5>
              <h5>#dart</h5>
              <h5>#TMDB</h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="dp">
            <img src={projects[3].image} alt="youtube clone" />
            <h2>{projects[3].name}</h2>
            <h4>{projects[3].description}</h4>
            <div className="languages">
              <h5>#HTML</h5>
              <h5>#JavaScript</h5>
              <h5>#React</h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="dp">
            <img src={projects[4].image} alt="youtube clone" />
            <h2>{projects[4].name}</h2>
            <h4>{projects[4].description}</h4>
            <div className="languages">
              <h5>#Flutter</h5>
              <h5>#Dart</h5>
              <h5>#WeatherAPI</h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="dp">
            <img src={projects[5].image} alt="youtube clone" />
            <h2>{projects[5].name}</h2>
            <h4>{projects[5].description}</h4>
            <div className="languages">
              <h5>#HTML</h5>
              <h5>#JavaScript</h5>
              <h5>#React</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
