import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { isAuthenticated, logout } from './utils/auth';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar'; // Import the Sidebar

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Default to collapsed

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {isLoggedIn && (
          <Sidebar onLogout={handleLogout} isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
        )}
        <div
          style={{
            marginLeft: isSidebarExpanded ? '250px' : '60px', // Dynamic margin based on sidebar state
            padding: '20px',
            flex: 1,
            transition: 'margin-left 0.3s', // Smooth transition for the content
          }}
        >
          <nav>
            {isLoggedIn ? (
              <div>
                {/* Logout button is now handled in the Sidebar */}
              </div>
            ) : (
              <div>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
              </div>
            )}
          </nav>
          <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/signup" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Signup />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
