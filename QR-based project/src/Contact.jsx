
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 pt-48 pb-12">
      <div className="w-full max-w-6xl">
        {/* Contact Heading & Paragraph - Reduced Bottom Margin */}
        <div className="text-center mb-6">
          <h1 className="text-7xl font-serif font-semibold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-3">
            Have questions? Fill out the form below and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-10 md:p-14">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                  required
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Write a subject"
                className="w-full px-5 py-4 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label className="block text-gray-700 text-lg font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={6}
                className="w-full px-5 py-4 text-lg rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-800 hover:bg-white-700 text-white py-4 px-6 rounded-full text-lg font-semibold transition-colors duration-300 disabled:opacity-70"
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
