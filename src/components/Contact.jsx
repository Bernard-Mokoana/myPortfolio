import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p>
              Feel free to reach out to me using the form or through the details below:
            </p>
            <div className="space-y-2">

              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-pink-400" />
                <a
                  href="mailto:bernardmokoana@gmail.com"
                  className="hover:underline"
                >
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
                https://www.linkedin.com/in/bernard-mokoana
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
                  https://github.com/Bernard-Mokoana
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <FaPhone className="text-yellow-400" />
                <a
                  href="0711519377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                 0711519377
                </a>
              </div>
            </div>
          </div>

         


          {/* Contact Form */}
          <form
            action="#"
            method="POST"
            className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
