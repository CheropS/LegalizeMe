"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useChatStore = create(
  persist(
    (set, get) => ({
      chatHistory: [],
      messages: [],
      activeChat: null,

      addMessage: (message) =>
        set((state) => {
          const newMessages = [...state.messages, message]

          // If this is part of an active chat, update that chat's messages too
          if (state.activeChat) {
            const updatedHistory = state.chatHistory.map((chat) =>
              chat.id === state.activeChat ? { ...chat, messages: newMessages } : chat,
            )
            return { messages: newMessages, chatHistory: updatedHistory }
          }

          return { messages: newMessages }
        }),

      setActiveChat: (chatId) =>
        set((state) => {
          const chat = state.chatHistory.find((c) => c.id === chatId)
          return {
            activeChat: chatId,
            messages: chat ? chat.messages : [],
          }
        }),

      createNewChat: () =>
        set((state) => {
          // Save current chat if it has messages
          let newHistory = [...state.chatHistory]

          if (state.messages.length > 0 && !state.activeChat) {
            const newChat = {
              id: Date.now().toString(),
              title: `Chat ${state.chatHistory.length + 1}`,
              messages: [...state.messages],
              date: new Date().toISOString(),
            }
            newHistory = [...newHistory, newChat]
          }

          return {
            messages: [],
            activeChat: null,
            chatHistory: newHistory,
          }
        }),
    }),
    {
      name: "chat-storage",
    },
  ),
)

