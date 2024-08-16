import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    } else {
      const sampleEmployees = [
        { EmployeeId: 1, name: 'John Doe', position: 'Developer', department: 'IT', email: 'john@example.com', phone: '123-456-7890' },
        { EmployeeId: 2, name: 'Jane Smith', position: 'Designer', department: 'UX', email: 'jane@example.com', phone: '987-654-3210' },
      ];
      setEmployees(sampleEmployees);
      localStorage.setItem('employees', JSON.stringify(sampleEmployees));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeList employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
