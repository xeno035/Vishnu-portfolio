import { motion } from "framer-motion";
import { FaPython, FaJava, FaNodeJs, FaReact, FaGithub, FaGitlab } from "react-icons/fa";
import { SiC, SiMysql, SiMongodb, SiPostgresql, SiHtml5, SiCss3, SiJavascript, SiJupyter } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C", icon: <SiC /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Server Side",
    skills: [{ name: "Node.js", icon: <FaNodeJs /> }],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Version Control & Management",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <FaGitlab /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", icon: <DiVisualstudio /> },
      { name: "Jupyter Notebook", icon: <SiJupyter /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16 bg-black/40 backdrop-blur-lg" id="skill">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-10 glow-text"
        >
          Skills
        </motion.h2>

        <div className="space-y-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{
                      x: 5,
                      scale: 1.05,
                      boxShadow: "0px 0px 10px rgba(34, 211, 238, 0.8)", // Neon Cyan Glow
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="flex items-center gap-3 bg-[#1E293B] text-white font-medium px-4 py-3 rounded-lg shadow-md hover:shadow-cyan-500/40 cursor-pointer transition-all duration-300 hover:text-cyan-400 min-w-[110px] max-w-full whitespace-nowrap text-sm md:text-lg"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="truncate">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
