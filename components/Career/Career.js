import Job from "../Job/Job";
import style from "./Career.module.css";

function Career({ category }) {
  return (
    <div key={category.jobCategory} className={style.jobCat}>
      <h2>{category.jobCategory}</h2>
      <div className={style.jobLevels}>
        {category.jobLevels.map((level, index) => (
          <Job level={level} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Career;
