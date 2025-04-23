
import React, { useState } from 'react';
import OtpModal from '../components/OtpModal';
import useUserLogin from '../hooks/useUserLogin';

const UserLogin = () => {
  const [isModal, setIsModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const { loading, usersLogin } = useUserLogin();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name } = formData;

    if (!email || !name) {
      console.log('Please fill in all fields');
      return;
    }

    const data = { email, name };

    try {
      await usersLogin(data);
      console.log('Submitted Data:', data);
      setIsModal(true); // Only show OTP modal if login is successful
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-red-100 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Login</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition duration-300 font-semibold"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
      {isModal && <OtpModal email={formData.email} />}
      </div>
  );
};

export default UserLogin;
