import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaFlask, FaLaptop } from 'react-icons/fa';

function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const educationSections = [
    {
      icon: <FaLaptop size={28} className='text-blue-400 mr-3' />,
      title: "Computer Science",
      modules: [
        "Introduction To Computing And Programming(Python)",
        "Structured Programming(C++)",
        "Object-Oriented Programming(Java)",
        "Data Structures and Algorithms(Java)",
        "Software Engineering",
      ],
    },
    {
      icon: <FaFlask size={28} className='text-green-400 mr-3' />,
      title: "Chemistry",
      modules: [
        "Introductory Inorganic & Physical Chemistry",
        "Introductory Organic Chemistry",
        "Physical Chemistry 2",
        "Analytical Chemistry 2",
        "Organic Chemistry",
        "Inorganic Chemistry 2",
      ],
    },
    {
      icon: <FaLaptop size={28} className='text-yellow-400 mr-3' />,
      title: "Mathematics",
      modules: [
        "Introductory Algebra And Calculus I",
        "Introductory Algebra And Calculus 2",
        "Advanced Calculus 1",
        "Multivariable Calculus 2",
        "Linear Algebra 1",
        "Linear Algebra 2",
      ],
    },
  ];

  const handleNext = () => {
    if (currentIndex < educationSections.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const currentSection = educationSections[currentIndex];

  return (
    <section id='education' 
    className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-16">
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">My Education</h2>
        <div className="relative">
          <button
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-white ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-400"
            }`}
            disabled={currentIndex === 0}
            aria-label="Previous section"
          >
            <FaChevronLeft size={20} />
          </button>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-700 rounded-lg shadow-lg text-center"
          >
            <div className="flex items-center justify-center mb-4">
              {currentSection.icon}
              <h3 className="text-2xl font-semibold">{currentSection.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300">
              {currentSection.modules.map((module) => (
                <li key={module}>{module}</li>
              ))}
            </ul>
          </motion.div>
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-white ${
              currentIndex === educationSections.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-400"
            }`}
            disabled={currentIndex === educationSections.length - 1}
            aria-label="Next section"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;