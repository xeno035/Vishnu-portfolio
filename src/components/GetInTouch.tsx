import { useState } from "react";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Function to send email using mailto
  const sendEmail = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const mailtoLink = `mailto:vishnukarunakaran3535@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <motion.section
      id="get-in-touch"
      className="my-16 px-6 py-12 bg-black/40 backdrop-blur-lg rounded-lg shadow-lg max-w-2xl mx-auto text-center border border-cyan-500/40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h3
        className="text-3xl font-semibold text-cyan-400 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Get in Touch
      </motion.h3>

      <motion.p
        className="text-gray-300 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Have an idea or want to collaborate? Drop me a message!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:shadow-cyan-500/40"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:shadow-cyan-500/40"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          placeholder="Your Message"
          className="w-full p-3 bg-gray-800 text-white rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:shadow-cyan-500/40"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          whileFocus={{ scale: 1.02 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="w-full py-3 bg-cyan-500 text-black font-bold rounded-md hover:bg-cyan-400 hover:shadow-cyan-500/40 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
