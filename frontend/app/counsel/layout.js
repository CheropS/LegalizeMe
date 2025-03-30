import "@/app/counsel/globals.css"

export const metadata = {
  title: "LegalizeMe Chat",
  description: "Chat with legal counsel",
}

export default function CounselLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {children}
    </div>
  );
}

