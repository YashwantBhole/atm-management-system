import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function LandingPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-black bg-opacity-50 ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto space-x-4 text-lg font-medium">
              <li className="nav-item">
                <Link className="nav-link text-white hover:text-yellow-500" to="/signin">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white hover:text-green-400" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>


      {/* Hero Section */}
      <section className="flex items-center justify-center bg-black bg-opacity-50  py-10">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Welcome to ATM Card Management</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">Manage your card with secure login and signup options.</p>
          <Link to="/signin" className="btn btn-primary mx-2 text-xl py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg transition">Sign In</Link>
          <Link to="/signup" className="btn btn-success mx-2 text-xl py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg transition">Sign Up</Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-opacity-60 backdrop-md py-10">
        <div className="container">
          <h3 className="text-3xl md:text-4xl font-semibold text-center text-white mb-8">Why Choose Our ATM Card?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature 1 */}
            <div className="text-center bg-dark">
              <div className="p-4">
                <i className="bi bi-credit-card-2-front-fill text-6xl text-blue-400"></i>
                <h5 className="mt-4 text-2xl font-bold text-white">Secure Transactions</h5>
                <p className="mt-2 text-gray-300">Our cards ensure the highest level of encryption and protection for your transactions.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="text-center bg-dark">
              <div className="p-4">
                <i className="bi bi-wallet-fill text-6xl text-green-400"></i>
                <h5 className="mt-4 text-2xl font-bold text-white">Easy Access</h5>
                <p className="mt-2 text-gray-300">Manage your account and transactions anytime, anywhere through our online platform.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="text-center bg-dark  ">
              <div className="p-4">
                <i className="bi bi-shield-lock-fill text-6xl text-yellow-400"></i>
                <h5 className="mt-4 text-2xl font-bold text-light-900">24/7 Support</h5>
                <p className="mt-2 text-gray-300">Get round-the-clock assistance from our customer support team for all your queries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default LandingPage;
