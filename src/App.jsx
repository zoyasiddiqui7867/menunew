import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MenuSection from './components/MenuSection.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-teal-700 text-gray-100 font-inter">
      <Navbar />
      <Hero />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default App;


