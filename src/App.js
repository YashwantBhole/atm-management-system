import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AccountInfo from './pages/dashboard/AccountInfo';
import BalanceCheck from '../src/pages/dashboard/BalanceCheck';
import PinChange from '../src/pages/dashboard/PinChange';
import TransactionHistory from '../src/pages/dashboard/TransactionHistory';
import WithdrawMoney from '../src/pages/dashboard/WithdrawMoney';
import './App.css'; // Add this to include custom Tailwind animation

function App() {
  return (
    <div className="app-container min-h-screen bg-cover bg-center animate-background-animation text-gray-800 font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/account-info' element={<AccountInfo />} />
          <Route path='/balance-check' element={<BalanceCheck />} />
          <Route path='/pin-change' element={<PinChange />} />
          <Route path='/transaction' element={<TransactionHistory />} />
          <Route path='/withdraw' element={<WithdrawMoney />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
