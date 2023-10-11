import React, { useState } from "react";
import Job from "../Job/Job";
import style from "./Career.module.css";

function Career({ category }) {
  const [isCareerTrack, setIsCareerTrack] = useState(false);
  const toggleCareerTrack = () => {
    setIsCareerTrack(!isCareerTrack);
  };
  return (
    <div key={category.jobCategory} className={style.jobCat}>
      <h2 onClick={toggleCareerTrack}>{category.jobCategory}</h2>
      {isCareerTrack && (
        <div>
          {category.jobLevels.map((level, index) => (
            <Job level={level} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Career;
