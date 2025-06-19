import vishnuimg from "./vishnu.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Typing effect
  const roles = ["Full Stack Developer", "AI Enthusiast", "Blockchain Developer"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
      setCurrentRole(roles[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  // Function to download the resume
  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1gT-Q-Sw3PFtB-V4Si8MJL-pZuEUHc5jS/view?usp=drive_link",
      "_blank"
    );
  };

  // Scroll to 'Get in Touch' section
  const handleHireMeClick = () => {
    const section = document.getElementById("get-in-touch");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section  id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 md:px-12 lg:px-24 pt-16 w-full overflow-hidden bg-black">
      <div className="relative z-10 container mx-auto py-16 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Profile Image with Floating Effect */}
          <motion.div
            className="relative flex flex-col items-center w-full md:w-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 shadow-lg shadow-cyan-500/30">
              <img
                src={vishnuimg}
                alt="Vishnu K"
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleResumeDownload}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition duration-300"
              >
                Download Resume
              </button>
              <button
                onClick={handleHireMeClick}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition duration-300"
              >
                Hire Me
              </button>
            </div>
          </motion.div>

          {/* Text & Social Links */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              Hey , I'm Vishnu
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
              I'm a <span className="text-cyan-400">{currentRole}</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              Passionate about building innovative solutions with cutting-edge technologies. Specializing in React.js, Node.js, and AI integration. <br />
              Worked on AI-driven projects like tiger stripe recognition using CNN & blockchain. <br />
              Always eager to learn and push the boundaries of technology.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 md:gap-6 justify-center md:justify-start">
              <a href="tel:6380580827" className="p-3 bg-gray-900/60 rounded-full hover:bg-cyan-500/60 transition text-xl">📞</a>
              <a href="mailto:Vishnukarunakaran3535@gmail.com" className="p-3 bg-gray-900/60 rounded-full hover:bg-cyan-500/60 transition text-xl">📧</a>
              <a href="https://linkedin.com/in/vishnu-karunakaran" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900/60 rounded-full hover:bg-cyan-500/60 transition text-xl">🔗</a>
              <a href="https://github.com/xeno035" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900/60 rounded-full hover:bg-cyan-500/60 transition text-xl">💻</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
