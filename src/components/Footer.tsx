import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Naveenkumar S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;