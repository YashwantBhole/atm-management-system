
import React, { useContext } from 'react';
import {  FaRupeeSign } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Footer from './Footer';

const Dashboard = () => {

  const navigate = useNavigate();
  const { balance, user } = useContext(UserContext)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2 text-xl font-bold animate-bounce">
  <svg xmlns="" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 10h18M7 16h10" />
  </svg>
  <span>ATM Card Dashboard</span>
</div>
          <div className="flex space-x-4">
            <Link to='/logout'><button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button></Link>
          </div>
        </div>
      </header>

      {/* Account Overview */}
      <section className="container mx-auto py-6">
        <h2 className="text-2xl font-bold mb-4">Account Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Account Balance */}
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold">Account Balance</h3>
            <p className="text-2xl font-bold"> <span className="text-green-900 font-bold blur hover:blur-none">
              <FaRupeeSign className="inline h-6" />{balance}
            </span></p>
          </div>

          {/* Account Details */}
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold">Account Details</h3>
            <p>Account Holder :<span className='text-1xl text-green-900 font-bold'> {user.name}</span></p>
            <p>Card Number:<span className='text-green-800 font-bold blur hover:blur-none'>{user.atmCardNumber}</span> </p>
            <p>Status: <span className='text-green-700 font-bold'>Active</span></p>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="container mx-auto py-6">
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <div className="bg-white shadow-md p-4 rounded">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Date</th>
                <th className="p-2">Description</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-2">10/01/2024</td>
                <td className="p-2">ATM Withdrawal</td>
                <td className="p-2">
                  <p className="text-1xl font-bold"> <span className="text-green-900 font-bold">
                    <FaRupeeSign className="inline h-5" />2500
                  </span></p>
                </td>

              </tr>
              <tr>
                <td className="p-2">10/03/2024</td>
                <td className="p-2">Grocery Store</td>
                <td className="p-2">
                  <p className="text-1xl font-bold"> <span className="text-green-900 font-bold">
                    <FaRupeeSign className="inline h-5" />1020
                  </span></p>
                </td>

              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Actionable Components */}
      <section className="container mx-auto py-6">
        <h2 className="text-2xl font-bold mb-4">Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Withdraw Money */}
          <div className="bg-white shadow-md p-4 rounded text-center">
            <button className="animated-button bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
              onClick={() => navigate('/withdraw')}>
              Withdraw Money
            </button>
          </div>

          {/* Check Balance */}
          <div className="bg-white shadow-md p-4 rounded text-center">

            <button className="animated-button bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
              onClick={() => navigate('/balance-check')}>
              Check Balance
            </button>
          </div>

          {/* Transaction History */}
          <div className="bg-white shadow-md p-4 rounded text-center">
            <button className="animated-button bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
              onClick={() => navigate('/transaction')}>
              Transaction History
            </button>
          </div>

          {/* Change Pin */}
          <div className="bg-white shadow-md p-4 rounded text-center">
            <button className="animated-button bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
              onClick={() => navigate('/pin-change')}>
              Change PIN
            </button>
          </div>

          {/* Deposit Amount */}
          <div className="bg-white shadow-md p-4 rounded text-center">
            <button className="animated-button bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
              onClick={() => navigate('/addMoney')}>
              Deposit Amount
            </button>
          </div>

          {/* Block card */}
          <div className='bg-white shadow-md p-4 rounded text-center'>
            <button className='animated-button bg-red-500 hover:bg-red-700 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center'
              onClick={() => navigate('/blockCard')}>
              Block Card
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Dashboard;
