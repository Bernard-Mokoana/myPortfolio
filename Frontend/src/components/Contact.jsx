import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({message: "", type: ""});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus({message: "Sending...", type: "info" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ message: "Message sent successfully!", type: "success"});
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setStatus({message: "", type: ""}), 5000);
      } else {
        setStatus({message: `Error: ${result.message}`, type: "error" });
      }
    } catch (error) {
      setStatus({message: "Failed to send message. Please try again later.", type: error});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p>Feel free to reach out to me using the form or through the details below:</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-pink-400" />
                <a href="mailto:bernardmokoana@gmail.com" className="hover:underline">
                  bernardmokoana@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaLinkedin className="text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/bernard-mokoana-680519228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub className="text-gray-400" />
                <a
                  href="https://github.com/Bernard-Mokoana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-yellow-400" />
                <span>071 151 9377</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-md">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className={`w-full bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-700 transition ${
                loading && "opacity-50 cursor-not-allowed"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>


            {status.message && <p className="mt-4 text-center">{status.message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
