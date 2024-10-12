import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignIn() {
  const [atmCardNumber, setAtmCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState(''); // For card number
  const [captcha, setCaptcha] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [showPopup , setShowPopup] = useState(false)
  const navigate = useNavigate();


  const generateCaptcha = () => {
    // Generate a simple CAPTCHA
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  useEffect(() => {
    // Generate CAPTCHA when the component mounts
    setCaptcha(generateCaptcha());
  }, []);

  const handleCaptchaChange = (e) => {
    setCaptchaValue(e.target.value);
  };

  //handles form submit
  const handleSignIn = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if(storedUser && storedUser.atmCardNumber === atmCardNumber && storedUser.pin === pin && captcha === captchaValue){
      setShowPopup(true)

    }else{
      alert('Invalid ATM card number and pin')
    }


    // Validate CAPTCHA
    if (captchaValue !== captcha) {
      setCaptchaError('Please enter a valid CAPTCHA.');
      return;
    }

    // Validate ATM Card Number
    if (atmCardNumber.length !== 16) {
      setError('ATM card number must be exactly 16 digits.');
    } else {
      setError('');
      setCaptchaError('');
      // Proceed with authentication logic

    }
  };

  const closePopup =() => {
    setShowPopup(false)
    navigate('/dashboard')
  }

  const handleAtmCardChange = (e) => {
    setAtmCardNumber(e.target.value);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  return (
    <div className="container mx-auto mt-0 flex justify-center items-center min-h-screen">
      <div className="bg-black  p-8 rounded-lg shadow-lg w-full max-w-lg backdrop-blur-md ">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="atmCardNumber" className="block text-white text-lg mb-2">ATM Card Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="atmCardNumber"
              placeholder="Enter your 16-digit ATM card number"
              value={atmCardNumber}
              onChange={handleAtmCardChange}
              maxLength="16"
              required
            />
            {error && <small className="text-red-400">{error}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="pin" className="block text-white text-lg mb-2">PIN</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="pin"
              placeholder="Enter your PIN"
              value={pin}
              onChange={handlePinChange}
              required
            />
          </div>

          {/* CAPTCHA Section */}
          <div className="mb-4">
            <label htmlFor="captcha" className="block text-white text-lg mb-2">
              Enter the Captcha: <strong>{captcha}</strong>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="captcha"
              value={captchaValue}
              onChange={handleCaptchaChange}
              placeholder="Enter captcha"
              required
            />
            {captchaError && <small className="text-red-400">{captchaError}</small>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white text-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign In
            </button>
            <label htmlFor="signup" className="block cursor-pointer mt-10 text-lg mb-2 text-blue-500 hover:text-blue-700 underline" onClick={() => navigate('/signup')}>New Here ?</label>
          </div>
        </form>
      </div>


      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-bold text-green-600">SignIn successful !</h3>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
            </div>
            </div>
        ) }

    </div>
  );
}

export default SignIn;
