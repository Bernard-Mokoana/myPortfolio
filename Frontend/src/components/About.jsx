import React from "react";
import { FaFlask, FaLightbulb, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center space-y-8">
          {/* Image section */}
          <motion.div className="flex justify-center">
            <div className="overflow-hidden rounded-full w-64 h-64 border-4 border-gray-600 shadow-xl">
              <img
                src="./images/DSC9489.JPG"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div>
            <p className="text-lg mb-4">
              I&apos;m passionate about software engineering, with a strong
              focus on backend development and full-stack application design. My
              technical skill set includes Node.js, Express.js, MongoDB, MySQL,
              React, and Tailwind CSS, which I leverage to build scalable,
              high-performance solutions. Through hands-on project development,
              I’ve gained practical experience in end-to-end software system
              design, implementation, testing, and deployment. These experiences
              have sharpened my architectural thinking, strengthened my
              problem-solving abilities, and deepened my ability to build
              robust, maintainable applications.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="text-center">
                <FaUserGraduate size={48} className="text-blue-400 mb-2 ml-2" />
                <p className="text-lg">Student</p>
              </div>
              <div className="text-center">
                <FaLightbulb size={48} className="text-yellow-400 mb-2 ml-3" />
                <p className="text-lg">Innovator</p>
              </div>
              <div className="text-center">
                <FaFlask size={48} className="text-green-400 mb-2 ml-2" />
                <p className="text-lg">Scientist</p>
              </div>
            </div>
            <p className="text-sm mt-6 text-gray-300">
              Outside of academics, I enjoy exploring new technologies,
              conducting chemical experiments, and creating meaningful projects
              that make an impact. Let&apos;s work together to create something
              amazing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
