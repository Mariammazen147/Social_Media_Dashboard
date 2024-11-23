// src/DashboardContext.js
import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [userStats, setUserStats] = useState({ followers: 1200, posts: 45 });
  const [trendingPosts, setTrendingPosts] = useState([
    { id: 1, title: 'Post 1', likes: 120 },
    { id: 2, title: 'Post 2', likes: 80 },
  ]);

  return (
    <DashboardContext.Provider value={{ userStats, trendingPosts }}>
      {children}
    </DashboardContext.Provider>
  );
}
