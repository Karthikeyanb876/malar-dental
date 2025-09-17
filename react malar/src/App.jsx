import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Service from './components/pages/Service';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
