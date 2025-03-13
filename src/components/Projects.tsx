import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import tiger from "./tiger.jpg";
import topoimg from "./topo.jpg";
import secureimg from "./secure.jpg";

// Define Project Type
interface Project {
  title: string;
  description: string;
  image: string; // Can be a URL or an imported image
  tech: string[];
}

// Project Data with Type Safety
const projects: Project[] = [
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
    title: "Personal Portfolio Website",
    description: "Interactive portfolio built using React.js to showcase my skills and projects.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
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

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
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
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white rounded-full"
                    >
                      <Github className="w-6 h-6 text-black" />
                    </motion.a>
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white rounded-full"
                    >
                      <ExternalLink className="w-6 h-6 text-black" />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm"
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
