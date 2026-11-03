import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SocialIcon } from './ui/SocialIcon';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold text-white tracking-tighter mb-4 block">
              Galih<span className="text-[#007ACC]">han.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              A passionate Data Analyst & Junior Full Stack Developer building data-driven web
              experiences.
            </p>
            <div className="flex items-center space-x-4">
              <SocialIcon href="https://github.com/han733" icon={<Github size={18} />} label="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/galih-witradika-0a108b2ab/" icon={<Linkedin size={18} />} label="LinkedIn" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#007ACC] text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#007ACC] text-sm transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#007ACC] text-sm transition-colors">
                  Projects / Blog
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-[#007ACC] text-sm transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-center">
                <Mail size={16} className="mr-2" /> galihwitra261@gmail.com
              </li>
              <li className="text-gray-400 text-sm flex items-center">
                <MapPin size={16} className="mr-2" /> Yogyakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Galihhan. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-gray-500 text-sm">Made with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};