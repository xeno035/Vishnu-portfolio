import vishnuimg from "./vishnu.jpg";

export default function Hero() {
  // Function to download the resume
  const handleResumeDownload = () => {
    window.location.href = "https://drive.google.com/file/d/1cVPt6mYzztnX_Q2p7-8TctNiwk1NIo-I/view?usp=sharing";
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image & Resume Button */}
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={vishnuimg}
              alt="Vishnu K"
              className="rounded-full w-80 h-80 object-contain mx-auto shadow-2xl"
            />
            <button
              onClick={handleResumeDownload}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
            >
              Download Resume
            </button>
          </div>

          {/* Text & Social Links */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Vishnu K</h1>
            <h2 className="text-2xl text-gray-400 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-gray-300 mb-8">
              Passionate about building innovative solutions with cutting-edge technologies.
              Specializing in React.js, Node.js, and AI integration.
              Worked on AI-driven projects like tiger stripe recognition using CNN & blockchain. 
              Always eager to learn, he strives to push the boundaries of technology
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="tel:6380580827" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                📞
              </a>
              <a href="mailto:Vishnukarunakaran3535@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                📧
              </a>
              <a href="https://linkedin.com/in/vishnu-karunakaran" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                🔗
              </a>
              <a href="https://github.com/xeno035" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                💻
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
