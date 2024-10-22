import ChatBot from 'react-chatbotify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AboutUs from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const App = () => {
  const flow = {
    start: {
      message: 'Hello, how can I help you today?',
      reactions: {
        'I need help': 'help',
        'I want to know more about your services': 'services info',
        'I want to know more about your pricing': 'pricing info',
        'I want to know more about your company': 'company info',
        'I want to talk to a human': 'human',
      },
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* Responsive ChatBot component */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-50">
        <div className="group relative">
          {/* ChatBot icon or button */}
          <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">
            <span className="text-white text-2xl lg:text-3xl">💬</span>
          </div>

          {/* ChatBot container, hidden by default, shown on hover */}
          <div className="absolute bottom-16 right-0 hidden group-hover:block bg-white border border-gray-300 rounded-lg shadow-lg w-72 md:w-80 lg:w-96 p-4 max-h-[400px] md:max-h-[500px] lg:max-h-[600px] overflow-y-auto">
            <ChatBot flow={flow}/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
