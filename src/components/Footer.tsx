import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          © <a 
            href="https://lyvena.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Lyvena.
          </a> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;