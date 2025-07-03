import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Gourmet Burger Deluxe',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Fresh Pasta Special',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Grilled Steak Perfection',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Chef\'s Signature Salad',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Artisan Pizza Creation',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Decadent Dessert Platter',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Elegant Dining Atmosphere',
      category: 'Ambiance'
    },
    {
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Fresh Seafood Special',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Gourmet Appetizers',
      category: 'Food'
    }
  ];

  return (
    <section id="gallery" className="py-10 sm:py-20 bg-card px-2 sm:px-0">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground mb-2 sm:mb-4">
            Culinary Gallery
          </h2>
          <div className="w-12 sm:w-20 h-1 bg-gradient-warm rounded-full mx-auto mb-3 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-xs sm:max-w-2xl mx-auto">
            A visual feast showcasing our culinary artistry and the dining experience at Reeves
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                  <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium rounded-full mb-1 sm:mb-2 ${
                    image.category === 'Food' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    {image.category}
                  </span>
                  <h3 className="text-white text-base sm:text-lg font-playfair font-semibold">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-muted-foreground mb-2 sm:mb-4">Follow us for more delicious moments</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 text-base sm:text-lg"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @reeveskakinada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
