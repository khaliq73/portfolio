import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled
          ? 'bg-[#F8FAFC]/95 backdrop-blur-lg shadow-lg py-3'
          : 'bg-[#F8FAFC] py-4'
      } border-b border-[#94A3B8]/20`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="transition-transform hover:scale-105 duration-300">
            <Logo variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative transition-colors duration-300 font-medium group ${
                  isActive(link.href)
                    ? 'text-[#1ED3B3]'
                    : 'text-[#0F172A] hover:text-[#1ED3B3]'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#1ED3B3] transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-luxury px-8 py-3 bg-[#1ED3B3] text-[#0F172A] rounded-full hover:bg-[#1ABFA3] transition-all duration-150 shadow-md hover:shadow-lg font-semibold hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[#1ED3B3]/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X size={28} color="#0F172A" />
            ) : (
              <Menu size={28} color="#0F172A" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-6 border-t border-[#94A3B8]/20 pt-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-4 transition-all duration-300 font-medium border-b border-[#94A3B8]/10 ${
                  isActive(link.href)
                    ? 'text-[#1ED3B3] pl-4'
                    : 'text-[#0F172A] hover:text-[#1ED3B3] hover:pl-4'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-luxury block mt-6 px-8 py-4 bg-[#1ED3B3] text-[#0F172A] rounded-full text-center hover:bg-[#1ABFA3] transition-all duration-150 shadow-md font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
