// src/pages/landingPage/Hero.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
const [isLoggedIn , setIsLoggedIn] = useState(false)
  
  return (
    <section className="bg-gray-100 text-center py-20">
      <h2 className="text-4xl font-bold text-gray-900">Manage Your ATM Cards Securely</h2>
      <p className="mt-4 text-lg text-gray-700">Secure and easy-to-use ATM card management system for all your financial needs.</p>
      {!isLoggedIn ? (

        <div className="mt-8">
       <Link to ='/signin'> <button className="bg-blue-500 text-white px-6 py-2 rounded-md mr-4">Sign In</button></Link>
     <Link to= '/signup'>  <button className="bg-green-500 text-white px-6 py-2 rounded-md">Sign Up</button></Link>
      </div>
      ): (
        <></>
      )}
    </section>
  );
};

export default Hero;
