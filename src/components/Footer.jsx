import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-teal-900 text-white py-4 text-center" id="contact">
      © {new Date().getFullYear()} Flavors Inn. All rights reserved.
    </footer>
  );
};

export default Footer;

