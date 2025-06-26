import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Password Generator",
    description:
      "This application allows users to create secure passwords with customizable options such as length, inclusion of numbers, and special characters.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveLink: "https://bernard-mokoana.github.io/Password-Generator/",
    sourceCode:
      "https://github.com/Bernard-Mokoana/Password-Generator/blob/main/passwordgenerator/src/App.jsx",
  },
  {
    title: "Currency Converter",
    description:
      "A simple tool that allows users to convert amounts between different currencies based on the latest exchange rates.",
    technologies: ["React", "TailwindCSS", "JavaScript"],
    image:
      "https://images.pexels.com/photos/29822158/pexels-photo-29822158/free-photo-of-bitcoin-coins-on-a-stock-market-chart.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://bernard-mokoana.github.io/Currency-Converter/",
    sourceCode:
      "https://github.com/Bernard-Mokoana/Currency-Converter/blob/main/src/App.jsx",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills, featuring animations and a responsive design.",
    technologies: ["React", "TailwindCSS", "Framer motion"],
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveLink: "https://bernard-mokoana.github.io/myPortfolio/",
    sourceCode: "https://github.com/Bernard-Mokoana/myPortfolio",
  },
  // {
  //   title: "Employee Management System",
  //   description:
  //     "",
  //   technologies: ["Android Studio", "Java", "Xml", "Firestore"],
  //   image:
  //     "",
  //   liveLink: "",
  //   sourceCode: "",
  // },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-4 py-16"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
