import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Menu = ({ cart, setCart, showOrderPanel, setShowOrderPanel }) => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'seafood', name: 'Seafood Specials' },
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Spiced Prawn Delight',
        description: 'Fresh prawns marinated in coastal spices, grilled to perfection with aromatic herbs',
        price: '₹450',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Coastal Fish Tikka',
        description: 'Tender fish pieces with traditional marinades and fresh coastal spices',
        price: '₹380',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Crispy Calamari Rings',
        description: 'Golden fried squid rings served with spicy coastal dipping sauce',
        price: '₹320',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Andhra Chilli Prawns',
        description: 'Spicy prawns tossed in authentic Andhra spices and curry leaves',
        price: '₹480',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Kakinada Kodi Vepudu',
        description: 'Traditional dry chicken fry with local spices and onions',
        price: '₹420',
        image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Nellore Chepala Pulusu Appetizer',
        description: 'Fish curry appetizer portion with tangy tamarind and spices',
        price: '₹350',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
    ],
    mains: [
      {
        name: 'Kakinada Special Biryani',
        description: 'Aromatic coastal biryani with fresh seafood and traditional spices',
        price: '₹650',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Andhra Fish Curry',
        description: 'Traditional fish curry with coconut, tamarind and coastal spices',
        price: '₹520',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Hyderabadi Mutton Biryani',
        description: 'Slow-cooked mutton biryani with fragrant basmati and saffron',
        price: '₹750',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Gongura Mutton',
        description: 'Tangy Andhra style mutton curry with sorrel leaves',
        price: '₹680',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Rayalaseema Ragi Sankati',
        description: 'Traditional finger millet balls served with spicy mutton curry',
        price: '₹480',
        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Pesarattu with Upma',
        description: 'Green gram dosa stuffed with spiced semolina upma',
        price: '₹280',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Ulavacharu',
        description: 'Traditional horsegram soup with rice and ghee',
        price: '₹320',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Kodi Koora with Roti',
        description: 'Spicy chicken curry served with fresh wheat rotis',
        price: '₹450',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
    ],
    seafood: [
      {
        name: 'Apollo Fish',
        description: 'Crispy fried fish pieces tossed in spicy yogurt sauce',
        price: '₹580',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Koliwada Prawns',
        description: 'Mumbai street style batter fried prawns with coastal twist',
        price: '₹620',
        image: 'https://images.unsplash.com/photo-1625938145312-c8f98c7d7ad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Chepala Pulusu',
        description: 'Traditional Andhra fish stew with tamarind and vegetables',
        price: '₹550',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Royyala Iguru',
        description: 'Dry prawn curry with onions and traditional spices',
        price: '₹680',
        image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Kakinada Kaja Fish Fry',
        description: 'Local pomfret fish marinated and deep fried to perfection',
        price: '₹650',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
    ],
    desserts: [
      {
        name: 'Ariselu',
        description: 'Traditional Andhra sweet made with rice flour and jaggery',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Pootharekulu',
        description: 'Paper-thin sweet layers filled with ghee and sugar',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Bobbatlu (Puran Poli)',
        description: 'Sweet flatbread stuffed with lentil and jaggery filling',
        price: '₹160',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Kaja',
        description: 'Layered sweet pastry deep fried and soaked in sugar syrup',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Boorelu',
        description: 'Sweet dumplings made with black gram and coconut',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Traditional Payasam',
        description: 'Rich creamy dessert made with milk, jaggery, and aromatic cardamom',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
    ],
    beverages: [
      {
        name: 'Panakam',
        description: 'Traditional jaggery drink with cardamom and black pepper',
        price: '₹120',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Nannari Sharbat',
        description: 'Refreshing drink made from Indian sarsaparilla roots',
        price: '₹130',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Majjiga (Buttermilk)',
        description: 'Traditional spiced buttermilk with curry leaves and ginger',
        price: '₹80',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Sugarcane Juice',
        description: 'Fresh sugarcane juice with lime and mint',
        price: '₹100',
        image: 'https://images.unsplash.com/photo-1549834125-82d3c48159dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Tender Coconut Water',
        description: 'Fresh coconut water straight from the shell',
        price: '₹90',
        image: 'https://images.unsplash.com/photo-1593073862407-a3ce22748763?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Masala Chai',
        description: 'Traditional spiced tea with cardamom, ginger and cloves',
        price: '₹60',
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
    ],
  };

  // Add to cart handler
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      if (exists) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // Remove from cart handler
  const handleRemoveFromCart = (name) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  return (
    <section id="menu" className="py-12 sm:py-20 bg-background relative overflow-hidden px-2 sm:px-0">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary rounded-full animate-float" />
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4 sm:mb-6 relative">
            Our Menu
            <span className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-xl sm:text-2xl">🍽️</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-warm rounded-full mx-auto mb-4 sm:mb-8 animate-pulse" />
          <p className="text-base sm:text-xl text-muted-foreground max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of authentic Andhra and coastal dishes, each crafted with passion and the finest local ingredients
          </p>
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-16">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg transition-all duration-500 hover:scale-110 cursor-pointer relative overflow-hidden group ${
                activeCategory === category.id
                  ? 'bg-gradient-warm text-white shadow-2xl scale-105'
                  : 'border-2 border-border hover:border-primary hover:bg-primary/10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 font-semibold">{category.name}</span>
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              )}
            </Button>
          ))}
        </div>

        {/* Enhanced Menu Items with magnetic effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 sm:hover:-translate-y-6 hover:rotate-1 animate-fade-in group cursor-pointer relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Enhanced image container */}
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-1000"
                />
                {/* Dynamic overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                {/* Floating price tag */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-warm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-base sm:text-lg font-bold transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 shadow-lg">
                  {item.price}
                </div>
                {/* Animated sparkles */}
                <div className="absolute top-3 sm:top-6 left-3 sm:left-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                <div className="absolute bottom-3 sm:bottom-6 right-4 sm:right-8 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-foreground mb-2 sm:mb-4 group-hover:text-primary transition-colors duration-500 group-hover:scale-105 transform origin-left">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>
                <Button
                  size="lg"
                  className="w-full bg-gradient-gold text-background hover:opacity-90 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg relative overflow-hidden group/btn"
                  onClick={() => handleAddToCart(item)}
                >
                  <span className="relative z-10">Add to Cart</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                </Button>
              </div>
              {/* Magnetic border effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-10 sm:mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10 font-bold">View Complete Menu</span>
            <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>

        {/* Orders/Cart Section - styled to match theme, placed at the bottom */}
        <div className="max-w-full sm:max-w-2xl mx-auto mt-10 sm:mt-20 bg-card rounded-xl sm:rounded-2xl shadow-2xl border border-primary/20 p-4 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4 sm:mb-6 text-center">Your Order</h3>
          {cart.length === 0 ? (
            <p className="text-muted-foreground text-center">Your cart is empty.</p>
          ) : (
            <ul className="divide-y divide-border mb-4 sm:mb-6">
              {cart.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-4 gap-3 sm:gap-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-xl border border-border" />
                    <div>
                      <span className="font-semibold text-base sm:text-lg text-foreground">{item.name}</span>
                      <span className="ml-2 text-xs sm:text-sm text-muted-foreground">x{item.qty}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base sm:text-lg text-primary">{item.price}</span>
                    <Button size="sm" variant="outline" onClick={() => handleRemoveFromCart(item.name)}>
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between items-center mt-2 sm:mt-4 mb-4 sm:mb-6">
            <span className="font-bold text-lg sm:text-xl text-foreground">Total:</span>
            <span className="font-bold text-lg sm:text-xl text-primary">
              ₹{cart.reduce((sum, i) => sum + (parseInt(i.price.replace('₹', '')) * i.qty), 0)}
            </span>
          </div>
          <Button size="lg" className="w-full bg-gradient-warm text-white font-bold text-lg sm:text-xl rounded-full shadow-lg" disabled={cart.length === 0}>
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
