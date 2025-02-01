// import React, { useState, useEffect } from 'react';

// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Load chat history from localStorage when the component mounts
//   useEffect(() => {
//     const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
//     if (savedMessages) {
//       setMessages(savedMessages);
//     }
//   }, []);

//   // Save chat history to localStorage whenever the messages change
//   useEffect(() => {
//     localStorage.setItem('chatMessages', JSON.stringify(messages));
//   }, [messages]);

//   // Close the chat when clicking outside of the chatbot
//   const handleClickOutside = (e) => {
//     if (e.target.closest('.chatbot-container') === null) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Attach the event listener on mount
//     document.addEventListener('click', handleClickOutside);

//     // Cleanup the event listener on unmount
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: 'user', text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setLoading(true);

//     try {
//       const response = await fetch('https://legalizeme.azurewebsites.net/api/chatbot/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input }),
//       });
//       const data = await response.json();
//       const botMessage = { sender: 'bot', text: data.reply || 'Error in processing your message' };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { sender: 'bot', text: 'Error in processing your message' },
//       ]);
//     } finally {
//       setLoading(false);
//       setInput('');
//     }
//   };

//   const handleKeyDown = (e) => {
//     // Allow new lines on Enter key press
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault(); // Prevent form submission
//       sendMessage();
//     }
//   };

//   return (
//     <div
//       className={`chatbot-container fixed bottom-20 right-8 z-50 ${isOpen ? 'w-80 h-[400px]' : 'w-16 h-16'} bg-white rounded-lg shadow-2xl transition-all duration-300`}
//     >
//       {/* Hover message */}
//       {/* <div
//         className={`absolute top-[-20px] left-0 right-0 text-center text-sm text-blue-600 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}
//       >
//         <span>Talk to Counsel Today</span>
//       </div> */}

//       {/* Header */}
//       <div
//         className="bg-blue-600 text-white flex items-center justify-between px-4 py-2 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-semibold">{isOpen ? 'Counsel' : '💬'}</span>
//         <span>{isOpen ? '−' : '+'}</span>
//       </div>

//       {/* Chat Content */}
//       {isOpen && (
//         <div className="flex flex-col h-full">
//           <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`${
//                   msg.sender === 'user'
//                     ? 'bg-blue-500 text-white ml-auto'
//                     : 'bg-gray-300 text-black mr-auto'
//                 } rounded-lg px-4 py-2 max-w-xs break-words`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//             {loading && (
//               <div className="text-gray-500 text-sm italic">Counsel is typing...</div>
//             )}
//           </div>

//           {/* Input */}
//           <div className="flex items-center p-2 bg-white border-t">
//             <textarea
//               rows="3" // Allow multi-line input
//               className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown} // Handle Enter key to send the message
//               disabled={loading}
//             />
//             <button
//               onClick={sendMessage}
//               className={`ml-2 px-4 py-2 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
//               disabled={loading}
//             >
//               {loading ? '...' : 'Send'}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChatBotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    const savedChatHistory = JSON.parse(localStorage.getItem('chatHistory'));
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedChatHistory) {
      setChatHistory(savedChatHistory);
    }
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [chatHistory, messages]);

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
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startNewChat = () => {
    setMessages([]);
    setActiveChat(null);
  };

  const saveChatToHistory = () => {
    if (messages.length > 0) {
      const newChat = {
        id: Date.now(),
        title: `Chat ${chatHistory.length + 1}`,
        messages: messages,
      };
      setChatHistory((prev) => [...prev, newChat]);
    }
  };

  const loadChatFromHistory = (chatId) => {
    const chat = chatHistory.find((chat) => chat.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setActiveChat(chatId);
    }
  };

  const filteredChatHistory = chatHistory.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#4F9CF9] to-[#1A3B7A] flex font-montserrat">
      {/* Production Banner */}
      <div className="w-full bg-yellow-400 text-black text-center py-2 fixed top-0 z-50">
        <p className="text-sm font-semibold">
          🚧 This page is still in production. Features may be incomplete or subject to change. 🚧
        </p>
      </div>

      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-lg transition-all duration-300 ${
          isSidebarOpen ? 'ml-0' : '-ml-64'
        }`}
        style={{ marginTop: '40px' }} // Adjust margin to account for the banner
      >
        <div className="p-4 border-b">
          <Link to="/" className="text-xl font-semibold text-blue-600 hover:text-blue-700">
            Home
          </Link>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* New Chat Button */}
        <div className="p-4 border-b">
          <button
            onClick={startNewChat}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            New Chat
          </button>
        </div>

        {/* Chat History */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Chat History</h2>
          <ul className="space-y-2">
            {filteredChatHistory.map((chat) => (
              <li
                key={chat.id}
                className={`p-2 rounded-lg cursor-pointer ${
                  activeChat === chat.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => loadChatFromHistory(chat.id)}
              >
                {chat.title}
              </li>
            ))}
          </ul>
        </div>

        {/* My Profile */}
        <div className="p-4 border-t">
          <h2 className="text-lg font-semibold mb-2">My Profile</h2>
          <p className="text-sm text-gray-600">User details here...</p>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4" style={{ marginTop: '40px' }}>
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold">Counsel - Your Legal Assistant</h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-white focus:outline-none"
            >
              {isSidebarOpen ? '◄' : '►'}
            </button>
          </div>

          {/* Chat Window */}
          <div className="flex flex-col h-[500px] bg-gray-100 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white ml-auto'
                    : 'bg-gray-300 text-black mr-auto'
                } rounded-lg px-4 py-2 max-w-xs break-words mb-2`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 text-sm italic">Counsel is typing...</div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex items-center p-4 bg-white border-t">
            <textarea
              rows="3"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className={`ml-4 px-6 py-2 rounded-lg text-white ${
                loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-white text-center">
          <p className="text-sm">
            Powered by <span className="font-semibold">LegalizeMe</span> - Redefining Access to Justice
          </p>
          <p className="text-xs text-gray-300 mt-2">
            © 2025 LegalizeMe. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;