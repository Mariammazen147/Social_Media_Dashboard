// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Social Dashboard</h2>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/followers">Followers</Link>
        <Link to="/trends">Trends</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
    </div>
  );
}

export default Sidebar;
