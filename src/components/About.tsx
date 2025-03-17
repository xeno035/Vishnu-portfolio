import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <motion.section
    id="about"
      className="py-20 bg-black/40 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Hi, I'm <span className="text-cyan-400 font-bold">Vishnu K</span>, a  
          <span className="text-cyan-400 font-semibold"> Full Stack Developer</span> passionate about  
          <span className="text-cyan-400 font-semibold"> AI integration</span>, <span className="text-cyan-400 font-semibold">Blockchain</span>,  
          and <span className="text-cyan-400 font-semibold">cutting-edge technology</span>.  
          Developed an AI-powered <span className="text-cyan-400 font-semibold">tiger identification system</span> using  
          <span className="text-cyan-400 font-semibold"> CNN & Blockchain</span> for secure wildlife tracking.  
          Currently working on a <span className="text-cyan-400 font-semibold">P2P high-speed file transfer system</span>  
          that aims to outperform existing platforms in speed & efficiency.  
          Always exploring new technologies to build <span className="text-cyan-400 font-semibold">impactful and scalable solutions</span>. 🚀
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/40 hover:text-cyan-400 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 text-gray-300"
            >
              <p className="text-lg">
                <span className="text-cyan-400 font-semibold">B.Tech in AI & DS</span>  
                <br />
                Dr. N.G.P. Institute of Technology
                <br />
                CGPA:7.90
              </p>
            </motion.div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/40 hover:text-cyan-400 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 text-gray-300"
            >
              <div>
                <p className="text-lg font-medium text-cyan-400">
                  Birdscale Technology & Services Private Limited
                </p>
                <p>Internship - Topography Extraction Model Using AI</p>
              </div>
              <div>
                <p className="text-lg font-medium text-cyan-400">
                  Cappricio Securities
                </p>
                <p>Ethical Hacking Workshop (March 2, 2024)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
