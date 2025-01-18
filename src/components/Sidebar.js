import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCalendarAlt, FaMoneyBillAlt, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineBars } from "react-icons/ai";
import { FaGripVertical } from "react-icons/fa6";
import { getToken } from '../utils/auth';
import './Sidebar.css';

const Sidebar = ({ onLogout, isExpanded, setIsExpanded }) => {
  const token = getToken();
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;
  const location = useLocation();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuItemClick = () => {
    setIsExpanded(false);
  };

  const renderMenuItems = () => {
    switch (userRole) {
      case 1: // Admin
      return (
        <>
          <li
            className={location.pathname === '/dashboard' ? 'active' : ''}
            onClick={handleMenuItemClick}
          >
            <Link to="/dashboard">
              <FaTachometerAlt />
              {isExpanded && <span>Dashboard</span>}
            </Link>
          </li>
          <li
            className={location.pathname === '/employee-data' ? 'active' : ''}
            onClick={handleMenuItemClick}
          >
            <Link to="/employee-data">
              <FaUser />
              {isExpanded && <span>Employee Data</span>}
            </Link>
          </li>
          <li
            className={location.pathname === '/attendance' ? 'active' : ''}
            onClick={handleMenuItemClick}
          >
            <Link to="/attendance">
              <FaCalendarAlt />
              {isExpanded && <span>Attendance</span>}
            </Link>
          </li>
          <li
            className={location.pathname === '/leave-requests' ? 'active' : ''}
            onClick={handleMenuItemClick}
          >
            <Link to="/leave-requests">
              <FaCalendarAlt />
              {isExpanded && <span>Leave Requests</span>}
            </Link>
          </li>
          <li
            className={location.pathname === '/payroll' ? 'active' : ''}
            onClick={handleMenuItemClick}
          >
            <Link to="/payroll">
              <FaMoneyBillAlt />
              {isExpanded && <span>Payroll</span>}
            </Link>
          </li>
          <li
            className={location.pathname === '/performance-reviews' ? 'active' : ''}
            onClick={handleMenuItemClick}
          >
            <Link to="/performance-reviews">
              <FaChartBar />
              {isExpanded && <span>Performance Reviews</span>}
            </Link>
          </li>
          <li
            className={location.pathname === '/settings' ? 'active' : ''}
            onClick={handleMenuItemClick}
          >
            <Link to="/settings">
              <FaCog />
              {isExpanded && <span>Settings</span>}
            </Link>
          </li>
        </>
      );
      
      case 2: // HR Manager
        return (
          <>
            <li className={location.pathname === '/dashboard' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/dashboard">
                <FaTachometerAlt />
                {isExpanded && <span>Dashboard</span>}
              </Link>
            </li>
            <li className={location.pathname === '/employee-directory' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/employee-directory">
                <FaUser />
                {isExpanded && <span>Employee Directory</span>}
              </Link>
            </li>
            <li className={location.pathname === '/attendance' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/attendance">
                <FaCalendarAlt />
                {isExpanded && <span>Attendance</span>}
              </Link>
            </li>
            <li className={location.pathname === '/leave-requests' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/leave-requests">
                <FaCalendarAlt />
                {isExpanded && <span>Leave Requests</span>}
              </Link>
            </li>
            <li className={location.pathname === '/payroll' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/payroll">
                <FaMoneyBillAlt />
                {isExpanded && <span>Payroll</span>}
              </Link>
            </li>
            <li className={location.pathname === '/recruitment' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/recruitment">
                <FaChartBar />
                {isExpanded && <span>Recruitment</span>}
              </Link>
            </li>
            <li className={location.pathname === '/performance-reviews' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/performance-reviews">
                <FaChartBar />
                {isExpanded && <span>Performance Reviews</span>}
              </Link>
            </li>
          </>
        );
      case 3: // Employee
        return (
          <>
            <li className={location.pathname === '/dashboard' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/dashboard">
                <FaTachometerAlt />
                {isExpanded && <span>Dashboard</span>}
              </Link>
            </li>
            <li className={location.pathname === '/profile' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/profile">
                <FaUser />
                {isExpanded && <span>Profile</span>}
              </Link>
            </li>
            <li className={location.pathname === '/attendance' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/attendance">
                <FaCalendarAlt />
                {isExpanded && <span>Attendance</span>}
              </Link>
            </li>
            <li className={location.pathname === '/leave-requests' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/leave-requests">
                <FaCalendarAlt />
                {isExpanded && <span>Leave Requests</span>}
              </Link>
            </li>
          </>
        );
      case 4: // Manager
        return (
          <>
            <li className={location.pathname === '/dashboard' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/dashboard">
                <FaTachometerAlt />
                {isExpanded && <span>Dashboard</span>}
              </Link>
            </li>
            <li className={location.pathname === '/team-attendance' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/team-attendance">
                <FaCalendarAlt />
                {isExpanded && <span>Team Attendance</span>}
              </Link>
            </li>
            <li className={location.pathname === '/leave-requests' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/leave-requests">
                <FaCalendarAlt />
                {isExpanded && <span>Leave Requests</span>}
              </Link>
            </li>
            <li className={location.pathname === '/performance-reviews' ? 'active' : ''}
             onClick={handleMenuItemClick}
            >
              <Link to="/performance-reviews">
                <FaChartBar />
                {isExpanded && <span>Performance Reviews</span>}
              </Link>
            </li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
    <div className="sidebar-top">
      {isExpanded && (
        <>
          <div className="user-icon">
            <FaUser />
          </div>
          <div className="welcome-text">Welcome, User!</div>
        </>
      )}
      <div className="toggle-icon" onClick={toggleSidebar}>
        {isExpanded ? <AiOutlineBars /> : <FaGripVertical />}
      </div>
    </div>

    <ul>
      {renderMenuItems()}
      <li onClick={onLogout}>
        <Link to="#">
          <FaSignOutAlt />
          {isExpanded && <span>Logout</span>}
        </Link>
      </li>
    </ul>
  </div>
  );
};

export default Sidebar;
