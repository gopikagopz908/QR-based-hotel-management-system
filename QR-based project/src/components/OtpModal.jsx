import React, { useRef } from 'react';

const OtpModal = () => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      inputsRef.current[index + 1].focus();
    } else if (value === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center bg-black/20 backdrop-blur-sm justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Enter OTP</h2>
        <div className="flex justify-between gap-2">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </div>
        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition duration-300 font-semibold">
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
