import React from 'react';

const Hero = () => {
  return (
    <section className="w-full text-center py-20 bg-teal-800" id="home">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Flavors Inn</h2>
      <p className="text-lg text-teal-200 mb-6">Delicious food, delightful experiences.</p>
      <button className="bg-teal-900 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition">
        Explore Menu
      </button>
    </section>
  );
};

export default Hero;

