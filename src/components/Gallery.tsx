import React, { useEffect, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";

interface Employee {
  id: number;
  name: string;
  designation: string;
  project: string;
  yearsOfExperience: number;
  image: string;
}

export const Gallery: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load employee data from external JSON
  useEffect(() => {
    fetch("/data/employees.json")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const goToNext = () => {
    if (employees.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % employees.length);
  };

  const goToPrevious = () => {
    if (employees.length === 0) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + employees.length) % employees.length
    );
  };

  if (employees.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      <button onClick={goToPrevious} className="arrow-btn">
        ←
      </button>
      <EmployeeCard {...employees[currentIndex]} />
      <button onClick={goToNext} className="arrow-btn">
        →
      </button>
    </div>
  );
};
