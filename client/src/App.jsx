import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AboutUs from './components/About';
import Pricing from './components/Pricing';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;