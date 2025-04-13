"use client"

import { useState, useRef, useEffect } from "react"
import { Plus, User, ChevronLeft, Send, Menu, Home, MessageSquare, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

// Message component with ChatGPT styling
const Message = ({ message }) => {
  const isUser = message.sender === "user"

  return (
    <div className={`py-3 sm:py-4 ${isUser ? "bg-transparent" : "bg-gray-800/30"}`}>
      <div className="max-w-3xl mx-auto flex gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-sm flex items-center justify-center flex-shrink-0 ${isUser ? "bg-indigo-500" : "bg-emerald-600"}`}
        >
          {isUser ? (
            <User className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
          ) : (
            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
          )}
        </div>
        <div className="prose prose-invert flex-1 whitespace-pre-wrap break-words text-xs sm:text-sm md:text-base">
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
    <div className="px-2 py-2 sm:px-3 sm:py-3 md:px-6 md:py-4">
      <div className="mx-auto max-w-3xl">
        <form className="relative flex items-center">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message LegalizeMe..."
            rows={1}
            className="w-full resize-none rounded-xl border border-gray-700 bg-gray-700/50 px-2.5 py-2 pr-10 text-sm sm:text-base text-white placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
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
            <Send className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </form>
        <div className="mt-1 sm:mt-2 text-center text-xs text-gray-500">
          <p>
            Powered by <span className="font-semibold">LegalizeMe</span> • 2025 LegalizeMe. All rights reserved.
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
      <div className="px-2 py-1 sm:py-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`group flex items-center gap-2 rounded-md px-2 py-1.5 sm:py-2 ${
              activeChat === chat.id ? "bg-gray-700/50" : "hover:bg-gray-700/30"
            } cursor-pointer transition-colors`}
            onClick={() => onChatSelect(chat.id)}
          >
            <MessageSquare className="h-4 w-4 flex-shrink-0 text-gray-400" />
            {isOpen && (
              <>
                <div className="flex-1 truncate text-xs sm:text-sm">{chat.title}</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onDeleteChat(chat.id)
                  }}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white transition-opacity p-1"
                >
                  <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    ) : (
      <div className="px-3 py-2 text-xs sm:text-sm text-gray-400 text-center">
        {isOpen ? "No chat history" : ""}
      </div>
    )}
  </div>
)

// Main component
const ChatGPTInterface = () => {
  const router = useRouter()
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
    router.push("/")
  }

  // Add handleProfileClick with auth check
  const handleProfileClick = () => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
      return
    }
    router.push("/profile")
  }

  return (
    <div className="flex h-[100dvh] bg-gray-900 text-white overflow-hidden">
      {/* Mobile menu button - improved positioning and visibility */}
      {isMobile && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-2.5 bg-gray-800/90 backdrop-blur-sm text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors border border-gray-700/50"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      {/* Sidebar - improved mobile handling and transitions */}
      <aside
        ref={sidebarRef}
        className={`
          fixed md:relative
          h-[100dvh]
          bg-gray-900/95
          backdrop-blur-sm
          border-r border-gray-700/50
          transition-all
          duration-300
          ease-in-out
          z-50
          overflow-hidden
          ${isOpen ? "w-[260px] md:w-[280px] max-w-[85vw]" : "w-0 md:w-[60px]"}
          ${isMobile ? (isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full") : "translate-x-0"}
        `}
      >
        <div className="flex h-full flex-col">
          {/* New chat button - improved for collapsed state */}
          <div className="p-3 md:p-4 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10 border-b border-gray-700/50">
            <button
              onClick={startNewChat}
              className="flex w-full items-center justify-center md:justify-start gap-2 rounded-lg border border-gray-700/50 px-3 py-2.5 text-sm hover:bg-gray-700/30 transition-colors"
            >
              <Plus className="h-4 w-4 flex-shrink-0" />
              {(isOpen || !isMobile) && <span className={`${!isOpen && !isMobile ? "hidden" : "block"} truncate`}>New chat</span>}
            </button>
          </div>

          {/* Chat history - improved scrolling and compact display */}
          <div className="flex-1 overflow-y-auto py-2 md:py-4 scrollbar-thin">
            <ChatHistory
              chats={chatHistory}
              activeChat={activeChat}
              onChatSelect={loadChat}
              onDeleteChat={deleteChat}
              isOpen={isOpen || !isMobile}
            />
          </div>

          {/* Sidebar footer - improved spacing and compact display */}
          <div className="p-3 md:p-4 border-t border-gray-700/50 bg-gray-900/95 backdrop-blur-sm">
            <button
              onClick={handleHomeClick}
              className="flex w-full items-center justify-center md:justify-start gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-gray-700/30 transition-colors"
            >
              <Home className="h-4 w-4 flex-shrink-0" />
              {(isOpen || !isMobile) && <span className={`${!isOpen && !isMobile ? "hidden" : "block"}`}>Home</span>}
            </button>

            <button
              onClick={handleProfileClick}
              className="flex w-full items-center justify-center md:justify-start gap-3 rounded-lg px-3 py-2.5 mt-2 text-sm hover:bg-gray-700/30 transition-colors"
            >
              <User className="h-4 w-4 flex-shrink-0" />
              {(isOpen || !isMobile) && <span className={`${!isOpen && !isMobile ? "hidden" : "block"}`}>Profile</span>}
            </button>

            {isOpen && isMobile && (
              <button
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2.5 mt-3 text-sm bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Close sidebar</span>
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main chat area - improved spacing and mobile layout */}
      <main className="flex-1 flex flex-col relative w-full">
        {/* Welcome screen or messages - improved responsive layout */}
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
            <h1 className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-center">LegalizeMe</h1>
            <div className="grid gap-3 sm:gap-4 w-full max-w-4xl px-2 sm:px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="flex flex-col items-start gap-2 sm:gap-3 rounded-xl border border-gray-700/50 p-3 sm:p-4 text-left hover:bg-gray-700/30 transition-colors"
                  onClick={() => {
                    setInput(item.description)
                    setTimeout(() => {
                      document.querySelector("textarea")?.focus()
                    }, 100)
                  }}
                >
                  <h3 className="font-medium text-sm sm:text-base md:text-lg">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pb-32 sm:pb-36">
            {messages.map((msg, index) => (
              <Message key={index} message={msg} />
            ))}
            {loading && <Message message={{ sender: "bot", text: "Typing..." }} />}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input area - improved positioning and mobile spacing */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50">
          <ChatInput input={input} setInput={setInput} handleSendMessage={handleSendMessage} loading={loading} />
        </div>
      </main>

      {/* Mobile overlay - improved interaction and touch handling */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" 
          onClick={() => setIsOpen(false)}
          style={{ touchAction: 'none' }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

// Make sure to export the component as default
export default ChatGPTInterface
