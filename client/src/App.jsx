import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
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
import { CookiesProvider, useCookies } from "react-cookie";
import CookiePolicy from "./components/CookiePolicy";

const Layout = ({ children }) => {
  const location = useLocation();
  const basePath = location.pathname.toLowerCase();
  const [cookies, setCookies] = useCookies(["user", "cookieConsent"]);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const noNavbarFooterPages = [
    "/signup",
    "/login",
    "/terms",
    "/data-governance",
    "/checkout",
    "/forgot-password",
    "/password-reset",
    "/",
    "/counsel",
    "/cookie-policy",
  ];

  const hideNavbarFooter = noNavbarFooterPages.includes(basePath) || basePath.startsWith("password-reset");

  // Check if the user has already given cookie consent
  useEffect(() => {
    if (!cookies.cookieConsent) {
      setShowCookieBanner(true);
    }
  }, [cookies.cookieConsent]);

  // Handle user consent for cookies
  const handleCookieConsent = (consent) => {
    if (consent) {
      setCookies("cookieConsent", { status: "accepted", timestamp: new Date().toISOString() }, { path: "/", maxAge: 30 * 24 * 60 * 60 }); // Store consent for 30 days
    } else {
      setCookies("cookieConsent", { status: "rejected", timestamp: new Date().toISOString() }, { path: "/", maxAge: 30 * 24 * 60 * 60 });
    }
    setShowCookieBanner(false);
  };

  function login(user) {
    setCookies("user", user, { path: "/" });
  }

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}

      {/* Cookie Policy Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white sm:p-4 md:p-4 p-6 rounded-lg shadow-lg max-w-sm z-50 animate-slide-in">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faCookieBite} className="text-2xl" />
            <div>
              <p className="text-sm">
                We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
              </p>
              <a
                href="/cookie-policy"
                className="text-blue-400 hover:text-blue-300 text-xs underline"
              >
                Cookie policy
              </a>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => handleCookieConsent(true)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Accept
            </button>
            <button
              onClick={() => handleCookieConsent(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <CookiesProvider>
      <div className="overflow-x-hidden">
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
              <Route path="/counsel" element={<ChatBot />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </CookiesProvider>
  );
};

export default App;