import { motion, AnimatePresence } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy Load Heavy Components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const GetInTouch = lazy(() => import("./components/GetInTouch"));

// Function to Preload Images
const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

function App() {
  useEffect(() => {
    preloadImages(["/images/profile.jpg", "/images/project1.jpg"]);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-black text-white min-h-screen"
      >
      

        {/* Foreground Content */}
        <div className="relative z-10 backdrop-blur-lg bg-black/40">
          <Navbar />
          <main>
            <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
              <motion.section
                id="hero"
                className="bg-transparent p-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
              </motion.section>

              <motion.section
                id="about"
                className="bg-transparent p-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.section>

              <motion.section
                id="skills"
                className="bg-transparent p-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Skills />
              </motion.section>

              <motion.section
                id="projects"
                className="bg-transparent p-10"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.section>

              <motion.section
                className="bg-transparent p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <GetInTouch />
              </motion.section>
            </Suspense>
          </main>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
