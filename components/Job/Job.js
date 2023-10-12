import style from "./Job.module.css";

function Job({ level, index }) {
  //
  return (
    <div key={level.level} className={style.jobLevel}>
      <h3>
        Level {index + 1}: {level.level}
      </h3>
      <p>
        <span>Description:</span> {level.jobDescription}
      </p>
      <span>Skills:</span>
      <ul>
        {level.requiredSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {/* <span>Responsibilities:</span>
      <ul>
        {level.responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul> */}
      <p className={style.experience}>
        <span>Experience:</span> {level.experience}
      </p>
      <p className={style.certifications}>
        <span>Certifications:</span> {level.certifications.join(", ")}
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
  );
}

export default Job;
