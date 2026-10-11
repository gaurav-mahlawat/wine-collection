import { motion } from 'framer-motion';
import { Heart, Target, Eye, Users, Award, Globe, Leaf, Link2 } from 'lucide-react';

const AboutUs = () => {
  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', emoji: '👨‍💼' },
    { name: 'Priya Sharma', role: 'Head Sommelier', emoji: '👩‍🍳' },
    { name: 'Arjun Mehta', role: 'Operations Director', emoji: '👨‍💻' },
    { name: 'Sneha Patel', role: 'Customer Experience', emoji: '👩‍💼' },
  ];

  const values = [
    { icon: Heart, title: 'Passion', desc: 'Every bottle tells a story, and we\'re passionate about sharing it.' },
    { icon: Target, title: 'Quality', desc: 'We never compromise on the quality of our wines and service.' },
    { icon: Eye, title: 'Transparency', desc: 'Honest pricing, authentic products, and clear communication.' },
    { icon: Leaf, title: 'Sustainability', desc: 'Committed to eco-friendly practices and responsible sourcing.' },
  ];

  const milestones = [
    { year: '2015', title: 'Founded', desc: 'Started with a vision to bring premium wines to every home.' },
    { year: '2017', title: 'First Store', desc: 'Opened our flagship store in the heart of the city.' },
    { year: '2019', title: 'Online Launch', desc: 'Expanded to digital platform serving 50+ cities.' },
    { year: '2021', title: '10K Customers', desc: 'Reached 10,000 happy customers milestone.' },
    { year: '2023', title: 'Award Winner', desc: 'Won Best Wine Retailer award at National Spirits Awards.' },
    { year: '2024', title: 'Going Global', desc: 'Expanding to international markets with curated collections.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-wine/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/5 rounded-full animate-rotate-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass-effect text-gold/80 text-sm mb-6"
            >
              Our Story
            </motion.span>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-white">Crafted with </span>
              <span className="gradient-text">Passion & Purpose</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
              Born from a love of fine wines and a desire to make premium collections accessible to everyone. 
              We're more than a wine store — we're curators of experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold/60 text-sm tracking-widest uppercase">Our Journey</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">
                <span className="gradient-text">A Legacy of Excellence</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  What started as a small passion project in 2015 has grown into one of the most 
                  trusted names in premium wine retail. Our founder, Rajesh Kumar, envisioned a world 
                  where everyone could access exceptional wines without compromise.
                </p>
                <p>
                  Today, we partner with over 200 vineyards across 30 countries, bringing you an 
                  unparalleled selection that spans from classic French Bordeaux to innovative New 
                  World blends. Every bottle in our collection has been personally tasted and approved 
                  by our team of expert sommeliers.
                </p>
                <p>
                  We believe that wine is more than a beverage — it's an experience, a conversation 
                  starter, and a bridge between cultures. That's why we go beyond just selling wine; 
                  we educate, inspire, and create memorable moments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-wine/10 to-gold/5" />
                <div className="relative grid grid-cols-2 gap-6">
                  {[
                    { icon: Globe, value: '30+', label: 'Countries' },
                    { icon: Award, value: '50+', label: 'Awards' },
                    { icon: Users, value: '10K+', label: 'Customers' },
                    { icon: Link2, value: '200+', label: 'Partners' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 rounded-2xl bg-white/5"
                    >
                      <stat.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-white/40 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-wine/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold/60 text-sm tracking-widest uppercase">What Drives Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              <span className="gradient-text">Our Core Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-3xl p-8 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-wine/30 to-gold/20 flex items-center justify-center mx-auto mb-6"
                >
                  <value.icon className="w-8 h-8 text-gold" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold/60 text-sm tracking-widest uppercase">Milestones</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              <span className="gradient-text">Our Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/50 to-gold/30 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-effect rounded-2xl p-6 inline-block">
                      <span className="text-gold font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-white font-semibold mt-1">{milestone.title}</h3>
                      <p className="text-white/50 text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-[#0a0a0a] z-10 flex-shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold/60 text-sm tracking-widest uppercase">The People</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-3xl p-8 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-wine/30 to-gold/20 flex items-center justify-center mx-auto mb-4 text-4xl"
                >
                  {member.emoji}
                </motion.div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-gold/60 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-wine-dark via-wine to-wine-dark" />
            <div className="absolute inset-0 animate-shimmer" />
            <div className="relative p-12 sm:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-4xl mb-6 block">🍷</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
                  "To democratize the world of fine wines by making premium collections accessible, 
                  enjoyable, and educational for everyone. We believe every person deserves to experience 
                  the artistry and culture that comes with exceptional wine."
                </p>
                <p className="text-gold mt-6 font-medium">— Rajesh Kumar, Founder</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
