import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Link as ScrollLink } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import Dashboard from '../pages/Dashboard';
import AccountInfo from '../pages/dashboard/AccountInfo';
import BalanceCheck from '../pages/dashboard/BalanceCheck';
import TransactionHistory from '../pages/dashboard/TransactionHistory';
import WithdrawAmount from '../pages/dashboard/WithdrawMoney';
import AddAmount from '../pages/dashboard/AddAmount';
import PinChange from '../pages/dashboard/PinChange';

const Section = ({ id, title, children }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div
      id={id}
      ref={ref}
      className={`min-h-screen w-full flex flex-col items-center justify-center transition-all duration-1000 transform border-4 border-gray-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <div className="w-full max-w-6xl ">{children}</div>
    </div>
  );
};

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-black bg-opacity-50">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto space-x-4 text-lg font-medium">
              <li className="nav-item">
                <Link className="nav-link text-white hover:text-yellow-500" to="/signin">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white hover:text-green-400" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Welcome to ATM Card Management
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Manage your card with secure login and signup options.
          </p>
          <Link
            to="/signin"
            className="btn btn-primary mx-2 text-xl py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="btn btn-success mx-2 text-xl py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg transition"
          >
            Sign Up
          </Link>
        </div>
      </section>



      <div className="w-full h-full">
        {/* Navigation for scrolling */}
        <nav className="top-30 left-0 right-0 bg-gray-800 text-black  z-50 text-lg">
          <ul className="flex justify-center space-x-4">
            <li>
              <ScrollLink
                to="section1"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400"
              >
                Dashboard
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section2"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400"
              >
             Dashboard Components
              </ScrollLink>
            </li>
            {/* <li>
              <ScrollLink
                to="section3"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400"
              >
                Section 3
              </ScrollLink>
            </li> */}
          </ul>
        </nav>
     
        {/* Landing sections with scroll animation */}
        <Section id="section1" title="Dashboard">
          <div className='pointer-events-none cursor-not-allowed'>
          <Dashboard />
          </div>
        </Section>

        <Section id="section2" title="Dashboard Components I">
          <div className="pointer-events-none cursor-not-allowed grid grid-cols-1 md:grid-cols-3 gap-2 w-full text-black">
            <div className="bg-gray-300 rounded border border-gray-500 p-2">
              <AccountInfo/>
            </div>
            <div className="bg-gray-300 rounded border border-gray-500 p-2">
              <BalanceCheck />
            </div>
            <div className="bg-gray-300 rounded border border-gray-500 p-2">
              <TransactionHistory />
            </div>
        
          </div>
        </Section>

       <Section id="section3" title="Dashboard Components II">
       <div className="pointer-events-none cursor-not-allowed grid grid-cols-1 md:grid-cols-3 gap-2 w-full text-black">
       <div className="bg-gray-300 rounded border border-gray-500 p-2">
              <WithdrawAmount />
            </div>
            <div className="bg-gray-300 rounded border border-gray-500 p-2">
              <AddAmount />
            </div>
            <div className="bg-gray-300 rounded border border-gray-500 p-2">
              <PinChange />
            </div>
          </div>
        </Section>
        
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
