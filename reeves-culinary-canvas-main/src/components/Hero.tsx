import React from 'react';
import { Button } from '@/components/ui/button';

// Smooth scroll handler
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-0">
      {/* Royal background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        {/* Royal gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d1a05]/80 via-[#4b2e09]/70 to-[#1a0e03]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 via-transparent to-transparent" />
      </div>

      {/* Royal content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-2 sm:px-6 py-8 sm:py-0 flex flex-col items-center justify-center w-full">
        <p className="text-accent font-playfair italic text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 opacity-90">
          Welcome to
        </p>
        {/* Royal Reeves branding */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold mb-4 sm:mb-6 leading-tight sm:leading-none bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#fffbe6] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.25)]">
          Reeves
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-2 sm:mb-3 font-light tracking-wide">
          Kakinada's Hidden Culinary Gem
        </p>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#fffbe6] mx-auto mb-6 sm:mb-8 rounded-full shadow-lg" />
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Where every dish tells a story, and every meal becomes a cherished memory.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#fffbe6] text-gray-900 font-bold px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-all duration-300 border-2 border-yellow-700"
            onClick={() => scrollToSection('contact')}
          >
            Reserve Your Table
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg"
            onClick={() => scrollToSection('menu')}
          >
            View Menu
          </Button>
        </div>
        <p className="text-accent font-playfair text-base sm:text-xl md:text-2xl italic opacity-90">
          "Crafted with Love. Served with Elegance."
        </p>
      </div>
    </section>
  );
};

export default Hero;
