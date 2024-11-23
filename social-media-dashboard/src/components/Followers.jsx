// src/components/Followers.js
import React, { useContext } from 'react';
import { DashboardContext } from '../DashboardContext';

function Followers() {
  const { userStats } = useContext(DashboardContext);

  return (
    <div className="followers">
      <h2>Followers</h2>
      <p>Total Followers: {userStats.followers}</p>
    </div>
  );
}

export default Followers;
