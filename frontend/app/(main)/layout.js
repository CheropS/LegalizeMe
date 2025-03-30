import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
} 