// components/Skills.jsx
import React from "react";
import { FaCode, FaDatabase, FaFlask, FaJava, FaTools } from "react-icons/fa";
import { SiCplusplus, SiCss3, SiExpress, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPostman, SiPython, SiReact, SiTailwindcss, SiVite,  } from "react-icons/si";
import { motion } from "motion/react"

const gridContainerVariants = {
  hidden: {opacity: 0},
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.25}
      }
}

const iconAnimationVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 10,
    },
  },
};


function Skills() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} 
        id="skills"
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16"
      >
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">My Skills</h2>

          <p className="text-lg mb-12">
            Combining expertise in <span className="text-yellow-400">Computer Science</span> and <span className="text-green-400">Chemistry</span> to create innovative and impactful solutions.
          </p>

          <motion.div
            variants={gridContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
          >
            {/* Programming Languages */}
            <motion.div
              custom="left"
              variants={iconAnimationVariants}
              className="flex flex-col items-center"
            >
              <FaCode size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold">Programming Languages</h3>
              <motion.div className="flex space-x-4 mt-4">
                <SiHtml5 size={24} className="text-indigo-400" />
                <SiCss3 size={24} className="text-blue-400" />
                <SiJavascript size={24} className="text-yellow-400" />
                <SiPython size={24} className="text-blue-400" />
                <SiCplusplus size={24} className="text-green-400" />
                <FaJava size={24} className="text-blue-400" />
              </motion.div>
              <p className="text-sm mt-2 text-gray-300">
                Proficient in HTML, CSS, JavaScript, Python, C++, and Java.
              </p>
            </motion.div>

            {/* Databases */}
            <motion.div
              custom="right"
              variants={iconAnimationVariants}
              className="flex flex-col items-center"
            >
              <FaDatabase size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold">Databases</h3>
              <motion.div className="flex space-x-4 mt-4">
                <SiMongodb size={26} className="text-green-400" />
                <SiMysql size={26} className="text-blue-400" />
                <SiPostgresql size={26} className="text-yellow-400" />
                <SiFirebase size={26} className="text-orange-400" />
              </motion.div>
              <p className="text-sm mt-2 text-gray-300">
                MongoDB, SQL, PostgreSQL, and Firebase.
              </p>
            </motion.div>

            {/* Tools & Frameworks */}
            <motion.div
              custom="left"
              variants={iconAnimationVariants}
              className="flex flex-col items-center"
            >
              <FaTools size={48} className="text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold">Tools & Frameworks</h3>
              <motion.div className="flex space-x-4 mt-4">
                <SiReact size={24} className="text-blue-400" />
                <SiNodedotjs size={24} className="text-green-400" />
                <SiTailwindcss size={24} className="text-teal-400" />
                <SiExpress size={24} className="text-white" />
                <SiPostman size={24} className="text-orange-400" />
                <SiGit size={24} className="text-red-400" />
                <SiGithub size={24} />
                <SiVite size={24} className="text-orange-400" />
              </motion.div>
              <p className="text-sm mt-2 text-gray-300">
                React, Vite, Node.js, Express.js, Tailwind CSS, Git, GitHub, and Postman.
              </p>
            </motion.div>

            {/* Chemistry */}
            <motion.div
              custom="right"
              variants={iconAnimationVariants}
              className="flex flex-col items-center"
            >
              <FaFlask size={48} className="text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold">Chemistry</h3>
              <p className="text-sm mt-2 text-gray-300">
                Skilled in laboratory analysis and chemical modeling.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Skills;