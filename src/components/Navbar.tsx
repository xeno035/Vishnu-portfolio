import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Neon Glow Effect for Name */}
        <motion.span
          className="text-3xl font-bold cursor-pointer text-cyan-400 neon-glow"
          whileHover={{ scale: 1.1 }}
        >
          Vishnu  
        </motion.span>

        {/* Navigation Links with Glow Hover Effect */}
        <div className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.div
              key={item}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-lg neon-hover"
              >
                {item}
              </a>
              <motion.div
                className="absolute left-0 bottom-0 h-1 bg-cyan-400 w-0 group-hover:w-full transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
}
