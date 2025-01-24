import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Password Generator",
    description: "This applicatiom allows users to create secure passwords with customizable options such as length, inclusion of numbers, and special characters.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://bernard-mokoana.github.io/Password-Generator/",
    sourceCode: "https://github.com/Bernard-Mokoana/Password-Generator/blob/main/passwordgenerator/src/App.jsx",
  },
  {
    title: "Currency Converter",
    description: "A Currency Converter Application is a simple tool that allows users to convert amounts between different currencies based on the latest exchange rates.",
    technologies: ["React", "TailwindCSS", "JavaScript"],
    liveLink: "https://bernard-mokoana.github.io/Currency-Converter/",
    sourceCode: "https://github.com/Bernard-Mokoana/Currency-Converter",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills, featuring animations and a responsive design.",
    technologies: ["React", "TailwindCSS"],
    liveLink: "https://bernard-mokoana.github.io/myPortfolio/",
    sourceCode: "https://github.com/Bernard-Mokoana/myPortfolio",
  },
];

function Projects() {
  return (
    <section id='projects' className="bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-900 text-white py-16">
    <motion.div 
      className="max-w-6xl mx-auto px-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap justify-center space-x-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                View Live
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
  );
}


export default Projects