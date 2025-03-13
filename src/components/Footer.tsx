import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Vishnu K</h3>
            <p className="text-gray-400">
              Full Stack Developer specializing in modern web technologies and AI integration.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <p className="text-gray-400 hover:text-white cursor-pointer">About</p>
            <p className="text-gray-400 hover:text-white cursor-pointer">Skills</p>
            <p className="text-gray-400 hover:text-white cursor-pointer">Projects</p>
            <p className="text-gray-400 hover:text-white cursor-pointer">Contact</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:6380580827" className="text-gray-400 hover:text-white">
                  +91 6380580827
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:Vishnukarunakaran3535@gmail.com"
                  className="text-gray-400 hover:text-white"
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
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vishnu K. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}