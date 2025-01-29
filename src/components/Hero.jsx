// components/Hero.jsx
import React from "react";
import { FaFlask, FaAtom, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 1 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariants = {
  hover: { scale: 1.1, transition: { duration: 0.5 } },
};

const iconVariants = {
  hover: { scale: 1.2, transition: { type: "spring", stiffness: 200 } },
};

function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white flex items-center justify-center px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
        
        {/* Profile Image with Animation */}
        <motion.div 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white overflow-hidden border-4 border-gray-600 shadow-lg flex-shrink-0"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src="./images/IMG_3953.JPG" 
            alt="Image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div 
          className="mt-8 md:mt-0 md:ml-12 text-center md:text-left"
          variants={textVariants}
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bernard Mokoana
          </motion.h1>
          <motion.p className="text-lg md:text-xl mb-6">
            A passionate <span className="text-yellow-400">Computer Science</span> & <span className="text-green-400">Chemistry</span> student
            blending technology and science to create innovative solutions.
          </motion.p>

          {/* Skills */}
          <motion.div className="flex justify-center md:justify-start space-x-4 mb-6">
            <motion.div className="flex items-center space-x-2" variants={textVariants}>
              <FaCode size={24} className="text-blue-400" />
              <span>Developer</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2" variants={textVariants}>
              <FaFlask size={24} className="text-green-400" />
              <span>Chemistry Enthusiast</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2" variants={textVariants}>
              <FaAtom size={24} className="text-pink-400" />
              <span>Innovator</span>
            </motion.div>
          </motion.div>

          {/* Social Icons with Hover Effects */}
          <motion.div className="flex justify-center md:justify-start space-x-4">
            <motion.a href="mailto:bernardmokoana@gmail.com" className="text-gray-300 hover:text-yellow-400 transition duration-300" whileHover="hover" variants={iconVariants}>
              <FaEnvelope size={28} />
            </motion.a>
            <motion.a href="tel:+27711519377" className="text-gray-300 hover:text-yellow-400 transition duration-300" whileHover="hover" variants={iconVariants}>
              <FaPhone size={28} />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/bernard-mokoana-680519228/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300" whileHover="hover" variants={iconVariants}>
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a href="https://github.com/Bernard-Mokoana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300" whileHover="hover" variants={iconVariants}>
              <FaGithub size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
