"use client"

import { useState, useRef, useEffect } from "react"
import { MoreVertical } from "lucide-react"
import { useChatStore } from "@/lib/store"
import { useChat } from "ai/react"
import ChatMessages from "@/components/chat-messages"
import ChatInput from "@/components/chat-input"

export default function ChatInterface() {
  const { activeChat, messages: storedMessages, addMessage } = useChatStore()
  const [loading, setLoading] = useState(false)
  const chatContainerRef = useRef(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    onResponse: () => {
      setLoading(true)
    },
    onFinish: (message) => {
      setLoading(false)
      addMessage({
        id: message.id,
        sender: "bot",
        text: message.content,
        timestamp: new Date().toISOString(),
      })
    },
  })

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    addMessage({
      id: Date.now().toString(),
      sender: "user",
      text: input,
      timestamp: new Date().toISOString(),
    })

    handleSubmit(e)
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [storedMessages, loading])

  return (
    <div className="flex flex-col flex-1 h-screen bg-background">
      <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <h1 className="text-xl font-bold">Chat with Counsel</h1>
        <button className="p-2 hover:bg-primary/80 rounded-full transition-colors">
          <MoreVertical className="h-6 w-6" />
        </button>
      </header>

      <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-2">
        <ChatMessages messages={storedMessages} loading={loading} />
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
        loading={loading || isLoading}
      />
    </div>
  )
}

