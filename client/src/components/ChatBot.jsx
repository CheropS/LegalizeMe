import React, { useState, useEffect } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load chat history from localStorage when the component mounts
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  // Save chat history to localStorage whenever the messages change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  // Close the chat when clicking outside of the chatbot
  const handleClickOutside = (e) => {
    if (e.target.closest('.chatbot-container') === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/chatbot/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply || 'Error in processing your message' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error in processing your message' },
      ]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    // Allow new lines on Enter key press
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent form submission
      sendMessage();
    }
  };

  return (
    <div
      className={`chatbot-container fixed bottom-20 right-8 z-50 ${isOpen ? 'w-80 h-[400px]' : 'w-16 h-16'} bg-white rounded-lg shadow-2xl transition-all duration-300`}
    >
      {/* Hover message */}
      {/* <div
        className={`absolute top-[-20px] left-0 right-0 text-center text-sm text-blue-600 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      >
        <span>Talk to Counsel Today</span>
      </div> */}

      {/* Header */}
      <div
        className="bg-blue-600 text-white flex items-center justify-between px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{isOpen ? 'Counsel' : '💬'}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </div>

      {/* Chat Content */}
      {isOpen && (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white ml-auto'
                    : 'bg-gray-300 text-black mr-auto'
                } rounded-lg px-4 py-2 max-w-xs break-words`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 text-sm italic">Counsel is typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center p-2 bg-white border-t">
            <textarea
              rows="3" // Allow multi-line input
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Handle Enter key to send the message
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className={`ml-2 px-4 py-2 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
