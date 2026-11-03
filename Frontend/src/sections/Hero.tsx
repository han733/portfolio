import { Github, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/Button';
// 1. Impor file gambar dari folder assets
import profileFoto from '../assets/Images/FotoProfilProfesional.jpeg';
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Watermark Element */}
      <div className="absolute top-1/4 left-0 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[8vw] font-black text-gray-50 opacity-80 whitespace-nowrap overflow-hidden">
          EVERYTHING IS POSSIBLE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Copy */}
        <div className="flex flex-col space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#007ACC] text-sm font-semibold w-max border border-blue-100">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi! I'm <span className="text-[#007ACC]">Galihhan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
            Data Analyst & <br className="hidden md:block" /> Junior Full Stack Developer
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-lg text-lg">
            Bridging the gap between data insights and functional web applications. Currently seeking
            internship opportunities to create impact.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button href="#contact" variant="primary" icon>
              Get In Touch
            </Button>
            <Button href="#projects" variant="secondary">
              Project View
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-5 pt-8">
            <span className="text-sm text-gray-400 font-medium mr-2">Check out my:</span>
            <a href="https://github.com/han733" className="text-gray-400 hover:text-[#007ACC] transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/galih-witradika-0a108b2ab/" className="text-gray-400 hover:text-[#007ACC] transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image Placeholder */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
            {/* Replace with actual image: <img src="profile.jpg" className="w-full h-full object-cover" /> */}
            <img
          src={profileFoto}
          alt="Foto Profil Galih"
          className="w-full h-full object-cover"
        />
        </div>
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 md:right-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2 animate-bounce">
            <span className="text-xl">📊</span>
            <span className="text-sm font-bold text-gray-800">Data Driven</span>
          </div>
          <div className="absolute bottom-10 left-10 md:left-20 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2 animate-pulse">
            <span className="text-xl">💻</span>
            <span className="text-sm font-bold text-gray-800">Clean Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};