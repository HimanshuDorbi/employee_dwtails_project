import React from "react";

interface EmployeeProps {
  name: string;
  designation: string;
  project: string;
  yearsOfExperience: number;
  image: string;
}

export const EmployeeCard: React.FC<EmployeeProps> = ({
  name,
  designation,
  project,
  yearsOfExperience,
  image,
}) => {
  return (
    <div className="employee-card">
      <img src={image} alt={`${name}'s profile`} className="employee-image" />
      <div className="employee-details">
        <h2>{name}</h2>
        <p>Designation: {designation}</p>
        <p>Project: {project}</p>
        <p>Experience: {yearsOfExperience} years</p>
      </div>
    </div>
  );
};
