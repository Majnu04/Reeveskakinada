import React from 'react';

const Story = () => {
  return (
    <section id="story" className="py-10 sm:py-20 bg-card px-2 sm:px-0">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left mb-6 md:mb-0">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Royal Restaurant Interior"
                className="w-full h-56 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-gold rounded-full opacity-20" />
          </div>

          {/* Content Side */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground mb-2 sm:mb-4">
                Our Story
              </h2>
              <div className="w-12 sm:w-20 h-1 bg-gradient-warm rounded-full mb-3 sm:mb-6" />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              In the heart of Kakinada, where the gentle waves of the Bay of Bengal whisper stories of tradition, 
              <span className="text-primary font-medium"> Reeves Restaurant</span> was born from a dream to create 
              something extraordinary.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Founded with a passion for culinary excellence, we believe that food is more than sustenance—it's 
              an art form that brings people together, creates memories, and touches the soul. Every recipe we serve 
              carries the warmth of our kitchen and the love of our chefs.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From locally sourced ingredients to time-honored cooking techniques passed down through generations, 
              we craft each dish with meticulous care and unwavering dedication to quality.
            </p>

            <div className="pt-2 sm:pt-4">
              <blockquote className="text-base sm:text-xl font-playfair text-primary italic border-l-4 border-accent pl-3 sm:pl-6">
                "Where flavors tell stories, and every meal becomes a cherished memory."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
