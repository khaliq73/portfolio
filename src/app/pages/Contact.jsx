import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-[#1ED3B3]" />,
      title: 'Email',
      content: 'hello@portfolio.com',
      link: 'mailto:hello@portfolio.com',
    },
    {
      icon: <Phone className="w-6 h-6 text-[#1ED3B3]" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#1ED3B3]" />,
      title: 'Location',
      content: 'Creative Studio, Digital City',
      link: '#',
    },
  ];

  const services = [
    'Video Editing',
    'Web Development',
    'App Development',
    'AI Automation',
    'General Inquiry',
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
              <span className="text-[#1ED3B3] text-sm font-semibold">Get In Touch</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
              Let's Work Together
              <span className="block text-[#1ED3B3] mt-2">Start Your Project</span>
            </h1>

            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="premium-card p-10 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-[#0F172A] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Send Me a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-[#1ED3B3] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Message Sent!</h3>
                  <p className="text-[#94A3B8]">Thank you for your message. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#0F172A] mb-3 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-[#94A3B8]/30 rounded-2xl focus:outline-none focus:border-[#1ED3B3] transition-all bg-white text-[#0F172A] hover:border-[#1ED3B3]/50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#0F172A] mb-3 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-[#94A3B8]/30 rounded-2xl focus:outline-none focus:border-[#1ED3B3] transition-all bg-white text-[#0F172A] hover:border-[#1ED3B3]/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#0F172A] mb-3 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-[#94A3B8]/30 rounded-2xl focus:outline-none focus:border-[#1ED3B3] transition-all bg-white text-[#0F172A] hover:border-[#1ED3B3]/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[#0F172A] mb-3 font-semibold">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-[#94A3B8]/30 rounded-2xl focus:outline-none focus:border-[#1ED3B3] transition-all bg-white text-[#0F172A] hover:border-[#1ED3B3]/50"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#0F172A] mb-3 font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-[#94A3B8]/30 rounded-2xl focus:outline-none focus:border-[#1ED3B3] transition-all resize-none bg-white text-[#0F172A] hover:border-[#1ED3B3]/50"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn-luxury w-full py-5 bg-[#1ED3B3] text-[#0F172A] rounded-2xl shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="premium-card p-10 rounded-3xl"
              >
                <h3 className="text-3xl font-bold text-[#0F172A] mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Contact Information
                </h3>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-5 group cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1ED3B3]/20 to-[#1ED3B3]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[#1ED3B3] font-bold mb-2 text-lg">{info.title}</p>
                        <p className="text-[#0F172A] text-lg">{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="premium-card p-10 rounded-3xl bg-gradient-to-br from-[#1ED3B3]/15 to-[#1ED3B3]/5"
              >
                <h4 className="text-2xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Response Time
                </h4>
                <p className="text-[#0F172A] leading-relaxed text-lg mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent matters, please call directly.
                </p>
                <div className="mt-6 p-4 bg-white/50 rounded-xl border border-[#1ED3B3]/20">
                  <p className="text-[#1ED3B3] font-semibold mb-1">Business Hours</p>
                  <p className="text-[#0F172A]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#94A3B8] text-sm">Saturday - Sunday: By Appointment</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
