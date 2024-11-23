// src/components/Notifications.js
import React from 'react';

function Notifications() {
  const notifications = [
    { id: 1, text: 'New follower: Sarah Lee' },
    { id: 2, text: 'Your post received 100 likes!' },
    { id: 3, text: 'New comment on your post from Mike' },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
