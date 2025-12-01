import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Availability from './components/Availability';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { PopupModal } from 'react-calendly';

function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="font-sans text-stone-800 antialiased selection:bg-sage-200 selection:text-sage-900">
      <PopupModal
        url="https://calendly.com/anthonyaguilarrraem/face-spa"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root')!}
      />
      <Navbar onBookNowClick={() => setIsCalendlyOpen(true)} />
      <main>
        <Hero onReserveClick={() => setIsCalendlyOpen(true)} />
        <Availability />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;