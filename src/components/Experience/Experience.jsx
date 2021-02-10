import React from "react";

import jobs from "../../displayData/experience";

import classes from "./Experience.module.css";

const Experience = () => {
  const cards = jobs.map((job, index) => {
    return (
      <div key={index} className={`${classes.ExperienceCard} card`}>
        <div className="card-header">
          <h3>
            <img className={classes.BusinessLogo} src={job.logo} alt="logo" />
            {job.companyName}
          </h3>
          <span>
            {job.startDate} - {job.endDate}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{job.title}</h5>
          <ul>
            {job.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
          <h5 className="card-title">Accomplishments</h5>
          <ul>
            {job.accomplishments.map((accomplishment) => (
              <li key={accomplishment}>{accomplishment}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  });

  return <div className={`${classes.Experience} container`}>{cards}</div>;
};

export default Experience;
