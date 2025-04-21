
// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       alert("Message sent! We'll get back to you soon.");
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-35 lg:py-35 pt-24 pb-20">
//       <div className="w-full max-w-[100%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[1500px] xl:max-w-[2000px] 2xl:max-w-[2300px]">
        
//         <div className="text-center mb-14 px-2">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl  font-serif font-bold text-gray-800">
//             Contact Us
//           </h1>
//           <p className="text-gray-600 max-w-5xl mx-auto text-base sm:text-lg md:text-xl lg:text-xl  mt-4">
//             Have questions? Fill out the form below and we’ll respond as soon as possible.
//           </p>
//         </div>

        
//         <div className="bg-white rounded-3xl shadow-2xl w-full p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32 2xl:p-40">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 mb-10">
             
//               <div>
//                 <label className="block text-gray-700 text-lg sm:text-xl lg:text-2xl  font-medium mb-3">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="w-full px-2 py-2 text-lg sm:text-xl lg:text-xl  rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 text-lg sm:text-xl lg:text-2xl  font-medium mb-3">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email address"
//                   className="w-full px-2 py-2 text-lg sm:text-xl lg:text-xl 2xl:text-3xl rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mb-8">
//               <label className="block text-gray-700 text-lg sm:text-xl lg:text-2xl  font-medium mb-3">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Write a subject"
//                 className="w-full px-2 py-2 text-lg sm:text-xl lg:text-xl 2xl:text-3xl rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
//                 required
//               />
//             </div>

//             <div className="mb-12">
//               <label className="block text-gray-700 text-lg sm:text-xl lg:text-2xl  font-medium mb-3">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message"
//                 rows={8}
//                 className="w-full px-2 py-2 text-lg sm:text-xl lg:text-xl 2xl:text-3xl rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition resize-none"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-red-800 hover:bg-red-700 text-white py-5 lg:py-2 2xl:py-7 text-lg sm:text-xl lg:text-2xl  rounded-full font-semibold transition-colors duration-300 disabled:opacity-70"
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pt-24 pb-20">
      <div className="w-full max-w-3xl"> {/* 🌟 Shrunk max width */}
        
        <div className="text-center mb-10 px-2">
          <h1 className="text-3xl font-serif font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 text-base mt-3">
            Have questions? Fill out the form and we’ll respond shortly.
          </p>
        </div>

        <div className="bg-white rounded-1xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-base  font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-base font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-2 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-base font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-base font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={5}
                className="w-full px-4 py-2 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-700 hover:bg-red-600 text-white py-3 text-base rounded-md font-semibold transition disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
