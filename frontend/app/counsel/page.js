"use client"

import { useState, useRef, useEffect } from "react"
import { Plus, User, ChevronLeft, Send, Menu, Home, MessageSquare, Trash2 } from "lucide-react"

// Message component with ChatGPT styling
const Message = ({ message }) => {
  const isUser = message.sender === "user"

  return (
    <div className={`py-4 ${isUser ? "bg-transparent" : "bg-gray-800/30"}`}>
      <div className="max-w-3xl mx-auto flex gap-3 px-3 md:px-6 lg:px-8">
        <div
          className={`w-7 h-7 md:w-8 md:h-8 rounded-sm flex items-center justify-center flex-shrink-0 ${isUser ? "bg-indigo-500" : "bg-emerald-600"}`}
        >
          {isUser ? (
            <User className="h-4 w-4 md:h-5 md:w-5 text-white" />
          ) : (
            <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-white" />
          )}
        </div>
        <div className="prose prose-invert flex-1 whitespace-pre-wrap break-words text-sm md:text-base">
          {message.text}
        </div>
      </div>
    </div>
  )
}

// ChatInput component with ChatGPT styling
const ChatInput = ({ input, setInput, handleSendMessage, loading }) => {
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [input])

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="px-3 py-3 md:px-6 md:py-4">
      <div className="mx-auto max-w-3xl">
        <form className="relative flex items-center">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message LegalizeMe..."
            rows={1}
            className="w-full resize-none rounded-xl border border-gray-700 bg-gray-700/50 px-3 py-2 pr-10 text-white placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            disabled={loading}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            disabled={loading || !input.trim()}
            className="absolute right-2 rounded-lg p-1 text-gray-400 hover:bg-gray-700 hover:text-white disabled:hover:bg-transparent disabled:hover:text-gray-400"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
        <div className="mt-2 text-center text-xs text-gray-500">
          <p>
            Powered by <span className="font-semibold">LegalizeMe</span> • © 2025 LegalizeMe. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

