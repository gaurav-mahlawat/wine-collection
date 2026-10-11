import { motion } from 'framer-motion';
import { Truck, Gift, Wine, Calendar, Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Express Wine Delivery',
      description: 'Get your favorite wines delivered to your doorstep within 2 hours. Our temperature-controlled vehicles ensure your wine arrives in perfect condition.',
      features: ['Same-day delivery', 'Temperature controlled', 'Real-time tracking', 'Safe packaging'],
      color: 'from-wine to-wine-light'
    },
    {
      icon: Gift,
      title: 'Gift Packaging',
      description: 'Make your gift extraordinary with our premium packaging options. Custom labels, wooden boxes, and personalized messages available.',
      features: ['Custom labels', 'Wooden gift boxes', 'Personalized messages', 'Premium wrapping'],
      color: 'from-gold to-gold-light'
    },
    {
      icon: Wine,
      title: 'Custom Collections',
      description: 'Let our expert sommeliers create a personalized wine collection tailored to your taste preferences and budget.',
      features: ['Expert curation', 'Budget-friendly options', 'Taste profiling', 'Monthly subscriptions'],
      color: 'from-wine-light to-gold'
    },
    {
      icon: Calendar,
      title: 'Event Catering',
      description: 'From intimate dinners to grand celebrations, we provide complete wine catering services for all your events.',
      features: ['Event consultation', 'Wine pairing menu', 'Professional staff', 'Full setup included'],
      color: 'from-amber-700 to-amber-500'
    },
    {
      icon: Users,
      title: 'Corporate Orders',
      description: 'Bulk orders for corporate events, client gifts, and employee appreciation. Special pricing and dedicated account managers.',
      features: ['Bulk discounts', 'Dedicated manager', 'Custom branding', 'Invoicing facility'],
      color: 'from-emerald-800 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Wine Insurance',
      description: 'Complete protection for your valuable wine collection. Coverage against damage, theft, and spoilage.',
      features: ['Full coverage', 'Quick claims', 'Annual valuation', 'Expert assessment'],
      color: 'from-blue-800 to-blue-600'
    },
  ];

  const process = [
    { step: '01', title: 'Browse & Select', desc: 'Explore our extensive collection' },
    { step: '02', title: 'Customize', desc: 'Choose packaging & delivery' },
    { step: '03', title: 'Order', desc: 'Secure checkout process' },
    { step: '04', title: 'Enjoy', desc: 'Fast delivery to your door' },
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
          <div className="absolute top-20 right-20 w-80 h-80 bg-wine/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-gold/10 rounded-full blur-3xl" />
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
              Our Services
            </motion.span>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-white">Premium Wine </span>
              <span className="gradient-text">Services</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              From express delivery to custom collections, we offer a complete range of services 
              to make your wine experience extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative glass-effect rounded-3xl p-8 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/40 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold/60 text-sm tracking-widest uppercase">How It Works</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              <span className="gradient-text">Simple Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative text-center group"
              >
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/30 to-transparent" />
                )}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full glass-effect flex items-center justify-center mx-auto mb-4 relative"
                >
                  <span className="text-2xl font-bold gradient-text">{item.step}</span>
                  <div className="absolute inset-0 rounded-full border border-gold/20 group-hover:border-gold/50 transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Plans */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold/60 text-sm tracking-widest uppercase">Pricing</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              <span className="gradient-text">Delivery Plans</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Standard', price: 'Free', period: 'On orders above ₹2000', features: ['3-5 day delivery', 'Standard packaging', 'Email support', 'Basic tracking'], popular: false },
              { name: 'Express', price: '₹99', period: 'Per delivery', features: ['2-hour delivery', 'Premium packaging', 'Priority support', 'Live tracking', 'Temperature control'], popular: true },
              { name: 'Premium', price: '₹499', period: 'Monthly', features: ['Unlimited deliveries', 'Luxury packaging', 'Dedicated sommelier', 'VIP access', 'Free gifts monthly', 'Exclusive events'], popular: false },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-wine/30 to-wine-dark/30 border-2 border-gold/30'
                    : 'glass-effect'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-dark text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                </div>
                <p className="text-white/40 text-sm mb-6">{plan.period}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/60 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold/60 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gold text-dark hover:bg-gold-light'
                    : 'glass-effect text-gold hover:bg-gold/10'
                }`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 animate-shimmer" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-white/50 mb-8">
                We'd love to create a tailored wine service package for your specific needs.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-wine to-wine-light text-white font-medium rounded-full hover:shadow-xl hover:shadow-wine/30 transition-all duration-300 hover:scale-105">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
