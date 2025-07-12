// src/components/Chatbot.jsx
import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { sender: 'You', text: prompt };
    setMessages(prev => [...prev, userMessage]);

    try {
      const res = await fetch('/api/generate-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      const botMessage = { sender: 'Bot', text: data.result };
      setMessages(prev => [...prev, botMessage]);
    } catch {
      const errorMessage = { sender: 'Bot', text: '❌ Error reaching server.' };
      setMessages(prev => [...prev, errorMessage]);
    }

    setPrompt('');
  };

  return (
    <>
      <div id="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>💬</div>

      {isOpen && (
        <div id="chatbot-window">
          <div className="chatbot-greeting">👋 Hey, my name is <strong>Traid</strong>. How may I assist you?</div>
          <div id="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx}><strong>{msg.sender}:</strong> {msg.text}</div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="Ask about a product..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
