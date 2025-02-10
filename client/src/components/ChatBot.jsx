import React, { useState, useRef, useEffect } from "react";
import {
  FiPlus,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiSend,
  FiMoreVertical,
  FiArrowLeft,
  FiMenu,
  FiX,
  FiHome,
} from "react-icons/fi";

// Previous Message and ChatInput components remain the same...
const Message = ({ message }) => (
  <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
    <div
      className={`max-w-xs md:max-w-md p-3 rounded-lg ${
        message.sender === "user" 
          ? "bg-blue-500 text-white" 
          : "bg-gray-300 text-black"
      }`}
    >
      <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
      <span className="text-xs opacity-75 block mt-1">
        {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </span>
    </div>
  </div>
);

const ChatInput = ({ input, setInput, handleSendMessage, loading }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <footer className="p-4 bg-white border-t">
      <div className="flex items-center gap-2 max-w-2xl mx-auto">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows={1}
          className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 disabled:bg-blue-400 transition-colors"
        >
          <FiSend className="text-xl" />
        </button>
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm">
          Powered by <span className="font-semibold">LegalizeMe</span>
        </p>
        <p className="text-xs text-gray-400 mt-1">
          © 2025 LegalizeMe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const ChatPage = ({ messages, input, setInput, handleSendMessage, chatRef, loading }) => (
  <div className="flex flex-col flex-1 h-screen bg-gray-100">
    {/* <div className="w-full bg-yellow-400 text-black text-center py-2 fixed top-0 z-40">
      <p className="text-sm font-semibold">
        🚧 This page is still in production. Features may be incomplete or subject to change. 🚧
      </p>
    </div> */}

    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Chat with Counsel</h1>
      <button className="p-2 hover:bg-blue-500 rounded-full transition-colors">
        <FiMoreVertical className="text-2xl" />
      </button>
    </header>

    <div className="flex-1 overflow-y-auto px-4 py-2">
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
      {loading && (
        <div className="flex justify-start mb-2">
          <div className="max-w-xs p-3 rounded-lg bg-gray-300">
            <p className="text-sm">Typing...</p>
          </div>
        </div>
      )}
      <div ref={chatRef} />
    </div>

    <ChatInput
      input={input}
      setInput={setInput}
      handleSendMessage={handleSendMessage}
      loading={loading}
    />
  </div>
);

const ChatHistory = ({ chats, activeChat, onChatSelect, isOpen }) => (
  <div className="flex-1 overflow-y-auto">
    {chats.map((chat) => (
      <div
        key={chat.id}
        onClick={() => onChatSelect(chat.id)}
        className={`p-3 cursor-pointer transition-colors ${
          activeChat === chat.id 
            ? "bg-gray-700" 
            : "hover:bg-gray-700"
        } ${!isOpen && "justify-center"}`}
      >
        {isOpen ? (
          <div>
            <h3 className="text-sm font-medium">{chat.title}</h3>
            <p className="text-xs text-gray-400">
              {new Date(chat.date).toLocaleDateString()}
            </p>
          </div>
        ) : (
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
        )}
      </div>
    ))}
  </div>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const chatRef = useRef(null);
  const sidebarRef = useRef(null);

  // Previous useEffects and handlers remain the same...
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isOpen]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && !isOpen) setIsOpen(true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem('chatData');
    if (savedData) {
      const { history, currentMessages, currentChat } = JSON.parse(savedData);
      setChatHistory(history || []);
      setMessages(currentMessages || []);
      setActiveChat(currentChat);
    }
  }, []);

  useEffect(() => {
    const chatData = {
      history: chatHistory,
      currentMessages: messages,
      currentChat: activeChat
    };
    localStorage.setItem('chatData', JSON.stringify(chatData));
  }, [chatHistory, messages, activeChat]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/chatbot/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: data.reply || 'Sorry, I encountered an error processing your message.'
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: 'Sorry, I encountered an error processing your message.'
      }]);
    } finally {
      setLoading(false);
      chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const startNewChat = () => {
    if (messages.length > 0) {
      const newChat = {
        id: Date.now(),
        title: `Chat ${chatHistory.length + 1}`,
        messages: [...messages],
        date: new Date().toISOString()
      };
      setChatHistory(prev => [...prev, newChat]);
    }
    setMessages([]);
    setActiveChat(null);
  };

  const loadChat = (chatId) => {
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setActiveChat(chatId);
    }
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {isMobile && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-16 left-4 z-50 p-2 bg-gray-800 text-white rounded-full shadow-lg"
        >
          <FiMenu className="text-xl" />
        </button>
      )}

      <aside
        ref={sidebarRef}
        className={`
          fixed md:relative
          h-full
          bg-gray-800
          text-white
          transition-all
          duration-300
          ease-in-out
          z-50
          ${isOpen ? 'w-64' : 'w-16'}
          ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {isOpen && <h1 className="text-xl font-bold">LegalizeMe</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>

        {/* Home button */}
        <div className="p-4 border-b border-gray-700">
          <button
            onClick={handleHomeClick}
            className={`
              flex items-center gap-2
              w-full p-2
              hover:bg-gray-700
              rounded-md
              transition-colors
              ${!isOpen && 'justify-center'}
            `}
          >
            <FiHome className="text-xl" />
            {isOpen && <span>Home</span>}
          </button>
        </div>

        <div className="p-4">
          <button
            onClick={startNewChat}
            className={`
              flex items-center gap-2
              w-full p-2
              bg-blue-600
              hover:bg-blue-500
              rounded-md
              transition-colors
              ${!isOpen && 'justify-center'}
            `}
          >
            <FiPlus />
            {isOpen && <span>New Chat</span>}
          </button>
        </div>

        <ChatHistory
          chats={chatHistory}
          activeChat={activeChat}
          onChatSelect={loadChat}
          isOpen={isOpen}
        />

        <div className="p-4 border-t border-gray-700">
          <button className={`
            flex items-center gap-2
            w-full p-2
            hover:bg-gray-700
            rounded-md
            transition-colors
            ${!isOpen && 'justify-center'}
          `}>
            <FiUser />
            {isOpen && <span>Profile</span>}
          </button>
        </div>
      </aside>

      <ChatPage
        messages={messages}
        input={input}
        setInput={setInput}
        handleSendMessage={handleSendMessage}
        chatRef={chatRef}
        loading={loading}
      />

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;