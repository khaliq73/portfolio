import { useState } from 'react';
import { motion } from 'motion/react';
import { Video, Code, Smartphone, Zap, ExternalLink, Sparkles, Play, Folder, Film, TrendingUp, Award, Clock } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  // Video Editing Portfolio - Main Focus
  const videoPortfolios = [
    {
      id: 'video-portfolio-1',
      title: 'Video Editing Portfolio - Reels & Shorts',
      description: 'Professional collection of reels, shorts, and promotional videos. Showcasing creative storytelling, modern editing techniques, and engaging content optimized for social media platforms.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      technologies: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Social Media Optimization'],
      link: 'https://drive.google.com/drive/folders/142xrrycYzIrN5RwlVonayR0e60wW5u9E',
      type: 'folder',
      stats: { videos: '50+', views: '100K+', clients: '25+' },
    },
    {
      id: 'video-portfolio-2',
      title: 'Complete Video Editing Collection',
      description: 'Comprehensive portfolio including animations, designs, events coverage, reels, TVC ads, and full-length videos. Professional quality across all formats and genres.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Graphics', '3D Animation'],
      link: 'https://drive.google.com/drive/folders/1L-phAP9ka9NaYamCuTYRbpaCN6DPDuJB?usp=sharing',
      type: 'folder',
      stats: { videos: '200+', categories: '6+', clients: '50+' },
    },
  ];

  // Web Development Projects
  const webProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce website with shopping cart, secure payment integration, admin dashboard, and inventory management. Fully responsive with SEO optimization.',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Responsive portfolio website with smooth animations and modern design. Built with React and Framer Motion for stunning visual effects.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
    },
    {
      id: 3,
      title: 'Business Dashboard Web App',
      category: 'web',
      description: 'Comprehensive business dashboard with analytics, reports, and data visualization. Real-time updates and interactive charts for better decision making.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'Chart.js', 'Node.js', 'PostgreSQL', 'D3.js'],
      link: '#',
    },
  ];

  // AI Automation Projects
  const aiProjects = [
    {
      id: 4,
      title: 'AI Chatbot System',
      category: 'ai',
      description: 'Intelligent chatbot system powered by AI for customer support automation and engagement. Handles customer queries 24/7 with natural language processing and machine learning.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      technologies: ['Python', 'OpenAI', 'TensorFlow', 'Flask', 'NLP'],
      link: '#',
    },
    {
      id: 5,
      title: 'Content Automation System',
      category: 'ai',
      description: 'AI-powered content automation system that generates, schedules, and publishes content across multiple platforms. Includes analytics and performance tracking.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      technologies: ['Python', 'GPT API', 'Selenium', 'REST APIs', 'MongoDB'],
      link: '#',
    },
    {
      id: 6,
      title: 'Automated Email System',
      category: 'ai',
      description: 'AI-powered email automation system for marketing campaigns and lead nurturing. Personalized content delivery with advanced analytics.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      technologies: ['Python', 'Machine Learning', 'SMTP', 'API Integration'],
      link: '#',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'web', label: 'Web Development', icon: <Code className="w-5 h-5" /> },
    { id: 'ai', label: 'AI Automation', icon: <Zap className="w-5 h-5" /> },
  ];

  // Combine all projects for filtering
  const allProjects = [...webProjects, ...aiProjects];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web': return <Code className="w-6 h-6" />;
      case 'ai': return <Zap className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 bg-gradient-to-br from-[#0B1C2D] via-[#0F172A] to-[#0B1C2D] overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#1ED3B3]/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#1ED3B3]/5 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1ED3B3]/10 border border-[#1ED3B3]/30 rounded-full mb-6"
            >
              <Film className="w-4 h-4 text-[#1ED3B3]" />
              <span className="text-[#1ED3B3] text-sm font-semibold">Professional Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Creative Excellence
              <span className="block text-[#1ED3B3] mt-2">Video Editing & More</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed"
            >
              Explore my professional portfolio showcasing video editing expertise, web development projects, and AI automation solutions.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Editing Portfolio Section - Main Focus */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-[#F8FAFC]"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1ED3B3]/10 border border-[#1ED3B3]/30 rounded-full mb-6"
            >
              <Video className="w-4 h-4 text-[#1ED3B3]" />
              <span className="text-[#1ED3B3] text-sm font-semibold">Main Focus</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Video Editing Portfolio
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Professional video editing work showcasing creativity, technical expertise, and innovative storytelling. 
              Click below to view our complete collection on Google Drive.
            </p>
          </motion.div>

          {/* Video Portfolio Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {videoPortfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1ED3B3]/20">
                  {portfolio.image && (
                    <motion.img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
                  
                  {/* Folder Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.7 }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      className="relative"
                    >
                      <Folder className="w-32 h-32 text-[#1ED3B3] opacity-60" />
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Play className="w-16 h-16 text-[#1ED3B3] opacity-80" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-[#1ED3B3] text-[#0F172A] rounded-full text-sm font-bold shadow-xl">
                    📁 Google Drive Portfolio
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    {Object.entries(portfolio.stats).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-3 py-1.5 bg-[#1ED3B3]/20 backdrop-blur-sm rounded-lg border border-[#1ED3B3]/30"
                      >
                        <div className="text-[#1ED3B3] font-bold text-sm">{value}</div>
                        <div className="text-white/70 text-xs capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#0F172A]/90 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-20 h-20 bg-[#1ED3B3] rounded-full flex items-center justify-center"
                      >
                        <Play className="w-10 h-10 text-[#0F172A]" />
                      </motion.div>
                      <span className="text-white font-bold text-lg">View Portfolio</span>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {portfolio.title}
                  </h3>
                  <p className="text-[#94A3B8] mb-6 leading-relaxed">
                    {portfolio.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {portfolio.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        className="px-3 py-1.5 bg-[#1ED3B3]/10 text-[#1ED3B3] rounded-full text-xs font-semibold border border-[#1ED3B3]/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={portfolio.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-[#1ED3B3] text-[#0F172A] rounded-full font-bold hover:bg-[#1ABFA3] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Folder className="w-5 h-5" />
                    <span>View Video Portfolio on Google Drive</span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-[#1ED3B3]/10 to-[#1ED3B3]/5 rounded-3xl p-8 border border-[#1ED3B3]/20"
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Need Professional Video Editing Services?
            </h3>
            <p className="text-[#94A3B8] mb-6 max-w-2xl mx-auto">
              Transform your raw footage into compelling visual stories. From reels to full-length videos, I deliver professional quality that captivates your audience.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1ED3B3] text-[#0F172A] rounded-full font-bold hover:bg-[#1ABFA3] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Other Projects Section - Web Development & AI Automation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1ED3B3]/10 border border-[#1ED3B3]/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#1ED3B3]" />
              <span className="text-[#1ED3B3] text-sm font-semibold">Additional Services</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Web Development & AI Automation
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Explore my projects in web development and AI automation solutions.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-[#1ED3B3] text-[#0F172A] shadow-lg'
                    : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#1ED3B3]/10 border border-[#94A3B8]/20'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {category.icon}
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1ED3B3]/20">
                  {project.image && (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#1ED3B3]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1ED3B3] border-2 border-[#1ED3B3]/30">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        className="px-3 py-1 bg-[#1ED3B3]/10 text-[#1ED3B3] rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-[#1ED3B3] text-[#0F172A] rounded-full font-bold hover:bg-[#1ABFA3] transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 bg-gradient-to-br from-[#0B1C2D] via-[#0F172A] to-[#0B1C2D] overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-10 left-20 w-64 h-64 bg-[#1ED3B3]/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#94A3B8] mb-8 leading-relaxed"
          >
            Let's discuss how I can help bring your vision to life with creative excellence and technical expertise.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1ED3B3] text-[#0F172A] rounded-full shadow-lg hover:shadow-xl font-semibold transition-all duration-300"
          >
            Get In Touch
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
