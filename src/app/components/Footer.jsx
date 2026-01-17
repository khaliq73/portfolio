import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1ED3B3] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1ED3B3] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div>
            <Logo variant="dark" className="mb-8" />
            <p
              className="text-[#94A3B8] mb-8 leading-relaxed"
            >
              Creating stunning digital experiences through video editing, web development, app development, and AI automation. Your trusted partner for innovative solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#1ED3B3]/10 hover:bg-[#1ED3B3] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Facebook size={20} className="group-hover:text-[#0F172A] text-[#1ED3B3] group-hover:scale-110 transition-all" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#1ED3B3]/10 hover:bg-[#1ED3B3] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram size={20} className="group-hover:text-[#0F172A] text-[#1ED3B3] group-hover:scale-110 transition-all" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#1ED3B3]/10 hover:bg-[#1ED3B3] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin size={20} className="group-hover:text-[#0F172A] text-[#1ED3B3] group-hover:scale-110 transition-all" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#1ED3B3]/10 hover:bg-[#1ED3B3] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Twitter size={20} className="group-hover:text-[#0F172A] text-[#1ED3B3] group-hover:scale-110 transition-all" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#1ED3B3] mb-8 tracking-wider font-bold text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-[#94A3B8] hover:text-[#1ED3B3] hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1ED3B3] mb-8 tracking-wider font-bold text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              My Services
            </h4>
            <ul className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              {[
                'Video Editing',
                'Web Development',
                'App Development',
                'AI Automation',
                'Consultation',
              ].map((item, index) => (
                <li key={index} className="text-[#94A3B8] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1ED3B3]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#1ED3B3] mb-8 tracking-wider font-bold text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Get In Touch
            </h4>
            <ul className="space-y-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#1ED3B3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1ED3B3]/20 transition-all">
                  <MapPin size={20} className="text-[#1ED3B3]" />
                </div>
                <span className="text-[#94A3B8] leading-relaxed">
                  Creative Studio, Digital City
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#1ED3B3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1ED3B3]/20 transition-all">
                  <Phone size={20} className="text-[#1ED3B3]" />
                </div>
                <span className="text-[#94A3B8]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#1ED3B3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1ED3B3]/20 transition-all">
                  <Mail size={20} className="text-[#1ED3B3]" />
                </div>
                <span className="text-[#94A3B8]">hello@portfolio.com</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-[#1ED3B3]/10 rounded-lg border border-[#1ED3B3]/20">
              <p className="text-[#1ED3B3] font-semibold mb-1">Business Hours</p>
              <p className="text-[#94A3B8] text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-[#94A3B8] text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1ED3B3]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94A3B8] text-sm text-center md:text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
              © {new Date().getFullYear()} Portfolio Creative. All rights reserved. | Crafted with Precision, Delivered with Excellence
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-luxury w-12 h-12 rounded-full bg-[#1ED3B3] flex items-center justify-center hover:bg-[#1ABFA3] transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-[#0F172A]" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
