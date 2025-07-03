import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya',
      location: 'Kakinada',
      rating: 5,
      text: 'Absolutely divine! The flavors transported me back to my grandmother\'s kitchen. Reeves has mastered the art of comfort food with a modern twist.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Visakhapatnam',
      rating: 5,
      text: 'From the moment we walked in, we felt like family. The ambiance is warm, the service impeccable, and the food? Simply extraordinary!',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Anitha Reddy',
      location: 'Hyderabad',
      rating: 5,
      text: 'I\'ve dined at many restaurants, but Reeves offers something special - a perfect blend of tradition and innovation that touches your soul.',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-10 sm:py-20 bg-background px-2 sm:px-0">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground mb-2 sm:mb-4">
            What Our Guests Say
          </h2>
          <div className="w-12 sm:w-20 h-1 bg-gradient-warm rounded-full mx-auto mb-3 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-xs sm:max-w-2xl mx-auto">
            Every review tells a story of memorable moments and exceptional experiences
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-full sm:max-w-4xl mx-auto">
          <div className="bg-card rounded-xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl animate-fade-in">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-accent fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-base sm:text-xl md:text-2xl font-playfair italic text-foreground mb-4 sm:mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-accent"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-base sm:text-lg text-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-border hover:border-primary"
            >
              ←
            </Button>
            {/* Dots */}
            <div className="flex gap-1 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-border hover:border-primary"
            >
              →
            </Button>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-muted-foreground mb-2 sm:mb-4">See more reviews on</p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full max-w-xs mx-auto rounded-2xl shadow-md">
            Google Reviews
          </Button>
        </div>
        {/* Developed by credit */}
        <div className="text-center mt-6 sm:mt-10">
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
