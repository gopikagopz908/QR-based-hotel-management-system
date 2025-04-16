


// import React, { useState } from 'react';
// import { Mail, Lock } from 'lucide-react';
// import useLogin from '../hooks/useLogin';

// const AdminLoginModal = ({ onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const{loading,Login}=useLogin()

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const data={email,password}
//     await Login(data)
//     if (!email || !password) {
//       console.log("Please fill in all fields");
//       return;
//     }

//     console.log('Login attempt with:', { email, password });
//   };

//   return (
//     <div className="fixed inset-0  bg-opacity-60 z-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative">
//         <h2 className="text-2xl font-bold text-center mb-6 text-flavor-red">Admin Login</h2>
//         <form onSubmit={handleSubmit} className="w-full">
//           <div className="mb-6">
//             <div className="flex items-center">
//               <div className="mr-4 text-flavor-red">
//                 <Mail size={24} />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-red-800 bg-opacity-90 text-white placeholder-white/70 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
//               />
//             </div>
//           </div>

//           <div className="mb-10">
//             <div className="flex items-center">
//               <div className="mr-4 text-flavor-red">
//                 <Lock size={24} />
//               </div>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-red-800 bg-opacity-90 text-white placeholder-white/70 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
//               />
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-flavor-gray hover:bg-black text-flavor-red font-medium py-3 px-12 lg:text-1xl text-red-800 rounded-md transition-colors"
//             >
//               LOG IN
//             </button>
//           </div>
//         </form>

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-flavor-red hover:text-red-600 text-xl font-bold"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginModal;
