// src/components/Trends.js
import React, { useContext } from 'react';
import { DashboardContext } from '../DashboardContext';

function Trends() {
  const { trendingPosts } = useContext(DashboardContext);

  return (
    <div className="trends">
      <h2>Trending Posts</h2>
      <ul>
        {trendingPosts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.likes} Likes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trends;
