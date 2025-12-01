import React from 'react';
import { ArrowRight, Download, Leaf } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  onReserveClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-stone-50">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-sage-600 font-medium tracking-wide uppercase text-xs">
              <Leaf size={14} />
              <span>Holistic Skin Therapy</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif text-stone-800 leading-[1.1]">
              Your skin talks. <br />
              <span className="italic text-sage-500">Let's start listening.</span>
            </h1>
            
            <p className="text-stone-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Unlock your natural glow with our advanced facial therapies. 
              Personalized skincare analysis and treatments designed for radiant, healthy skin.
              Experience a quiet atmosphere where expert hands meet calming spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={onReserveClick}
                className="bg-sage-400 hover:bg-sage-500 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 font-medium"
              >
                Reserve a Session <ArrowRight size={18} />
              </button>
              
              <a 
                href="/SkinSpecialistFlyer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-stone-300 hover:border-sage-400 hover:text-sage-600 text-stone-600 px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                <Download size={18} /> Service Menu (PDF)
              </a>
            </div>

            {/* Quick Status */}
            <div className="bg-white/60 backdrop-blur-sm border border-stone-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto lg:mx-0 mt-6">
               <div className="flex -space-x-3">
                 <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/64/100/100" alt="Client" />
                 <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/65/100/100" alt="Client" />
                 <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/1005/100/100" alt="Client" />
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-sage-100 flex items-center justify-center text-xs font-bold text-sage-700">+2k</div>
               </div>
               <div className="text-sm text-stone-600">
                 <span className="font-bold text-stone-800">Walk-ins welcome</span><br />
                 Join our community of glowing faces.
               </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative group">
             {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-sage-300 rounded-[2.5rem] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            {/* Main Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                alt="Facial Treatment" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Caption */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/50">
                <p className="text-center font-serif text-stone-800 italic">"Signature herbal compresses & hot stone therapy"</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;