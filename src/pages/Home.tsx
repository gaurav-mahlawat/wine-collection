import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Award, Clock, Sparkles } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden wine-gradient">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://image.qwenlm.ai/generated-images/72d994c4-cb59-4560-af28-b083f5e491f0/_result.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-wine/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full animate-rotate-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
        </div>

        {/* Floating wine drops */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full animate-bubble"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold/80">Premium Wine Collection</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Discover the</span>
            <span className="gradient-text">Art of Fine Wine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Indulge in our handpicked selection of world-class wines, delivered to your doorstep. 
            From vineyard to glass, experience perfection in every bottle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="group px-8 py-4 bg-gradient-to-r from-wine to-wine-light text-white font-medium rounded-full hover:shadow-xl hover:shadow-wine/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 glass-effect text-gold font-medium rounded-full hover:bg-gold/10 transition-all duration-300 hover:scale-105"
            >
              Our Story
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '500+', label: 'Wine Varieties' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '50+', label: 'Awards Won' },
              { value: '24/7', label: 'Delivery Service' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-2xl p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-gold/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold/60 text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              <span className="gradient-text">Exceptional Experience</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              We bring the world's finest wines to your doorstep with unmatched quality and service.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'Every bottle is carefully selected from the world\'s most renowned vineyards and wineries.',
                color: 'from-wine to-wine-light'
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                description: 'Get your favorite wines delivered within hours. Temperature-controlled packaging ensures quality.',
                color: 'from-gold to-gold-light'
              },
              {
                icon: Star,
                title: 'Expert Curation',
                description: 'Our sommeliers handpick each wine to ensure you get only the finest selections available.',
                color: 'from-wine-light to-gold'
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative glass-effect rounded-3xl p-8 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wine Categories */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold/60 text-sm tracking-widest uppercase">Our Collection</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              <span className="gradient-text">Wine Categories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Red Wine', emoji: '🍷', desc: 'Bold & Rich', color: 'bg-red-900/20 border-red-800/30' },
              { name: 'White Wine', emoji: '🥂', desc: 'Crisp & Fresh', color: 'bg-yellow-900/20 border-yellow-800/30' },
              { name: 'Sparkling', emoji: '🍾', desc: 'Bubbly & Festive', color: 'bg-amber-900/20 border-amber-800/30' },
              { name: 'Rosé', emoji: '🌸', desc: 'Light & Elegant', color: 'bg-pink-900/20 border-pink-800/30' },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`glass-effect rounded-3xl p-6 text-center border ${cat.color} cursor-pointer group`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-5xl mb-4"
                >
                  {cat.emoji}
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-1">{cat.name}</h3>
                <p className="text-white/40 text-sm">{cat.desc}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-gold text-sm">Explore →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
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
              <Clock className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Elevate Your Experience?
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Join thousands of wine enthusiasts who trust us for their premium wine needs. 
                Order now and get free delivery on your first purchase.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/20"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
