import React from "react";
import style from "./JobsList.module.css";
import { jobData } from "../../data/dataScience";

function JobsList() {
  return (
    <div className={style.App}>
      <h1>Job Categories</h1>
      <div className={style.jobCategories}>
        {jobData.map((category) => (
          <div key={category.jobCategory} className={style.jobCategory}>
            <h2>{category.jobCategory}</h2>
            <div className={style.joblevels}>
              {category.jobLevels.map((level) => (
                <div key={level.level} className={style.jobLevel}>
                  <h3>Level: {level.level}</h3>
                  <p>Description: {level.jobDescription}</p>
                  <ul>
                    {" "}
                    Skills:
                    {level.requiredSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <p className={style.experience}>
                    Experience: {level.experience}
                  </p>
                  <p className={style.certifications}>
                    Certifications: {level.certifications.join(", ")}
                  </p>
                  <p className={style.compensation}>
                    Potential Compensation (Toronto):{" "}
                    {level.potentialCompensationToronto}
                  </p>
                  <p className={style.compensation}>
                    Potential Compensation (Canada):{" "}
                    {level.potentialCompensationCanada}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsList;
