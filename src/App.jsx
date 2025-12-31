import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMapPin, FiStar, FiShield, FiCalendar, FiUsers, FiTrendingUp, FiCheckCircle, FiMenu, FiX } from 'react-icons/fi';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredBarbers = [
    {
      name: "Marcus Johnson",
      specialty: "Fade Specialist",
      rating: 4.9,
      reviews: 234,
      location: "Downtown, NY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "David Chen",
      specialty: "Classic Cuts",
      rating: 4.8,
      reviews: 189,
      location: "Brooklyn, NY",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      name: "Andre Williams",
      specialty: "Beard Grooming",
      rating: 5.0,
      reviews: 156,
      location: "Queens, NY",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                BarberConnect
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">Home</a>
              <a href="#find-barbers" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">Find Barbers</a>
              <a href="#become-barber" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">Become a Barber</a>
              <button className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">Login</button>
              <button className="px-5 py-2 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors">Sign Up</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-stone-200"
            >
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-sm font-medium text-stone-700">Home</a>
                <a href="#find-barbers" className="text-sm font-medium text-stone-700">Find Barbers</a>
                <a href="#become-barber" className="text-sm font-medium text-stone-700">Become a Barber</a>
                <button className="text-left text-sm font-medium text-stone-700">Login</button>
                <button className="px-5 py-2 bg-stone-900 text-white text-sm font-medium rounded-md w-full">Sign Up</button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Find Your Perfect <span className="italic">Barber</span>
              </h1>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                Connect with verified barbers and barbershops in your area. Book appointments, read authentic reviews, and get the perfect cut every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-stone-900 font-semibold rounded-md hover:bg-stone-100 transition-all transform hover:scale-105">
                  Find Barbers Near You
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-stone-900 transition-all">
                  I'm a Barber
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop" 
                  alt="Professional barber at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white" id="find-barbers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              How It Works
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Finding and booking your perfect barber is simple and secure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FiSearch, title: "Search", description: "Find barbers near you by location, specialty, or rating" },
              { icon: FiUsers, title: "View Profiles", description: "Browse verified profiles with photos, reviews, and pricing" },
              { icon: FiCalendar, title: "Book", description: "Schedule appointments at your convenience" },
              { icon: FiStar, title: "Review", description: "Leave verified reviews to help the community" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 text-white rounded-full mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-sm text-stone-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Barbers Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Featured Barbers
            </h2>
            <p className="text-stone-600 text-lg">Top-rated professionals in your area</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredBarbers.map((barber, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={barber.image} 
                    alt={barber.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900 mb-1">{barber.name}</h3>
                  <p className="text-sm text-stone-600 mb-3">{barber.specialty}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <FiStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-stone-900">{barber.rating}</span>
                      <span className="text-sm text-stone-500">({barber.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-stone-600">
                      <FiMapPin className="w-4 h-4" />
                      <span>{barber.location}</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Barbers Section */}
      <section className="py-20 bg-white" id="become-barber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Grow Your <span className="italic">Business</span>
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Join our platform and connect with customers looking for quality barber services
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: FiCalendar, title: "Flexible Schedule", description: "Work on your own terms and set your availability" },
                  { icon: FiTrendingUp, title: "Build Your Clientele", description: "Reach more customers through location-based discovery" },
                  { icon: FiShield, title: "Verified Reviews", description: "Build trust with authentic, verified customer feedback" },
                  { icon: FiMapPin, title: "Location Visibility", description: "Customers find you based on proximity and specialty" }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-stone-900" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-stone-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-8 py-4 bg-stone-900 text-white font-semibold rounded-md hover:bg-stone-800 transition-all transform hover:scale-105">
                Join as a Barber
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop" 
                alt="Barber working"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trust & Safety First
            </h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              We take verification seriously to ensure authentic reviews and reliable service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FiShield,
                title: "Verified Barbers",
                description: "All barbers undergo verification to ensure legitimate profiles and professional credentials"
              },
              {
                icon: FiCheckCircle,
                title: "Authentic Reviews",
                description: "Reviews are verified from actual bookings to prevent fake feedback and maintain trust"
              },
              {
                icon: FiUsers,
                title: "Community Standards",
                description: "Our community guidelines ensure respectful interactions and quality service standards"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-stone-900 rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-stone-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-stone-300 mb-8">
            Whether you're looking for a barber or want to grow your business, join BarberConnect today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-stone-900 font-semibold rounded-md hover:bg-stone-100 transition-all transform hover:scale-105">
              Find a Barber
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-stone-900 transition-all">
              Become a Barber
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                BarberConnect
              </h3>
              <p className="text-sm">
                Connecting customers with verified barbers for quality grooming experiences.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">For Customers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Find Barbers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">For Barbers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Join Platform</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            <p>&copy; 2024 BarberConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
