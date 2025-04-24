import React, { useRef, useState } from 'react';
import useVerify from '../hooks/useVerifyotp';
import useRazorpayPayment from '../hooks/razorPayHook';
import useOrder from '../hooks/orderHook';
import { Navigate } from 'react-router-dom';

const OtpModal = ({ email }) => {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const { mutate: placeOrder, isLoading, isSuccess, error } = useOrder();
  const { loading, verifyOtp } = useVerify();
  const { openRazorpayPayment } = useRazorpayPayment();

  const orderData = JSON.parse(localStorage.getItem("orders"));

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');
    placeOrder(orderData);
    // openRazorpayPayment(orderData);
    if (enteredOtp.length !== 6) {
      alert('Please enter the 6-digit OTP');
      return;
    }
   
    const otpPayload = { email, otp: enteredOtp };
    const res = await verifyOtp(otpPayload);

   
    if (res.status === 200) {
     localStorage.setItem("token",res.data.token)
      if (!orderData) {
        alert("No order data found in localStorage.");
        return;
      }
    await openRazorpayPayment(orderData);
    Navigate('/')
    
    } else {
      alert("Invalid OTP. Please try again.");
    }
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
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
