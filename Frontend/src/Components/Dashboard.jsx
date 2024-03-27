// Dashboard.jsx
import React, { useState, useEffect } from 'react';
// import AddEmployeeForm from '../components/dashboard/AddEmployeeForm';
// import EmployeeTable from '../components/dashboard/EmployeeTable';

function Dashboard() {
//   const [employees, setEmployees] = useState([]);
//   const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);

//   useEffect(() => {
//     // Fetch employees when component mounts
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await getEmployees();
//       setEmployees(response.data); // Assuming API response contains employee data
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   const toggleAddEmployeeForm = () => {
//     setShowAddEmployeeForm(!showAddEmployeeForm);
//   };

//   const addEmployee = (employee) => {
//     // Logic to add employee to the local state or make API call to add employee
//     // Update employees state accordingly
//     setEmployees([...employees, employee]);
//   };

//   const deleteEmployee = (id) => {
//     // Logic to delete employee from the local state or make API call to delete employee
//     // Update employees state accordingly
//     const updatedEmployees = employees.filter(emp => emp.id !== id);
//     setEmployees(updatedEmployees);
//   };

  return (
    <div>
      <h2>Dashboard</h2>
      {/* <button onClick={toggleAddEmployeeForm}>Add Employee</button>
      {showAddEmployeeForm && <AddEmployeeForm addEmployee={addEmployee} />}
      <EmployeeTable employees={employees} deleteEmployee={deleteEmployee} /> */}
    </div>
  );
}

export default Dashboard;
