import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-white font-bold text-xl cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Vishnu K
          </motion.span>
          <div className="hidden md:flex space-x-8">
            {[
              ['About', 'about'],
              ['Skills', 'skills'],
              ['Projects', 'projects'],
              ['Contact', 'contact'],
            ].map(([label, id]) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => scrollToSection(id)}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}