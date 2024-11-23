// src/components/Settings.js
import React, { useState } from 'react';

function Settings() {
  const [username, setUsername] = useState('john_doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="setting-item">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}

export default Settings;
