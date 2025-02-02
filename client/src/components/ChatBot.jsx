import React, { useState, useRef, useEffect } from "react";
import {
  FiPlus,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiSend,
  FiMoreVertical,
  FiArrowLeft,
} from "react-icons/fi";

const ChatPage = ({ messages, input, setInput, handleSendMessage, chatRef, loading }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100 font-montserrat">
      {/* Production Banner */}
      <div className="w-full bg-yellow-400 text-black text-center py-2 fixed top-0 z-40">
        <p className="text-sm font-semibold">
          🚧 This page is still in production. Features may be incomplete or subject to change. 🚧
        </p>
      </div>

      <header className="flex items-center justify-between p-4 bg-blue-600 text-white mt-10">
        <button className="md:hidden p-2">
          <FiArrowLeft className="text-2xl" />
        </button>
        <h1 className="text-xl font-bold">Chat with Counsel</h1>
        <button className="p-2">
          <FiMoreVertical className="text-2xl" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-xs text-gray-400 block mt-1">
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-2">
            <div className="max-w-xs p-3 rounded-lg bg-gray-300">
              <p className="text-sm">Sending...</p>
            </div>
          </div>
        )}
        <div ref={chatRef}></div>
      </div>

      <footer className="p-4 bg-white border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleSendMessage}
            disabled={loading}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 disabled:bg-blue-400"
          >
            <FiSend className="text-2xl" />
          </button>
        </div>
        <div className="mt-2">
          <p className="text-sm">
            Powered by <span className="font-semibold">LegalizeMe</span> - Redefining Access to Justice
          </p>
          <p className="text-xs text-gray-300 mt-1">
            © 2025 LegalizeMe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    const savedChatHistory = JSON.parse(localStorage.getItem('chatHistory'));
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedChatHistory) setChatHistory(savedChatHistory);
    if (savedMessages) setMessages(savedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [chatHistory, messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/chatbot/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply || 'Error in processing your message' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error in processing your message' }]);
    } finally {
      setLoading(false);
      setInput('');
      chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const startNewChat = () => {
    saveChatToHistory();
    setMessages([]);
    setActiveChat(null);
  };

  const saveChatToHistory = () => {
    if (messages.length > 0) {
      const newChat = {
        id: Date.now(),
        title: `Chat ${chatHistory.length + 1}`,
        messages: messages,
        date: new Date().toISOString(),
      };
      setChatHistory(prev => [...prev, newChat]);
    }
  };

  const loadChatFromHistory = (chatId) => {
    const chat = chatHistory.find(chat => chat.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setActiveChat(chatId);
    }
  };

  const filteredChatHistory = chatHistory.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categorizedChats = {
    today: filteredChatHistory.filter(chat => isRecent(chat.date, "today")),
    yesterday: filteredChatHistory.filter(chat => isRecent(chat.date, "yesterday")),
    last7Days: filteredChatHistory.filter(chat => isRecent(chat.date, "week")),
    lastMonth: filteredChatHistory.filter(chat => isRecent(chat.date, "month")),
  };

  return (
    <div className="flex h-screen font-montserrat">
      <aside
        className={`flex flex-col bg-gray-800 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-xl font-semibold ${isOpen ? "block" : "hidden"}`}>
            LegalizeMe
          </h1>
          <button
            className="text-xl p-2 bg-gray-700 rounded-full hover:bg-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>

        <a
          href="/"
          className="text-xl p-2 bg-gray-700 rounded-full hover:bg-gray-600 relative group mx-4"
        >
          <FiArrowLeft />
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Back to Home
          </span>
        </a>
        {/* <button
          className="flex items-center gap-2 p-4 bg-blue-600 hover:bg-blue-500 rounded-md mx-2 my-2"
          onClick={startNewChat}
        >
          <FiPlus className="text-xl" />
          {isOpen && <span>New Chat</span>}
        </button>
        <input
          type="text"
          placeholder="Search chats..."
          className="p-2 bg-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}

        <div className="flex-1 overflow-y-auto px-2 pt-4">
          {Object.entries(categorizedChats).map(([category, chats]) => (
            <div key={category} className="mb-4">
              <h2 className={`text-gray-400 text-sm uppercase ${isOpen ? "block" : "hidden"}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <ul>
                {chats.map((chat) => (
                  <li
                    key={chat.id}
                    className={`p-2 text-sm hover:bg-gray-700 rounded-md cursor-pointer ${
                      activeChat === chat.id ? "bg-gray-700" : ""
                    }`}
                    onClick={() => loadChatFromHistory(chat.id)}
                  >
                    {isOpen ? chat.title : <div className="w-3 h-3 bg-gray-500 rounded-full" />}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-700 flex items-center gap-2">
          <FiUser className="text-2xl" />
          {isOpen && <span>My Profile</span>}
        </div>
      </aside>

      <ChatPage
        messages={messages}
        input={input}
        setInput={setInput}
        handleSendMessage={sendMessage}
        chatRef={chatRef}
        loading={loading}
      />
    </div>
  );
};

export default Sidebar;