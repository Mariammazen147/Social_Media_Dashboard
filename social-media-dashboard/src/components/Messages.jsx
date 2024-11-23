// src/components/Messages.js
import React from 'react';

function Messages() {
  const messages = [
    { id: 1, from: 'John Doe', text: 'Hey! How are you doing?' },
    { id: 2, from: 'Jane Smith', text: 'Your recent post was amazing!' },
    { id: 3, from: 'Alex Johnson', text: 'We should catch up soon.' },
  ];

  return (
    <div className="messages">
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.from}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
