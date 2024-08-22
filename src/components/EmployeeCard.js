import React from 'react';
import './EmployeeList.css';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
      <button className="button">View Details</button>
    </div>
  );
};

export default EmployeeCard;
