import React from "react";
import style from "./JobsList.module.css";
import { jobData } from "../../data/dataScience";

function JobsList() {
  return (
    <div className={style.App}>
      <div className={style.jobCategories}>
        {jobData.map((category) => (
          <>
            <h1>{category.field}</h1>
            <div key={category.jobCategory} className={style.jobCategory}>
              <h2>{category.jobCategory}</h2>
              <div className={style.joblevels}>
                {category.jobLevels.map((level) => (
                  <div key={level.level} className={style.jobLevel}>
                    <h3>{level.level}</h3>
                    <p>
                      <span>Description:</span> {level.jobDescription}
                    </p>
                    <span>Skills:</span>
                    <ul>
                      {level.requiredSkills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <p className={style.experience}>
                      <span>Experience:</span> {level.experience}
                    </p>
                    <p className={style.certifications}>
                      <span>Certifications:</span>{" "}
                      {level.certifications.join(", ")}
                    </p>
                    <p className={style.compensation}>
                      <span>Potential Compensation (Toronto): </span>
                      {level.potentialCompensationToronto}
                    </p>
                    <p className={style.compensation}>
                      <span> Potential Compensation (Canada): </span>
                      {level.potentialCompensationCanada}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default JobsList;
