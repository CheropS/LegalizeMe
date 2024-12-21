import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Papa from "papaparse";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AboutUs from "./components/About";
import Solutions from "./components/Solutions";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import Cases from "./components/Cases";
import ForgotPassword from "./components/ForgotPassword";
import Terms from "./components/Terms";
import DataGovernance from "./components/DataGovernance";
import Feedback from "./components/Feedback";
import CaseDetail from "./components/CaseDetail";
import ChatBot from "./components/ChatBot";
import Checkout from "./components/Checkout";
import StudentVerification from "./components/Verify";
import PasswordReset from "./components/PasswordReset";

const Layout = ({ children }) => {
  const location = useLocation();
  const basePath = location.pathname.toLowerCase();

  const noNavbarFooterPages = ["/signup", "/login", "/terms", "/data-governance", "/checkout", "/forgot-password", "/password-reset"];
  const noChatBotPages = ["/checkout", "/verify", "/password-reset", "/login", "/signup", "/forgot-password"];

  const hideNavbarFooter = noNavbarFooterPages.includes(basePath) || basePath.startsWith("password-reset");
  const hideChatBot = noChatBotPages.includes(basePath) || basePath.startsWith("password-reset");
  return (
    <>
      {/* {!noNavbarFooterPages.includes(location.pathname.toLowerCase()) && <Navbar />}
      {children}
      {!noNavbarFooterPages.includes(location.pathname.toLowerCase()) && <Footer />}
      {!noChatBotPages.includes(location.pathname.toLowerCase()) && (
        <div className="fixed bottom-4 right-4 z-50">
          <ChatBot />
        </div>
      )}
       */}
       {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
      {!hideChatBot && (
        <div className="fixed bottom-4 right-4 z-50">
          <ChatBot />
        </div>
      )}
    </>
  );
};

const App = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    Papa.parse("/cases_data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setFaqData(result.data || []);
      },
      error: (err) => console.error("Error loading FAQ data:", err),
    });
  }, []);

  const flow = {
    start: {
      message: "Hello, how can I help you today?",
      reactions: {
        "I need help": "help",
        "I want to know more about your services": "services info",
        "I want to know more about your pricing": "pricing info",
        "I want to know more about your company": "company info",
        "I want to talk to a human": "human",
      },
    },
    help: {
      message: "Here are some FAQs. Ask me anything.",
      reactions: faqData.reduce(
        (acc, faq) => ({ ...acc, [faq.question]: faq.answer }),
        {}
      ),
    },
    "services info": {
      message: "We offer a variety of services tailored to your needs.",
    },
    "pricing info": {
      message: "Our pricing is flexible and depends on the service you choose.",
    },
    "company info": {
      message: "We are a company dedicated to delivering quality solutions.",
    },
    human: {
      message: "Please hold, connecting you to a human agent.",
    },
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/data-governance" element={<DataGovernance />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/verify" element={<StudentVerification />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
