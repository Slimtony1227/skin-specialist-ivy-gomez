import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Phone } from 'lucide-react';
import { NavLink, SectionId } from '../types';

const navLinks: NavLink[] = [
  { label: 'About', href: `#${SectionId.ABOUT}` },
  { label: 'Availability', href: `#${SectionId.AVAILABILITY}` },
  { label: 'Gallery', href: `#${SectionId.GALLERY}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

interface NavbarProps {
  onBookNowClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-stone-100/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-sage-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-xl">
            IV
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold leading-none text-stone-800">Ivy Gomez</span>
            <span className="text-xs uppercase tracking-widest text-stone-500">Skin Specialist</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-stone-600 hover:text-sage-600 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={onBookNowClick}
            className="bg-sage-400 hover:bg-sage-500 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
          >
            Book Now
          </button>
          
          <div className="flex items-center gap-3 border-l border-stone-300 pl-4 ml-2">
            <a href="#" className="text-stone-400 hover:text-green-600 transition-colors"><Phone size={18} /></a>
            <a href="#" className="text-stone-400 hover:text-pink-600 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-stone-400 hover:text-blue-600 transition-colors"><Facebook size={18} /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-800 p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-stone-100 border-t border-stone-200 shadow-xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-stone-700 hover:text-sage-600 font-medium py-2 border-b border-stone-100"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={onBookNowClick}
            className="bg-sage-400 text-white w-full py-3 rounded-xl mt-2 font-medium"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;