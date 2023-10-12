import React, { useState } from "react";
import style from "./Field.module.css";
import { dataScienceJobs } from "../../data/dataScience";
import { softwareDevelopmentJobs } from "../../data/softwareDevelopment";
import { cyberSecurityJobs } from "../../data/cyberSecurity";
import Career from "../Career/Career";

function Field() {
  const [isDataScience, setIsDataScience] = useState(false);
  const [isSoftwareDevelopment, setIsSoftwareDevelopment] = useState(false);
  const [isCyberSecurity, setIsCyberSecurity] = useState(false);

  const toggleDataScience = () => {
    setIsDataScience(!isDataScience);
    setIsSoftwareDevelopment(false);
    setIsCyberSecurity(false);
  };

  const toggleSoftwareDevelopment = () => {
    setIsSoftwareDevelopment(!isSoftwareDevelopment);
    setIsDataScience(false);
    setIsCyberSecurity(false);
  };

  const toggleCyberSecurity = () => {
    setIsCyberSecurity(!isCyberSecurity);
    setIsDataScience(false);
    setIsSoftwareDevelopment(false);
  };

  return (
    <div className={style.screen}>
      <div className={style.jobCategories}>
        <button onClick={toggleDataScience}>Data Science</button>
        <button onClick={toggleSoftwareDevelopment}>
          Software Development
        </button>
        <button onClick={toggleCyberSecurity}>Cyber security</button>
        <div style={{ width: "100%" }}>
          {isDataScience &&
            dataScienceJobs.map((category) => (
              <div key={category.id}>
                <Career category={category} />
              </div>
            ))}
          {isSoftwareDevelopment &&
            softwareDevelopmentJobs.map((category) => (
              <div key={category.id}>
                <Career category={category} />
              </div>
            ))}
          {isCyberSecurity &&
            cyberSecurityJobs.map((category) => (
              <div key={category.id}>
                <Career category={category} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Field;
