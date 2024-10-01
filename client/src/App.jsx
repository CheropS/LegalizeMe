import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/signup' element={<Signup />} />*/}
      </Routes>
    </Router>
  );
}

export default App;