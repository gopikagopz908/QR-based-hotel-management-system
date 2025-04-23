import React, { useRef, useState } from 'react';
import useVerify from '../hooks/useVerifyotp';
import { useNavigate } from 'react-router-dom';

const OtpModal = ({ email }) => {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const { loading, verifyOtp } = useVerify();

  const navigate=useNavigate()

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      alert('Please enter the 6-digit OTP');
      return;
    }

    const data = { email, otp: enteredOtp };
    verifyOtp(data);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Enter OTP</h2>
        <div className="flex justify-between gap-2">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          className="mt-6 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition duration-300 font-semibold"
        >
          {loading ? 'Verifying...' : ' OTP Verified'}
         
          
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
