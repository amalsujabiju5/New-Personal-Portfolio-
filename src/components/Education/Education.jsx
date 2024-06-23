import React from "react";
import "./Education.css";
import { education } from "../../constants/data";

const Education = () => {
  return (
    <div className="main">
      <div className="heading">
        <h1>
          <span className="highlight">E</span>ducation &
          <span className="highlight">C</span>ertifications
        </h1>
      </div>
      <div className="timeline">
        <div className="checkpoint">
          <div>
            <h2>{education[0].company_name}</h2>
            <p>{education[0].desc}</p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>{education[1].company_name}</h2>
            <p>{education[1].desc}</p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>{education[2].company_name}</h2>
            <p>{education[2].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
