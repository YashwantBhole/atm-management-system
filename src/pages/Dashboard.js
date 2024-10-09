import React from "react";
import atmImage from '../assetss/atmImage.jpg'
import "./Dashboard.css"; // Include custom CSS for animations
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
const navigate = useNavigate();

  return (
    <div
      className="dashboard-container h-screen w-full bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${atmImage})`, backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "overlay" }}
    >
      <div className="button-container space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 w-full max-w-lg">

        <button className="animated-button bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
        onClick={() => navigate('/account-info')}>
         Account Information
        </button>

        <button className="animated-button bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
        onClick={()=> navigate('/withdraw')}>
          Withdraw Money
        </button>

        <button className="animated-button bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
        onClick={() => navigate('/balance-check')}>
          Check Balance

        </button>
        <button className="animated-button bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
        onClick={() => navigate('/transaction')}>
         Transaction History
        </button>

        <button className="animated-button bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
        onClick={() => navigate('/pin-change')}>
          Change PIN
        </button>

        <button className="animated-button bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg shadow-lg w-full text-center"
        onClick={() => navigate('/addMoney')}>
         Deposit Amount
        </button>

      </div>
    </div>
  );
};

export default Dashboard;
