import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(20);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-900 tracking-tighter">
          Galih<span className="text-[#007ACC]">han.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#007ACC] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
            <div className="flex text-xs font-bold text-gray-400 cursor-pointer">
            </div>
            <a
              href="#contact"
              className="bg-[#007ACC] hover:bg-[#005f9e] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-[#007ACC]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};