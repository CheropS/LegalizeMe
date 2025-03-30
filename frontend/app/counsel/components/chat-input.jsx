"use client"

import { Send } from "lucide-react"

export default function ChatInput({ input, handleInputChange, handleSendMessage, loading }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(e)
    }
  }

  return (
    <footer className="p-4 bg-background border-t">
      <div className="flex items-center gap-2 max-w-2xl mx-auto">
        <textarea
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows={1}
          className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          disabled={loading}
        />
        <button
          onClick={handleSendMessage}
          disabled={loading || !input.trim()}
          className="p-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:bg-primary/50 transition-colors"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm">
          Powered by <span className="font-semibold">LegalizeMe</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">© 2025 LegalizeMe. All rights reserved.</p>
      </div>
    </footer>
  )
}

