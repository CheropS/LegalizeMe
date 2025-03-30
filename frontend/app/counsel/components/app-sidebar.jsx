"use client"
import { useRouter } from "next/navigation"
import { Home, Plus, User, Menu } from "lucide-react"
import { useChatStore } from "@/lib/store"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export default function AppSidebar() {
  const router = useRouter()
  const { chatHistory, activeChat, setActiveChat, createNewChat } = useChatStore()
  const { isMobile, open, setOpen } = useSidebar()

  const handleHomeClick = () => {
    router.push("/")
  }

  const handleChatSelect = (chatId) => {
    setActiveChat(chatId)
    if (isMobile) {
      setOpen(false)
    }
  }

  const handleNewChat = () => {
    createNewChat()
    if (isMobile) {
      setOpen(false)
    }
  }

  return (
    <>
      {isMobile && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-16 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-full shadow-lg"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center justify-between p-4">
            {open && <h1 className="text-xl font-bold">LegalizeMe</h1>}
            <SidebarTrigger />
          </div>

          <div className="p-2">
            <SidebarMenuButton onClick={handleHomeClick} className="w-full justify-start">
              <Home className="h-5 w-5 mr-2" />
              <span>Home</span>
            </SidebarMenuButton>
          </div>

          <div className="p-2">
            <SidebarMenuButton
              onClick={handleNewChat}
              className="w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="h-5 w-5 mr-2" />
              <span>New Chat</span>
            </SidebarMenuButton>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {chatHistory.map((chat) => (
              <SidebarMenuItem key={chat.id}>
                <SidebarMenuButton onClick={() => handleChatSelect(chat.id)} isActive={activeChat === chat.id}>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium truncate w-full">{chat.title}</span>
                    <span className="text-xs text-muted-foreground">{new Date(chat.date).toLocaleDateString()}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <div className="p-2">
            <SidebarMenuButton className="w-full justify-start">
              <User className="h-5 w-5 mr-2" />
              <span>Profile</span>
            </SidebarMenuButton>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}

