import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, BadgeCheck, Gift, MapPin, Quote, Sparkles, Star } from 'lucide-react';

const categories = [
  { title: 'Whisky', note: 'Easy evenings to rare finds', image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=1000&q=90', className: 'category-tall' },
  { title: 'Wine', note: 'A bottle for the table', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=90', className: '' },
  { title: 'Beer', note: 'Keep the good times easy', image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1000&q=90', className: '' },
  { title: 'Gin & more', note: 'Bright pours, curious mixes', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=90', className: 'category-wide' },
];

const moments = [
  { title: 'Dinner, made special', note: 'A thoughtful bottle for the table.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=90', label: '01 / AT HOME' },
  { title: 'A gift with good taste', note: 'Make the handover feel as good as the gift.', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=90', label: '02 / JUST BECAUSE' },
  { title: 'Bring everyone together', note: 'Let the occasion set the mood.', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=90', label: '03 / THE GATHERING' },
];

const Home = () => {
  const reduceMotion = useReducedMotion();
  const appear = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: 'easeOut' as const },
  });

  return (
    <motion.main className="home-page" initial={false}>
      <section className="home-hero">
        <div className="home-hero-copy">
          <motion.div {...appear(0.05)} className="home-kicker"><span /> A BOTTLE SHOP FOR THE GOOD TIMES</motion.div>
          <motion.h1 {...appear(0.12)}>Make room<br />for <em>something</em><br /><em>good.</em></motion.h1>
          <motion.p {...appear(0.2)}>Thoughtfully chosen wines, spirits, and easy favourites—plus a little help finding the right one.</motion.p>
          <motion.div {...appear(0.28)} className="home-hero-actions">
            <Link className="home-button" to="/services">Explore the collection <ArrowRight size={17} /></Link>
            <Link className="home-text-link" to="/about">Get to know us <ArrowDown size={15} /></Link>
          </motion.div>
          <motion.div {...appear(0.34)} className="home-social-proof"><div className="proof-stars">★★★★★</div><span>Good bottles. Good people. Better gatherings.</span></motion.div>
        </div>
        <motion.div className="home-hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeOut' }}>
          <video autoPlay muted loop playsInline className="hero-video">
            <source src={`${import.meta.env.BASE_URL}hero-section-video.mp4`} type="video/mp4" />
          </video>
          <div className="hero-photo-wash" />
          <div className="hero-photo-label"><span>THE EVENING EDIT</span><strong>Something worth<br />opening.</strong></div>
          <div className="hero-photo-stamp"><Sparkles size={17} /><span>Picked with<br />personality</span></div>
        </motion.div>
        <div className="hero-bottom-note"><span>01 — 04</span><span>SCROLL A LITTLE, FIND A LOT</span><div /></div>
      </section>

      <section className="home-trust-strip" aria-label="Our approach">
        <span>GOOD TASTE, NO GUESSWORK</span><i />
        <span>HELPFUL, HUMAN RECOMMENDATIONS</span><i />
        <span>MADE FOR EVERY KIND OF GET-TOGETHER</span>
      </section>

      <section className="home-section home-categories" id="collection">
        <motion.div {...appear()} className="home-section-heading">
          <div><span className="home-overline">A VERY GOOD PLACE TO START</span><h2>Find your<br /><em>kind of pour.</em></h2></div>
          <p>From familiar favourites to a bottle you have not tried yet, browse by what sounds good.</p>
        </motion.div>
        <div className="home-category-grid">
          {categories.map((category, index) => (
            <motion.div key={category.title} {...appear(index * 0.06)} whileHover={reduceMotion ? undefined : { y: -6 }} className={`home-category-card ${category.className}`}>
              <Link to="/services" aria-label={`Explore ${category.title}`}>
                <img src={category.image} alt={`${category.title} selection`} loading="lazy" />
                <span className="category-index">0{index + 1}</span><div className="home-category-shade" />
                <div className="home-category-copy"><span>{category.note}</span><h3>{category.title}<ArrowUpRightMark /></h3></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="home-feature-band">
        <motion.div {...appear()} className="home-feature-photo">
          <video autoPlay muted loop playsInline className="feature-video">
            <source src={`${import.meta.env.BASE_URL}birdwiser-video.mp4`} type="video/mp4" />
          </video>
          <div className="feature-photo-caption">A LITTLE COLOUR NEVER HURT</div>
        </motion.div>
        <motion.div {...appear(0.1)} className="home-feature-copy">
          <span className="home-overline">MORE THAN A SHELF</span>
          <h2>Good advice.<br /><em>No big speech.</em></h2>
          <p>Not sure what to bring? Tell us the plan, who is coming, or what you like. We will help you find a bottle that feels right.</p>
          <div className="feature-points"><span><BadgeCheck size={18} /> Friendly recommendations</span><span><BadgeCheck size={18} /> Picks for your budget</span><span><BadgeCheck size={18} /> Gift and event help</span></div>
          <Link to="/services" className="home-link-arrow">See how we can help <ArrowRight size={17} /></Link>
        </motion.div>
      </section>

      <section className="home-section home-occasions">
        <motion.div {...appear()} className="home-section-heading centered-heading">
          <div><span className="home-overline">LIFE HAS ITS LITTLE OCCASIONS</span><h2>Bring a bottle.<br /><em>Bring a feeling.</em></h2></div>
          <p>Some moments call for a toast. Others just call for good company. We have a shelf for both.</p>
        </motion.div>
        <div className="home-moment-grid">
          {moments.map((moment, index) => (
            <motion.div key={moment.title} {...appear(index * 0.08)} whileHover={reduceMotion ? undefined : { y: -5 }} className="home-moment-card">
              <Link to="/services"><img src={moment.image} alt="" loading="lazy" /><span className="moment-label">{moment.label}</span><div className="moment-copy"><h3>{moment.title}</h3><p>{moment.note}</p></div><span className="moment-arrow"><ArrowRight size={18} /></span></Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="home-store-section">
        <div className="store-orbit" aria-hidden="true" />
        <motion.div {...appear()} className="store-copy">
          <span className="home-overline">COME ON IN</span><h2>Your neighbourhood<br />stop for <em>good taste.</em></h2>
          <p>A welcoming shop, a thoughtfully stocked shelf, and a real person happy to help you choose. That is the whole idea.</p>
          <Link to="/about" className="home-button home-button-light">A little about us <ArrowRight size={17} /></Link>
          <div className="store-address"><MapPin size={17} /><span>Visit us in store<br /><small>B-33, Kalwad Yojana, Near Kalpana Cargo, Opposite Jaipur Metro Station, Pillar No. 147, Near Jaipur Railway Station, Jaipur – 302006</small></span></div>
        </motion.div>
        <motion.div {...appear(0.12)} className="store-photo"><img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=90" alt="Warm and welcoming neighbourhood bar interior" loading="lazy" /><span>COME AS YOU ARE</span></motion.div>
      </section>

      <section className="home-section home-reviews">
        <motion.div {...appear()} className="reviews-intro"><span className="home-overline">KIND WORDS, SHARED</span><h2>Good company<br /><em>knows good taste.</em></h2><div className="proof-stars">★★★★★</div><p>Thoughtful picks make the best memories.</p></motion.div>
        <motion.blockquote {...appear(0.08)} className="home-quote"><Quote size={29} /><p>“The team understood exactly what I needed for dinner. Helpful, welcoming, and the bottle was just right.”</p><footer><div className="review-avatar">AM</div><span><strong>A happy customer</strong><small>Stopped in for a dinner pick</small></span><div className="quote-rating"><Star size={14} fill="currentColor" /> 5.0</div></footer></motion.blockquote>
      </section>

      <section className="home-final-cta">
        <div className="cta-sparkle"><Gift size={25} /></div><span className="home-overline">YOUR NEXT FAVOURITE IS WAITING</span>
        <h2>Make tonight<br /><em>a little special.</em></h2><p>Drop by, tell us what you are celebrating—or just what you like.</p>
        <Link to="/services" className="home-button">Let’s find your bottle <ArrowRight size={17} /></Link>
      </section>
    </motion.main>
  );
};

const ArrowUpRightMark = () => <span className="category-arrow"><ArrowRight size={18} /></span>;

export default Home;
