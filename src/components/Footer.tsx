import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'; // Importing from react-icons
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate(); // ✅ Use inside Router

  return (
    <footer className="bg-black/40 backdrop-blur-lg text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 hover:text-cyan-400">Vishnu K</h3>
            <p className="text-gray-400 hover:text-cyan-400">
              Full Stack Developer specializing in modern web technologies and AI integration.
            </p>
          </motion.div>
          
          {/* Quick Links with Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <h3 className="text-xl font-semibold mb-4 hover:text-cyan-400">Quick Links</h3>
            <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
             <a href="#hero"> About</a>
            </p>
            <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
              <a href="#skill">Skills</a>
            </p>
            <p className="text-gray-400 hover:text-cyan-400 cursor-pointer">
              <a href="#projects">Projects</a>
            </p>
            <p className="text-gray-400 hover:text-cyan-400 cursor-pointer" >
              <a href="#get-in-touch">Contact</a>
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 hover:text-cyan-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FaPhone className="w-5 h-5 text-cyan-400" />
                <a href="tel:6380580827" className="text-gray-400 hover:text-cyan-400">
                  +91 6380580827
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMailBulk className="w-5 h-5 text-cyan-400" />
                <a
                  href="mailto:Vishnukarunakaran3535@gmail.com"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  Vishnukarunakaran3535@gmail.com
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <motion.a
                  href="https://linkedin.com/in/vishnu-karunakaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gray-800 rounded-full hover:shadow-cyan-500/40 hover:bg-gray-700"
                >
                  <FaLinkedin className="w-5 h-5 text-cyan-400" />
                </motion.a>
                <motion.a
                  href="https://github.com/xeno035"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gray-800 rounded-full hover:shadow-cyan-500/40 hover:bg-gray-700"
                >
                  <FaGithub className="w-5 h-5 text-cyan-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 hover:text-cyan-400">
            © {new Date().getFullYear()} Vishnu K. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
