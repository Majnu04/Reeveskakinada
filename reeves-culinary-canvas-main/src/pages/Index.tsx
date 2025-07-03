import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = ({ cart, setCart, showOrderPanel, setShowOrderPanel }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        cart={cart}
        setCart={setCart}
        showOrderPanel={showOrderPanel}
        setShowOrderPanel={setShowOrderPanel}
      />
      <Hero />
      <Story />
      <Menu cart={cart} setCart={setCart} showOrderPanel={showOrderPanel} setShowOrderPanel={setShowOrderPanel} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
