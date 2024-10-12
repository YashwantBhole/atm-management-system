// src/pages/landingPage/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
const [isLoggedIn , setIsLoggedIn] = useState(false)

  return (
    <header className="bg-gray-800 p-4">
    <div class="flex items-center space-x-2 text-blue-600 text-xl font-bold animate-bounce">
  <svg xmlns="" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 10h18M7 16h10" />
  </svg>
  <span>ATM Card Management</span>
</div>


        {isLoggedIn? (

          <nav className="space-x-4">
          <a href="/" className="text-white">Home</a>
       <Link to='/dashboard' ><a href="/" className="text-white">Dashboard</a></Link>
        </nav>
        ) : (
          <>
          </>
        )}
    </header>
  );
};

export default Header;
