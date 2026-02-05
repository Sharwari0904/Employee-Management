import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  // Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // If no user or role mismatch, redirect to login
  if (!user || user.role !== 'employee') {
    navigate('/login');
    return null; // Don't render anything
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome, {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Designation:</strong> {user.designation}</p>
    </div>
  );
};

export default EmployeeDashboard;
