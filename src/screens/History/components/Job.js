import React from "react";

const Job = ({ title, company, date, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{company}</h2>
      <h3>{date}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Job;
