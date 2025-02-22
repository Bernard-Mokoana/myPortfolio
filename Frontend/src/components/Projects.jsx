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
    sourceCode: "https://github.com/Bernard-Mokoana/Currency-Converter/blob/main/src/App.jsx",
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
];

function Projects() {
  return (
    <section
      id="projects"
      className="h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white flex items-center justify-center px-4"
    >
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
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 text-white text-sm p-2 flex flex-wrap justify-center space-x-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="absolute top-0 right-0 p-2 space-x-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
                >
                  View Live
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
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

export default Projects;