// ChatHistory component with ChatGPT styling
const ChatHistory = ({ chats, activeChat, onChatSelect, onDeleteChat, isOpen }) => (
  <div className="flex-1 overflow-y-auto">
    {chats.length > 0 ? (
      <div className="px-2 py-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`group flex items-center gap-2 rounded-md px-2 py-2 ${
              activeChat === chat.id ? "bg-gray-700/50" : "hover:bg-gray-700/30"
            } cursor-pointer transition-colors`}
            onClick={() => onChatSelect(chat.id)}
          >
            <MessageSquare className="h-4 w-4 flex-shrink-0 text-gray-400" />
            {isOpen && (
              <>
                <div className="flex-1 truncate text-sm">{chat.title}</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onDeleteChat(chat.id)
                  }}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white transition-opacity p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    ) : (
      isOpen && <div className="px-3 py-4 text-center text-sm text-gray-400">No chat history yet</div>
    )}
  </div>
)

// Main component
const ChatGPTInterface = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const [activeChat, setActiveChat] = useState(null)
  const chatRef = useRef(null)
  const sidebarRef = useRef(null)
  const messagesEndRef = useRef(null)

  // Handle clicks outside sidebar on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobile, isOpen])

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Load saved chat data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("chatData")
    if (savedData) {
      const { history, currentMessages, currentChat } = JSON.parse(savedData)
      setChatHistory(history || [])
      setMessages(currentMessages || [])
      setActiveChat(currentChat)
    }
  }, [])

  // Save chat data to localStorage when it changes
  useEffect(() => {
    const chatData = {
      history: chatHistory,
      currentMessages: messages,
      currentChat: activeChat,
    }
    localStorage.setItem("chatData", JSON.stringify(chatData))
  }, [chatHistory, messages, activeChat])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle sending messages
  const handleSendMessage = async () => {
    if (!input.trim()) return

    const newMessage = { sender: "user", text: input }
    setMessages((prev) => [...prev, newMessage])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("https://legalizeme.azurewebsites.net/api/chatbot/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "Sorry, I encountered an error processing your message.",
        },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I encountered an error processing your message.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  // Start a new chat
  const startNewChat = () => {
    if (messages.length > 0) {
      const newChat = {
        id: Date.now(),
        title:
          messages[0]?.text.slice(0, 30) + (messages[0]?.text.length > 30 ? "..." : "") ||
          `Chat ${chatHistory.length + 1}`,
        messages: [...messages],
        date: new Date().toISOString(),
      }
      setChatHistory((prev) => [...prev, newChat])
    }
    setMessages([])
    setActiveChat(null)
    if (isMobile) setIsOpen(false)
  }

  // Load an existing chat
  const loadChat = (chatId) => {
    const chat = chatHistory.find((c) => c.id === chatId)
    if (chat) {
      setMessages(chat.messages)
      setActiveChat(chatId)
      if (isMobile) setIsOpen(false)
    }
  }

  // Delete a chat
  const deleteChat = (chatId) => {
    setChatHistory((prev) => prev.filter((chat) => chat.id !== chatId))
    if (activeChat === chatId) {
      setMessages([])
      setActiveChat(null)
    }
  }

  // Navigate to home page
  const handleHomeClick = () => {
    window.location.href = "/"
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Mobile menu button - positioned better for mobile */}
      {isMobile && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-3 left-3 z-50 p-2 bg-gray-700 text-white rounded-md shadow-lg"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      {/* Sidebar - improved positioning for mobile */}
      <aside
        ref={sidebarRef}
        className={`
          fixed md:relative
          h-full
          bg-gray-900
          border-r border-gray-700/50
          transition-all
          duration-300
          ease-in-out
          z-50
          ${isOpen ? "w-72 max-w-full" : "w-0 md:w-0"}
          ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}
        `}
      >
        <div className="flex h-full flex-col">
          {/* New chat button */}
          <div className="p-3 sticky top-0 bg-gray-900 z-10">
            <button
              onClick={startNewChat}
              className="flex w-full items-center gap-2 rounded-md border border-gray-700/50 px-3 py-2 text-sm hover:bg-gray-700/30 transition-colors"
            >
              <Plus className="h-4 w-4" />
              {isOpen && <span>New chat</span>}
            </button>
          </div>

          {/* Chat history - now scrollable */}
          <div className="flex-1 overflow-y-auto pb-20">
            <ChatHistory
              chats={chatHistory}
              activeChat={activeChat}
              onChatSelect={loadChat}
              onDeleteChat={deleteChat}
              isOpen={isOpen}
            />
          </div>

          {/* Sidebar footer - sticky at bottom */}
          <div className="sticky bottom-0 border-t border-gray-700/50 p-3 bg-gray-900">
            <button
              onClick={handleHomeClick}
              className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-gray-700/30 transition-colors"
            >
              <Home className="h-4 w-4" />
              {isOpen && <span>Home</span>}
            </button>

            <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-gray-700/30 transition-colors">
              <User className="h-4 w-4" />
              {isOpen && <span>Profile</span>}
            </button>

            {isOpen && isMobile && (
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 flex w-full items-center justify-center rounded-md px-2 py-2 text-sm hover:bg-gray-700/30 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>Close sidebar</span>
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main chat area */}
      <main className="flex flex-1 flex-col overflow-hidden relative w-full">
        {/* Welcome screen or messages - now scrollable on small devices */}
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 overflow-y-auto">
            <h1 className="mb-6 text-3xl md:text-4xl font-bold">LegalizeMe</h1>
            <div className="grid gap-4 w-full max-w-4xl px-2 sm:px-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Legal Advice", description: "Get guidance on legal matters and procedures" },
                { title: "Document Review", description: "Have your legal documents reviewed and explained" },
                { title: "Rights & Obligations", description: "Learn about your legal rights and obligations" },
                { title: "Legal Research", description: "Get help with legal research and case studies" },
                { title: "Contract Analysis", description: "Understand the terms and conditions of contracts" },
                { title: "Legal Updates", description: "Stay informed about recent legal developments" },
              ].map((item, i) => (
                <button
                  key={i}
                  className="flex flex-col items-start gap-2 rounded-xl border border-gray-700 p-4 text-left hover:bg-gray-700/30 transition-colors"
                  onClick={() => {
                    setInput(item.description)
                    setTimeout(() => {
                      document.querySelector("textarea")?.focus()
                    }, 100)
                  }}
                >
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pb-32">
            {messages.map((msg, index) => (
              <Message key={index} message={msg} />
            ))}
            {loading && <Message message={{ sender: "bot", text: "Typing..." }} />}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input area - fixed at bottom with better spacing */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700/50">
          <ChatInput input={input} setInput={setInput} handleSendMessage={handleSendMessage} loading={loading} />
        </div>
      </main>

      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  )
}

// Make sure to export the component as default
export default ChatGPTInterface

