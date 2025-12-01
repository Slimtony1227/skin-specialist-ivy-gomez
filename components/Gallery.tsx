import React from 'react';
import { GalleryImage, SectionId } from '../types';
import { Sparkles } from 'lucide-react';

// Using Unsplash source URLs for better visual relevance than generic placeholder services
const images: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop', alt: 'Facial massage', title: 'Deep Tissue Facial' },
  { id: 2, src: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=2069&auto=format&fit=crop', alt: 'Products', title: 'Organic Products' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop', alt: 'Spa room', title: 'Serenity Room' },
  { id: 4, src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop', alt: 'Mask application', title: 'Clay Mask Therapy' },
];

const Gallery: React.FC = () => {
  return (
    <section id={SectionId.GALLERY} className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sage-500 mb-3 font-medium uppercase tracking-wider text-xs">
              <Sparkles size={14} />
              <span>Visual Journey</span>
            </div>
            <h2 className="text-4xl font-serif text-stone-800">Moments of Calm</h2>
          </div>
          <button className="text-stone-500 hover:text-sage-600 transition-colors underline decoration-1 underline-offset-4">
            Follow on Instagram
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${index === 0 || index === 3 ? 'md:col-span-2' : ''} h-80`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium text-stone-800 shadow-lg">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-stone-400 text-sm italic">
                "Beauty is how you feel inside, and it reflects in your eyes." — Sophia Loren
            </p>
        </div>

      </div>
    </section>
  );
};

export default Gallery;