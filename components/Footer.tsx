import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-3">
              <div className="bg-sage-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-xl">
                IV
              </div>
              <span className="font-serif text-2xl text-stone-200">Ivy Gomez</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Dedicated to restoring your skin's natural balance through holistic therapies and advanced science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-200 font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-sage-400 transition-colors">Facial Therapies</a></li>
              <li><a href="#" className="hover:text-sage-400 transition-colors">Body Treatments</a></li>
              <li><a href="#" className="hover:text-sage-400 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-sage-400 transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
             <h4 className="text-stone-200 font-serif text-lg mb-6">Stay Connected</h4>
             <div className="flex gap-4 mb-8">
               <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-sage-600 hover:text-white transition-all"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-sage-600 hover:text-white transition-all"><Facebook size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-sage-600 hover:text-white transition-all"><Twitter size={18} /></a>
             </div>
             <p className="text-xs text-stone-600">
               © {new Date().getFullYear()} Ivy Gomez Skin Specialist. All rights reserved.
             </p>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
            <div>
                Designed by $limtony
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;