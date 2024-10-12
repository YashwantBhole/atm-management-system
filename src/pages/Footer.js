// src/components/Footer.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 ATM Card Management</p>
        <div className="mt-4">
        <div className="mt-4">
        <a
          href="https://github.com/YashwantBhole" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center mb-2"
        >
          <FaGithub className="text-3xl hover:text-gray-400 transition duration-300" />
          
        </a>
           {/* Technical Support Link */}
           <a
            href="/support" // Update with your actual technical support page URL
            className="hover:text-gray-400 transition duration-300"
          >
            Technical Support
          </a>


      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
