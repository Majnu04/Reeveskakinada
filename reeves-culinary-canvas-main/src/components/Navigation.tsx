import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const Navigation = ({ cart, showOrderPanel, setShowOrderPanel, setCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Only show the Your Order section if cart has items
  const hasCartItems = cart.length > 0;

  const handleLogout = async () => {
    await firebaseSignOut(auth);
    setCurrentUser(null);
    navigate("/");
  };

  const cld = new Cloudinary({ cloud: { cloudName: 'dkgrgqt3g' } });
  const img = cld
        .image('cld-sample-5')
        .format('auto')
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500));

  const optimizedImage = cld.image('sample');

  return (
    <>
      {/* Enhanced Dynamic Cursor (desktop only) */}
      {!isMobile && (
        <div 
          className="fixed w-6 h-6 bg-gradient-warm rounded-full pointer-events-none z-[100] transition-all duration-200 ease-out opacity-80 mix-blend-difference"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      )}
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-gradient-to-r from-[#1a1a1a] via-[#333333] to-[#1a1a1a] backdrop-blur-xl border-b border-[#444444] shadow-md' 
          : 'bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#000000] backdrop-blur-lg border-b border-[#222222]'
      }`}>
        <div className="container mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-24">
            {/* Enhanced Logo with Animated Gradient Text and Subtext */}
            <div className="flex-shrink-0 group cursor-pointer relative overflow-hidden py-2 sm:py-3">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ff7e5f] bg-clip-text text-transparent animate-pulse bg-[length:200%_100%] bg-[position:0%_50%] group-hover:bg-[position:100%_50%] transition-all duration-1000">Reeves</span>
              <p className="text-sm sm:text-base lg:text-lg text-[#feb47b] -mt-1 transition-all duration-700 group-hover:text-[#ff7e5f] group-hover:translate-x-2 relative z-10 font-medium tracking-wider">Kakinada</p>
            </div>

            {/* Simplified Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="ml-4 sm:ml-10 flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-6 py-4 text-base font-medium text-foreground transition-all duration-700 hover:text-primary group cursor-pointer rounded-2xl overflow-hidden"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Enhanced background glow */}
                    <span className="absolute inset-0 bg-gradient-warm opacity-0 rounded-2xl scale-75 transition-all duration-500 group-hover:scale-100 group-hover:opacity-10" />
                    {/* Text with magnetic effect */}
                    <span className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:font-semibold group-hover:tracking-wide">
                      {item.name}
                    </span>
                    {/* Enhanced underline */}
                    <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-gradient-warm transition-all duration-700 group-hover:w-[calc(100%-3rem)] shadow-lg" />
                    {/* Particle effects */}
                    <span className="absolute top-1/2 left-1/2 w-1 h-1 bg-accent rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[8] group-hover:bg-accent/30 -translate-x-1/2 -translate-y-1/2" />
                  </a>
                ))}
                {/* Your Order Nav Button */}
                <button
                  className={`relative px-6 py-4 text-base font-medium rounded-2xl ml-4 flex items-center gap-2 transition-all duration-700 ${hasCartItems ? 'bg-gradient-warm text-white shadow-lg hover:scale-105' : 'bg-background text-muted-foreground border border-border'}`}
                  style={{ minWidth: '120px' }}
                  onClick={() => hasCartItems && setShowOrderPanel(true)}
                >
                  <span className="font-bold">Your Order</span>
                  {hasCartItems && (
                    <span className="ml-2 bg-primary text-white rounded-full px-2 py-0.5 text-xs font-bold">{cart.reduce((sum, i) => sum + i.qty, 0)}</span>
                  )}
                </button>
                {/* Auth Button */}
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="ml-4 px-6 py-4 text-base font-medium rounded-2xl bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    className="ml-4 px-6 py-4 text-base font-medium rounded-2xl bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <button
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary p-3 sm:p-4 transition-all duration-700 hover:scale-125 hover:bg-primary/15 rounded-2xl relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="absolute inset-0 bg-gradient-warm opacity-0 rounded-2xl scale-0 group-hover:scale-100 group-hover:opacity-10 transition-all duration-500" />
                <svg 
                  className={`h-7 w-7 transition-all duration-700 relative z-10 ${
                    isOpen ? 'rotate-180 scale-125' : 'rotate-0 scale-100'
                  }`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden animate-fade-in">
              <div className="px-2 sm:px-6 pt-6 pb-8 space-y-3 bg-card/98 backdrop-blur-3xl border-t border-primary/20 rounded-b-3xl shadow-2xl mx-1 sm:mx-4">
                {/* Drag handle for mobile nav */}
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-1.5 bg-gradient-warm rounded-full opacity-60" />
                </div>
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary block px-6 py-4 min-h-[56px] text-lg font-medium transition-all duration-700 hover:bg-gradient-warm hover:bg-opacity-10 rounded-2xl hover:translate-x-6 hover:scale-105 relative overflow-hidden group"
                    onClick={() => setIsOpen(false)}
                    style={{ 
                      animationDelay: `${index * 200}ms`,
                      animation: 'fade-in 0.8s ease-out forwards'
                    }}
                  >
                    <span className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-warm transition-all duration-500 group-hover:h-10 -translate-y-1/2 rounded-r" />
                    <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">{item.name}</span>
                  </a>
                ))}
                {/* Your Order Button for Mobile Nav */}
                <button
                  className={`w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 min-h-[56px] text-lg font-bold rounded-2xl transition-all duration-700 ${hasCartItems ? 'bg-gradient-warm text-white shadow-lg hover:scale-105' : 'bg-background text-muted-foreground border border-border'}`}
                  onClick={() => {
                    setIsOpen(false);
                    if (hasCartItems) setShowOrderPanel(true);
                  }}
                  style={{ minHeight: '56px' }}
                  aria-label="View your order"
                >
                  <span>Your Order</span>
                  {hasCartItems && (
                    <span className="ml-2 bg-primary text-white rounded-full px-2 py-0.5 text-xs font-bold">{cart.reduce((sum, i) => sum + i.qty, 0)}</span>
                  )}
                </button>
                {/* Auth Button for Mobile Nav */}
                {!currentUser && (
                  <Link
                    to="/auth"
                    onClick={() => setIsOpen(false)}
                    className="w-full mt-4 px-6 py-4 text-base font-medium rounded-2xl bg-primary text-white hover:bg-primary/90 transition-all duration-300 block text-center"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Orders Panel/Drawer - visible when showOrderPanel is true */}
      {showOrderPanel && (
        <div className="fixed inset-0 z-[999] flex items-end md:items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-card border border-primary/20 rounded-2xl shadow-2xl p-6 pt-4 w-full max-w-md mx-auto relative animate-fade-in-up flex flex-col">
            {/* Drag handle for mobile order panel */}
            <div className="flex justify-center mb-2 md:hidden">
              <div className="w-12 h-1.5 bg-gradient-warm rounded-full opacity-60" />
            </div>
            {/* Modal Header with Minimize and Close buttons */}
            <div className="flex items-center justify-between mb-2">
              <button
                className="text-xl text-muted-foreground hover:text-primary transition-colors p-2"
                onClick={() => setShowOrderPanel(false)}
                aria-label="Minimize order panel"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6 6 6-6"/></svg>
              </button>
              <h3 className="text-xl font-playfair font-bold text-primary text-center flex-1">Your Order</h3>
              <button
                className="text-xl text-muted-foreground hover:text-primary transition-colors p-2"
                onClick={() => setShowOrderPanel(false)}
                aria-label="Close order panel"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-muted-foreground text-center">No items in your order.</p>
            ) : (
              <ul className="divide-y divide-border mb-6 max-h-60 overflow-y-auto">
                {cart.map((item, idx) => (
                  <li key={item.name} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{item.name}</span>
                      <span className="ml-2 text-sm text-muted-foreground">x{item.qty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">{item.price}</span>
                      <button
                        className="ml-2 text-red-500 hover:text-red-700 text-lg p-1 rounded-full transition-colors"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => {
                          // Remove or decrement item from cart
                          setCart((prev) => {
                            const updated = prev.map((ci, i) =>
                              i === idx ? { ...ci, qty: ci.qty - 1 } : ci
                            ).filter(ci => ci.qty > 0);
                            return updated;
                          });
                        }}
                      >
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/></svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-between items-center mt-2 mb-4">
              <span className="font-bold text-lg text-foreground">Total:</span>
              <span className="font-bold text-lg text-primary">
                ₹{cart.reduce((sum, i) => sum + (parseInt(i.price.replace('₹', '')) * i.qty), 0)}
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-auto pb-2">
              <Button size="lg" className="w-full bg-gradient-warm text-white font-bold text-lg rounded-full shadow-lg" onClick={() => setShowOrderPanel(false)}>
                Buy Now
              </Button>
              <Button
                variant="outline"
                className="w-full font-bold text-base rounded-full shadow border-primary/40 text-primary"
                onClick={() => setShowOrderPanel(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
