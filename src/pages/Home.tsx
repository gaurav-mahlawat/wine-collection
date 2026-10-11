import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Gem, GlassWater, Quote, ShieldCheck, Sparkles, Star, Wine } from 'lucide-react';

const cellarImage = 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=85';

const Home = () => {
  const categories = [
    { title: 'Reserve Whisky', note: 'Single malts, smooth blends, rich finishes', image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=900&q=85' },
    { title: 'Beer & Breezers', note: 'Chilled favourites for easy gatherings', image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=85' },
    { title: 'Wine Shelf', note: 'Reds, whites, sparkling and celebration bottles', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85' },
    { title: 'Vodka & Gin', note: 'Clean pours, cocktail essentials, premium labels', image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=85' },
  ];

  const features = [
    { icon: ShieldCheck, title: 'Authentic Stock', text: 'Sourced through trusted distributors with batch-conscious handling.' },
    { icon: Clock, title: 'Quick Selection', text: 'Tell us the occasion and we help narrow the perfect bottle fast.' },
    { icon: Gem, title: 'Gift Ready', text: 'Premium pairings, bottle sleeves, and celebration-ready presentation.' },
  ];

  const reviews = [
    { name: 'Aarav Mehta', text: 'The team suggested a red wine for a family dinner and it was exactly the mood we wanted. Beautiful store experience.', rating: '5.0' },
    { name: 'Nisha Kapoor', text: 'Their gift packing feels premium without being overdone. I liked how quickly they understood my budget.', rating: '4.9' },
    { name: 'Kabir Sethi', text: 'Great collection of wines and spirits. The recommendations are clear, honest, and never pushy.', rating: '5.0' },
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <section className="hero-shell relative min-h-screen overflow-hidden">
        <img className="hero-image" src={cellarImage} alt="Warm premium wine cellar shelves" />
        <div className="hero-overlay" />
        <div className="bottle-rail" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/30 px-4 py-2 text-sm text-gold backdrop-blur"
            >
              <Sparkles className="h-4 w-4" />
              Fine wines, premium spirits, curated for every occasion
            </motion.div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              Wines
              <span className="mt-3 block text-[0.54em] font-semibold leading-tight text-gold-light">
                Premium drinks, bold shelf energy.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              A modern liquor boutique for whisky, wine, beer, vodka, gin, rum, gifting, and party orders.
              Explore trusted labels, bright product displays, and a store experience with proper junction energy.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link className="primary-btn group" to="/services">
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link className="secondary-btn" to="/about">
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 44, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            className="hero-feature product-hero-display"
          >
            <div className="hero-liquid-ring" />
            <div className="hero-product-bottle hero-bottle-a"><span>Wines</span></div>
            <div className="hero-product-bottle hero-bottle-b"><span>Reserve</span></div>
            <div className="hero-product-bottle hero-bottle-c"><span>Gold</span></div>
            <div className="hero-product-shelf" />
            <div className="hero-feature-card">
              <Wine className="h-7 w-7 text-gold" />
              <div>
                <strong>Premium Junction</strong>
                <span>Whisky, wine, beer, rum, gin, vodka and party-ready picks.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="ambient-line" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-heading">
            <span>Popular Categories</span>
            <h2>Popular drinks, displayed like a premium shop</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="category-card"
              >
                <img src={category.image} alt={category.title} />
                <div className="category-card__shade" />
                <div className="category-card__content">
                  <span>0{index + 1}</span>
                  <h3>{category.title}</h3>
                  <p>{category.note}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory text-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="image-stack">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85" alt="Colorful premium drinks on a bar counter" />
            <div className="image-stack__badge">
              <Star className="h-5 w-5 fill-current" />
              <strong>Curated Daily</strong>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <span className="eyebrow-dark">Why Wines</span>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              A polished liquor-store experience with bright product confidence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/70">
              We built Wines for customers who want a strong collection without confusion. Walk in for whisky,
              beer, wine, vodka, or gifting, and get quick guidance with a premium shelf feel.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="light-feature">
                  <feature.icon className="h-7 w-7 text-wine" />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bottle-stage-section relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">Featured Shelf</span>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
              Bottle motion inspired by premium drink displays.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/64">
              Similar to a liquor-store showcase, this section keeps bottles moving with soft glow, label shine,
              and a display shelf effect while using a fresh Wines visual language.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {['Dinner', 'Gifting', 'Events'].map((item) => (
                <div key={item} className="mini-stat">{item}</div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bottle-stage" aria-hidden="true">
            <div className="animated-bottle bottle-one"><span /></div>
            <div className="animated-bottle bottle-two"><span /></div>
            <div className="animated-bottle bottle-three"><span /></div>
            <div className="bottle-glow" />
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-ivory text-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-heading section-heading--dark">
            <span>Customer Reviews</span>
            <h2>What people say after visiting Wines</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="review-card"
              >
                <Quote className="h-8 w-8 text-wine" />
                <p>{review.text}</p>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.rating} rating</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="marquee" aria-hidden="true">
          <div>Wine Bar - Gift Bottles - Imported Labels - Whisky Picks - Party Orders - </div>
          <div>Wine Bar - Gift Bottles - Imported Labels - Whisky Picks - Party Orders - </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="cta-panel">
            <GlassWater className="mx-auto h-12 w-12 text-gold" />
            <h2>Bring home the right bottle tonight.</h2>
            <p>Visit Wines for curated recommendations, event orders, and premium labels presented with care.</p>
            <Link className="primary-btn group mx-auto" to="/services">
              See What We Offer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
