import { motion } from 'motion/react';
import { Award, Target, Heart, Zap, Code, Video, Smartphone, Sparkles } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Video Editing', level: 95, icon: <Video className="w-6 h-6" /> },
    { name: 'Web Development', level: 90, icon: <Code className="w-6 h-6" /> },
    { name: 'App Development', level: 88, icon: <Smartphone className="w-6 h-6" /> },
    { name: 'AI Automation', level: 85, icon: <Zap className="w-6 h-6" /> },
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-[#1ED3B3]" />,
      title: 'Excellence',
      description: 'I strive for excellence in every project, ensuring the highest quality standards.',
    },
    {
      icon: <Heart className="w-12 h-12 text-[#1ED3B3]" />,
      title: 'Passion',
      description: 'I love what I do and bring passion and dedication to every project.',
    },
    {
      icon: <Zap className="w-12 h-12 text-[#1ED3B3]" />,
      title: 'Innovation',
      description: 'I stay updated with the latest technologies and trends to deliver cutting-edge solutions.',
    },
    {
      icon: <Award className="w-12 h-12 text-[#1ED3B3]" />,
      title: 'Commitment',
      description: 'I am committed to delivering results that exceed expectations and meet deadlines.',
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
              <span className="text-[#1ED3B3] text-sm font-semibold">About Me</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
              Creative Professional
              <span className="block text-[#1ED3B3] mt-2">Dedicated to Excellence</span>
            </h1>

            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
              I'm a passionate creative professional specializing in video editing, web development, app development, and AI automation. With years of experience, I bring innovative solutions to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                My Story
              </h2>
              <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">
                <p>
                  My journey in the creative and tech industry started with a passion for bringing ideas to life. I've always been fascinated by the power of visual storytelling and the endless possibilities of technology.
                </p>
                <p>
                  Over the years, I've honed my skills in video editing, web development, app development, and AI automation. Each project has been a learning experience, pushing me to innovate and deliver better results.
                </p>
                <p>
                  Today, I work with clients worldwide, helping them transform their visions into reality. Whether it's a stunning video production, a modern website, a mobile app, or an AI-powered solution, I bring creativity and technical expertise to every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B3]/20 to-[#1ED3B3]/5 rounded-3xl blur-3xl" />
                <div className="relative h-full bg-gradient-to-br from-[#1ED3B3]/10 to-transparent rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="mb-8"
                    >
                      <Sparkles className="w-24 h-24 text-[#1ED3B3] mx-auto" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-[#0F172A] mb-4">50+ Projects</h3>
                    <p className="text-[#94A3B8]">Successfully Delivered</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 bg-[#0B1C2D]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              My Skills
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Expertise across multiple domains with a focus on quality and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="premium-card p-8 rounded-3xl bg-[#0F172A]/50 backdrop-blur-sm border border-[#1ED3B3]/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1ED3B3]/20 to-[#1ED3B3]/10 rounded-xl flex items-center justify-center text-[#1ED3B3]">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-[#1ED3B3] font-bold text-lg">{skill.level}%</span>
                </div>
                <div className="h-3 bg-[#1ED3B3]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-[#1ED3B3] to-[#1ED3B3] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              My Values
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              The principles that guide my work and shape my approach to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="premium-card p-8 rounded-3xl text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#1ED3B3]/15 to-[#1ED3B3]/5 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-150"
                >
                  {value.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 relative" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {value.title}
                </h3>

                <div className="w-16 h-1.5 bg-[#1ED3B3] mx-auto mb-4 rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />

                <p className="text-[#94A3B8] leading-relaxed relative">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
