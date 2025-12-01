import React from 'react';
import { Clock, MapPin, CalendarCheck, Phone } from 'lucide-react';
import { ScheduleItem, SectionId } from '../types';

const schedule: ScheduleItem[] = [
  { day: 'Monday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Thursday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Friday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const Availability: React.FC = () => {
  return (
    <section id={SectionId.AVAILABILITY} className="py-24 bg-sage-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4">Availability & Location</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            We operate by appointment to ensure every client receives our full attention. Walk-ins are accommodated based on daily availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Schedule Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-sage-100 p-3 rounded-full text-sage-600">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-serif text-stone-800">Opening Hours</h3>
              </div>

              <div className="space-y-4">
                {schedule.map((item) => (
                  <div key={item.day} className="flex justify-between items-center border-b border-stone-100 pb-2 last:border-0">
                    <span className={`font-medium ${item.hours === 'Closed' ? 'text-stone-400' : 'text-stone-700'}`}>{item.day}</span>
                    <span className={`text-sm ${item.hours === 'Closed' ? 'text-stone-400 italic' : 'text-sage-600 font-semibold'}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-100">
               <div className="flex items-center justify-between">
                 <span className="text-stone-500 text-sm">Need a special time?</span>
                 <a href="#" className="text-sage-600 font-medium hover:underline text-sm">Request extended hours</a>
               </div>
            </div>
          </div>

          {/* Location & Contact Card */}
          <div className="flex flex-col gap-8">
            <div className="bg-sage-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin size={24} />
                    </div>
                    <h3 className="text-2xl font-serif">Visit Us</h3>
                 </div>
                 
                 <address className="not-italic text-sage-100 space-y-2 mb-8 text-lg">
                   <p>42 Ivy Lane</p>
                   <p>Greenwich Village, NY 10014</p>
                   <p className="text-sm opacity-80 mt-2">• Free parking available at rear</p>
                 </address>

                 <div className="flex items-center gap-4">
                    <button className="bg-white text-sage-700 px-6 py-2 rounded-xl font-semibold hover:bg-sage-50 transition-colors">
                      Get Directions
                    </button>
                 </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex-1 flex flex-col justify-center items-center text-center">
               <div className="bg-stone-100 p-4 rounded-full text-stone-600 mb-4">
                 <Phone size={32} />
               </div>
               <h3 className="text-xl font-serif text-stone-800 mb-2">Call to Book</h3>
               <p className="text-3xl font-bold text-sage-600 mb-2 font-serif">+1 (555) 123-4567</p>
               <p className="text-stone-400 text-sm">Lines open daily 9am — 8pm</p>
               <button className="mt-6 flex items-center gap-2 text-stone-600 hover:text-sage-600 transition-colors">
                 <CalendarCheck size={18} /> Book Online Instead
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Availability;