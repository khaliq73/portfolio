import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Award,
  Globe,
  Users,
  Code,
  Smartphone,
  Video,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
} from 'lucide-react';

const Home = () => {

  const stats = [
    { icon: <Award className="w-10 h-10" />, value: '50+', label: 'Projects Completed', color: '#1ED3B3' },
    { icon: <Globe className="w-10 h-10" />, value: '25+', label: 'Happy Clients', color: '#1ED3B3' },
    { icon: <Users className="w-10 h-10" />, value: '5+', label: 'Years Experience', color: '#1ED3B3' },
    { icon: <Sparkles className="w-10 h-10" />, value: '100%', label: 'Satisfaction Rate', color: '#1ED3B3' },
  ];

  const services = [
    {
      title: 'Video Editing',
      description: 'Professional video editing services with creative storytelling and modern effects',
      icon: <Video className="w-12 h-12 text-[#1ED3B3]" />,
      link: '/services',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with latest technologies and best practices',
      icon: <Code className="w-12 h-12 text-[#1ED3B3]" />,
      link: '/services',
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: <Smartphone className="w-12 h-12 text-[#1ED3B3]" />,
      link: '/services',
    },
    {
      title: 'AI Automation',
      description: 'Intelligent automation solutions powered by artificial intelligence',
      icon: <Zap className="w-12 h-12 text-[#1ED3B3]" />,
      link: '/services',
    },
  ];

  const capabilities = [
    {
      title: 'Creative Excellence',
      description: 'Transforming ideas into stunning visual experiences with attention to detail and creative flair.',
      icon: <Target className="w-12 h-12 text-[#1ED3B3]" />,
    },
    {
      title: 'Technical Expertise',
      description: 'Cutting-edge solutions using the latest technologies and industry best practices.',
      icon: <Zap className="w-12 h-12 text-[#1ED3B3]" />,
    },
    {
      title: 'Client Focused',
      description: 'Dedicated to understanding your vision and delivering results that exceed expectations.',
      icon: <TrendingUp className="w-12 h-12 text-[#1ED3B3]" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative pt-32 pb-24 min-h-screen flex items-center bg-[#0B1C2D] overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1ED3B3]/10 border border-[#1ED3B3]/30 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#1ED3B3]" />
                <span className="text-[#1ED3B3] text-sm font-semibold">Creative Professional</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Transforming Ideas Into
                <span className="block text-[#1ED3B3] mt-2">Digital Excellence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-[#94A3B8] mb-8 leading-relaxed"
              >
                I create stunning digital experiences through video editing, web development, app development, and AI automation. Let's bring your vision to life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/portfolio"
                  className="btn-luxury inline-flex items-center gap-3 px-8 py-4 bg-[#1ED3B3] text-[#0F172A] rounded-full shadow-lg hover:shadow-xl font-semibold hover:scale-105 transition-all duration-150"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-luxury inline-flex items-center gap-3 px-8 py-4 border-2 border-[#1ED3B3] text-[#1ED3B3] rounded-full hover:bg-[#1ED3B3]/10 font-semibold transition-all duration-150"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B3]/20 to-[#1ED3B3]/5 rounded-3xl blur-3xl" />
                <div className="relative h-full bg-gradient-to-br from-[#1ED3B3]/10 to-transparent rounded-3xl flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-[#0F172A]/50 backdrop-blur-sm rounded-2xl border border-[#1ED3B3]/20"
                      >
                        <div className="mb-3">{service.icon}</div>
                        <h3 className="text-white text-sm font-semibold">{service.title}</h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative py-24 bg-[#0B1C2D] overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-gradient-to-br from-[#1ED3B3]/20 to-[#1ED3B3]/10 rounded-2xl group-hover:shadow-lg transition-all duration-150 backdrop-blur-sm"
                >
                  <div className="text-[#1ED3B3]">{stat.icon}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-[#1ED3B3] text-6xl md:text-7xl font-bold mb-3"
                >
                  {stat.value}
                </motion.div>

                <div className="text-white/80 text-sm md:text-base uppercase tracking-[0.2em] font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SERVICES PREVIEW */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative py-24 bg-[#F8FAFC]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1ED3B3]/10 border border-[#1ED3B3]/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#1ED3B3]" />
              <span className="text-[#1ED3B3] text-sm font-semibold">My Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              What I Do Best
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="premium-card p-8 rounded-3xl text-center group relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#1ED3B3]/15 to-[#1ED3B3]/5 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-150">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 relative" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {service.title}
                </h3>

                <div className="w-16 h-1.5 bg-[#1ED3B3] mx-auto mb-4 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />

                <p className="text-[#94A3B8] leading-relaxed relative">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="btn-luxury inline-flex items-center gap-3 px-8 py-4 bg-[#1ED3B3] text-[#0F172A] rounded-full shadow-lg hover:shadow-xl font-semibold hover:scale-105 transition-all duration-150"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CAPABILITIES */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative py-24 bg-[#0B1C2D]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Why Work With Me
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Combining creativity, technical expertise, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-12 rounded-3xl group relative overflow-hidden bg-[#0F172A]/50 backdrop-blur-sm border border-[#1ED3B3]/20"
              >
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#1ED3B3]/20 to-[#1ED3B3]/10 rounded-3xl flex items-center justify-center mb-8 group-hover:shadow-lg transition-all duration-150">
                  {capability.icon}
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 relative" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {capability.title}
                </h3>

                <div className="w-20 h-1.5 bg-[#1ED3B3] mb-6 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />

                <p className="text-white/80 leading-relaxed text-lg relative">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative py-40 bg-[#0B1C2D] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-20 h-20 text-[#1ED3B3] mx-auto mb-10" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/80 mb-12 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Let's collaborate and bring your vision to life with innovative solutions and creative excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="btn-luxury inline-flex items-center gap-4 px-16 py-6 bg-[#1ED3B3] text-[#0F172A] rounded-full shadow-lg hover:shadow-xl text-xl font-bold group transition-all duration-150"
            >
              <span>Get Started Today</span>
              <ArrowRight size={26} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
