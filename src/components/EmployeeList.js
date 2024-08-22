import React from 'react';
import EmployeeCard from './EmployeeCard';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <div className="container">
      <header className="header">
        Employee Directory
      </header>
      <div className="main-content">
        <div className="employee-list">
          {employees.map(employee => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
        <div className="employee-details">
          {/* Details of the selected employee will be shown here */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
