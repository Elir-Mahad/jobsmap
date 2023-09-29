import React, { useState } from "react";
import style from "./Field.module.css";
import { dataScienceJobs } from "../../data/dataScience";
import { softwareDevelopmentJobs } from "../../data/softwareDevelopment";
import Career from "../Career/Career";

function Field() {
  const [isDataScience, setIsDataScience] = useState(false);
  const [isSoftwareDevelopment, setIsSoftwareDevelopment] = useState(false);

  const toggleDataScience = () => {
    setIsDataScience(!isDataScience);
    setIsSoftwareDevelopment(false);
  };

  const toggleSoftwareDevelopment = () => {
    setIsSoftwareDevelopment(!isSoftwareDevelopment);
    setIsDataScience(false);
  };

  return (
    <div className={style.screen}>
      <div className={style.jobCategories}>
        <button onClick={toggleDataScience}>Data Science</button>
        <button onClick={toggleSoftwareDevelopment}>
          Software Development
        </button>
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
        </div>
      </div>
    </div>
  );
}

export default Field;
