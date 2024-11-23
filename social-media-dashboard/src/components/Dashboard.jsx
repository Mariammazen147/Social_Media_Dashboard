// src/components/Dashboard.js
import React, { useContext } from 'react';
import { DashboardContext } from '../DashboardContext';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const { userStats, trendingPosts } = useContext(DashboardContext);

  const data = {
    labels: trendingPosts.map((post) => post.title),
    datasets: [
      {
        label: 'Likes',
        data: trendingPosts.map((post) => post.likes),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="stats-cards">
        <div className="stats-card">
          <p>Followers</p>
          <p>{userStats.followers}</p>
        </div>
        <div className="stats-card">
          <p>Posts</p>
          <p>{userStats.posts}</p>
        </div>
      </div>

      <h2>Trending Posts</h2>
      <Bar data={data} />
    </div>
  );
}

export default Dashboard;
