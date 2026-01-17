import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Video, Code, Smartphone, Zap, ArrowRight, Check, Sparkles, Target, Clock, Award, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-12 h-12 text-[#1ED3B3]" />,
      title: 'Video Editing',
      description: 'Professional video editing services with creative storytelling and modern effects. Transform your raw footage into compelling visual stories that captivate your audience.',
      features: [
        'Professional color grading & correction',
        'Motion graphics & animations',
        'Sound design & audio mixing',
        'Multi-format delivery (4K, HD, SD)',
        '4K & HD video editing',
        'Social media optimization (YouTube, Instagram, TikTok)',
        'Video transitions & effects',
        'Subtitle & caption creation',
      ],
      price: 'Starting at $500',
      category: 'video',
    },
    {
      icon: <Code className="w-12 h-12 text-[#1ED3B3]" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with latest technologies and best practices. Create stunning web experiences that drive engagement and conversions.',
      features: [
        'Fully responsive design (mobile, tablet, desktop)',
        'SEO optimization for better rankings',
        'Fast loading times & performance',
        'Mobile-first responsive approach',
        'E-commerce solutions & shopping carts',
        'CMS integration (WordPress, Contentful)',
        'Custom web applications',
        'Website maintenance & updates',
      ],
      price: 'Starting at $1000',
      category: 'web',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#1ED3B3]" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Build powerful apps that users love with seamless performance.',
      features: [
        'iOS & Android native apps',
        'Cross-platform solutions (React Native, Flutter)',
        'Native performance optimization',
        'App store optimization (ASO)',
        'Push notifications & alerts',
        'Cloud integration & APIs',
        'User authentication systems',
        'In-app purchases & payments',
      ],
      price: 'Starting at $2000',
      category: 'app',
    },
    {
      icon: <Zap className="w-12 h-12 text-[#1ED3B3]" />,
      title: 'AI Automation',
      description: 'Intelligent automation solutions powered by artificial intelligence. Streamline your business processes with smart automation.',
      features: [
        'AI Chatbot development',
        'Business process automation',
        'Data analysis & insights',
        'Machine learning models',
        'API integrations',
        'Custom AI solutions',
        'Workflow automation',
        'Smart data processing',
      ],
      price: 'Starting at $1500',
      category: 'ai',
    },
  ];

  const process = [
    {
      icon: <Target className="w-8 h-8 text-[#1ED3B3]" />,
      title: 'Discovery',
      description: 'Understanding your needs, goals, and vision for the project.',
    },
    {
      icon: <Code className="w-8 h-8 text-[#1ED3B3]" />,
      title: 'Planning',
      description: 'Creating a detailed plan and timeline for the project execution.',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#1ED3B3]" />,
      title: 'Development',
      description: 'Building your solution with attention to detail and quality.',
    },
    {
      icon: <Award className="w-8 h-8 text-[#1ED3B3]" />,
      title: 'Delivery',
      description: 'Final testing, refinement, and delivery of the completed project.',
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-10 h-10 text-[#1ED3B3]" />,
      title: 'Client-Focused',
      description: 'Your success is my priority. I work closely with you to understand your vision.',
    },
    {
      icon: <Clock className="w-10 h-10 text-[#1ED3B3]" />,
      title: 'Timely Delivery',
      description: 'I respect deadlines and deliver projects on time without compromising quality.',
    },
    {
      icon: <Award className="w-10 h-10 text-[#1ED3B3]" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks ensure your project exceeds expectations.',
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#0B1C2D] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#1ED3B3] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1ED3B3]/10 border border-[#1ED3B3]/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#1ED3B3]" />
              <span className="text-[#1ED3B3] text-sm font-semibold">My Services</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
              Professional Services
              <span className="block text-[#1ED3B3] mt-2">Creative Solutions</span>
            </h1>

            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="premium-card p-10 rounded-3xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#1ED3B3]/15 to-[#1ED3B3]/5 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-150"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {service.title}
                  </h3>

                  <div className="w-20 h-1.5 bg-[#1ED3B3] mb-6 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />

                  <p className="text-[#94A3B8] mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#1ED3B3] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0F172A]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6 border-t border-[#94A3B8]/20">
                    <span className="text-[#1ED3B3] font-bold text-xl">{service.price}</span>
                    <Link
                      to="/contact"
                      className="btn-luxury inline-flex items-center gap-2 px-6 py-3 bg-[#1ED3B3] text-[#0F172A] rounded-full hover:bg-[#1ABFA3] transition-all duration-300 font-semibold hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 bg-[#0B1C2D]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              My Process
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="text-center relative"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#1ED3B3]/20 to-[#1ED3B3]/10 rounded-3xl shadow-lg">
                  {step.icon}
                </div>
                <div className="text-[#1ED3B3] text-4xl font-bold mb-3">0{index + 1}</div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Why Choose Me
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              The advantages of working with a dedicated professional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="premium-card p-10 rounded-3xl text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#1ED3B3]/15 to-[#1ED3B3]/5 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-150"
                >
                  {benefit.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 relative" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {benefit.title}
                </h3>

                <div className="w-16 h-1.5 bg-[#1ED3B3] mx-auto mb-4 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />

                <p className="text-[#94A3B8] leading-relaxed relative">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0B1C2D] overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#1ED3B3] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">
            Let's discuss your project and bring your vision to life with creative excellence.
          </p>
          <Link
            to="/contact"
            className="btn-luxury inline-flex items-center gap-3 px-8 py-4 bg-[#1ED3B3] text-[#0F172A] rounded-full shadow-lg hover:shadow-xl font-semibold hover:scale-105 transition-all"
          >
            Contact Me Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
