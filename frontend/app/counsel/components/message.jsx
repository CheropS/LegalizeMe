export default function Message({ message }) {
    const isUser = message.sender === "user"
  
    const formatTime = (timestamp) => {
      const date = new Date(timestamp)
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
        <div
          className={`max-w-xs md:max-w-md p-3 rounded-lg ${
            isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
          <span className="text-xs opacity-75 block mt-1">{formatTime(message.timestamp)}</span>
        </div>
      </div>
    )
  }
  
  