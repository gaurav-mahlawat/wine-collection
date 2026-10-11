import { motion } from 'framer-motion';
import { Award, Eye, Heart, Leaf, MapPin, Target, Users, Wine } from 'lucide-react';

const AboutUs = () => {
  const values = [
    { icon: Heart, title: 'Warm Service', text: 'Helpful recommendations without pressure or pretence.' },
    { icon: Eye, title: 'Honest Choice', text: 'Clear guidance on style, price, pairing, and occasion fit.' },
    { icon: Target, title: 'Curated Range', text: 'A focused mix of familiar favourites and standout discoveries.' },
    { icon: Leaf, title: 'Responsible Culture', text: 'We encourage mindful hosting, gifting, and consumption.' },
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <section className="subhero relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1400&q=85" alt="Wine glasses at a tasting counter" />
        <div className="subhero__shade" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-36 text-center sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} className="pill">
            <Wine className="h-4 w-4" />
            About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-6 text-5xl font-black text-white sm:text-7xl">
            A modern bottle boutique named Wines.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            We bring together premium labels, helpful people, and a beautiful retail mood for customers who want the right bottle without the guesswork.
          </motion.p>
        </div>
      </section>

      <section className="section-pad bg-ivory text-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow-dark">Our Story</span>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Built for people who love a well-chosen bottle.</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-charcoal/72">
              <p>
                Wines began with a simple belief: choosing wine or spirits should feel enjoyable, not overwhelming.
                Our store is designed around clean displays, friendly guidance, and a collection that suits both everyday plans and milestone moments.
              </p>
              <p>
                We focus on authentic sourcing, careful storage, and practical recommendations. You can arrive with a favourite label in mind or just an occasion,
                and leave with something that feels considered.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="about-stat-panel">
            {[
              { icon: Award, value: 'Premium', label: 'Curated labels' },
              { icon: Users, value: 'Friendly', label: 'Guided service' },
              { icon: MapPin, value: 'Local', label: 'Boutique presence' },
            ].map((item) => (
              <div key={item.label}>
                <item.icon className="h-8 w-8 text-gold" />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <span>What We Stand For</span>
            <h2>Premium, but never intimidating</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.article key={value.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8 }} className="value-card">
                <value.icon className="h-8 w-8 text-gold" />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory text-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow-dark">Store Mood</span>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">A boutique shelf, not a crowded counter.</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/72">
              We arrange bottles so customers can scan quickly, compare styles, and ask for help without feeling rushed.
              The idea is simple: premium choice should feel calm, clear, and enjoyable.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="tilt-bottle-scene" aria-hidden="true">
            <div className="tilt-bottle tilt-one" />
            <div className="tilt-bottle tilt-two" />
            <div className="tilt-bottle tilt-three" />
          </motion.div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="story-band">
            <img src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?auto=format&fit=crop&w=1300&q=85" alt="Wine bottles in a cellar" />
            <div>
              <span className="eyebrow">Our Promise</span>
              <h2>Every recommendation should feel like it was chosen for you.</h2>
              <p>
                Whether you are building a dinner table, gifting a client, or collecting something special,
                Wines keeps the experience simple, stylish, and personal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutUs;
