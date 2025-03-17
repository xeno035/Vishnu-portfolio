import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import tiger from "./tiger.jpg";
import topoimg from "./topo.jpg";
import secureimg from "./secure.jpg";
import medpresimg from "./medpres.jpg"

const projects = [
  {
    title: "Tiger Identification System",
    description: "AI-powered system using CNN and blockchain for secure tiger recognition and tracking.",
    image: tiger,
    tech: ["Python", "TensorFlow", "Blockchain", "OpenCV"],
  },
  {
    title: "High-Speed P2P File Transfer",
    description: "Faster than Telegram and Google Drive, built with P2P networking, encryption, and PyQt GUI.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "PyQt", "P2P", "Encryption"],
  },
  {
    title: "Topography Extraction Model",
    description: "AI-driven terrain analysis system for automated topographical mapping.",
    image: topoimg,
    tech: ["Python", "AI", "Image Processing"],
  },
  {
    title: "MedPres: A Digital Prescription Verification System",
    description: "A secure system for managing and verifying medical prescriptions to prevent fraud and ensure safe medication dispensing.",
    image: medpresimg,    // Replace with an actual image URL if you have one
    tech: ["React.js", "Node.js", "Express.js", "SQLite", "Future MongoDB/PostgreSQL support"]
  },
  {
    title: "Web Scraper with Python",
    description: "Automated web scraping tool using BeautifulSoup and Selenium for data extraction.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "BeautifulSoup", "Selenium"],
  },
  {
    title: "Secure Login System",
    description: "A secure authentication system using Node.js, JWT, and bcrypt for encrypted login.",
    image: secureimg,
    tech: ["Node.js", "JWT", "Bcrypt", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/40 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 
                         hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:scale-105"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/xeno035"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white rounded-full hover:shadow-cyan-500/40"
                    >
                      <Github className="w-6 h-6 text-black" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/xeno035"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white rounded-full hover:shadow-cyan-500/40"
                    >
                      <ExternalLink className="w-6 h-6 text-black" />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-xs hover:shadow-cyan-500/40 hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
