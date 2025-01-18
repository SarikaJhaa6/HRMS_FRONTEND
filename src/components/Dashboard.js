import React from 'react';
import { getToken } from '../utils/auth';

const Dashboard = () => {
  const token = getToken();
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  return (
    <div>
      <h1>Dashboard</h1>
      {userRole === 1 && <p>Admin Dashboard</p>}
      {userRole === 2 && <p>HR Manager Dashboard</p>}
      {userRole === 3 && <p>Employee Dashboard</p>}
      {userRole === 4 && <p>Manager Dashboard</p>}
    </div>
  );
};

export default Dashboard;
