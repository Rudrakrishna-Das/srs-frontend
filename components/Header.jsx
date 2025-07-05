import { useState } from "react";
import { Menu, X, Car, Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SRS CAR
              </h1>
              <p className="text-xs text-gray-300 -mt-1">Premium Rentals</p>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Clock className="w-4 h-4" />
                <span>24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-gradient-to-b from-slate-900/95 to-blue-900/95 backdrop-blur-md border-t border-white/10">
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center space-x-2 text-gray-300 text-sm mb-3">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm mb-4">
              <Clock className="w-4 h-4" />
              <span>24/7 Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
    </nav>
  );
};

export default Header;
