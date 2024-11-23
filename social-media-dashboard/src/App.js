// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardProvider } from './DashboardContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Followers from './components/Followers';
import Trends from './components/Trends';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import Settings from './components/Settings';

function App() {
  return (
    <DashboardProvider>
      <Router>
        <div className="App">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/followers" element={<Followers />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DashboardProvider>
  );
}

export default App;
