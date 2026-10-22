import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, CalendarDays, Gift, GlassWater, PackageCheck, Sparkles, Truck, Wine } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Wine, title: 'Bottle Consultation', text: 'Personal suggestions for parties, gifting, and collector shelves.', details: ['Budget-led picks', 'Occasion planning', 'Style guidance'] },
    { icon: Gift, title: 'Premium Gifting', text: 'Elegant gift packs with sleeves, message cards, and presentation boxes.', details: ['Festive hampers', 'Corporate sets', 'Custom notes'] },
    { icon: CalendarDays, title: 'Event Orders', text: 'Curated beverage lists for birthdays, weddings, house parties, and office gatherings.', details: ['Quantity guidance', 'Mixed selections', 'Advance booking'] },
    { icon: PackageCheck, title: 'Reserve Sourcing', text: 'Ask us for specific labels, limited releases, imported bottles, and premium spirits.', details: ['Label requests', 'Rare finds', 'Stock alerts'] },
    { icon: Truck, title: 'Pickup Coordination', text: 'Quick order preparation so your bottles are packed, checked, and ready when you arrive.', details: ['Fast packing', 'Secure handling', 'Call-ahead support'] },
    { icon: BadgeCheck, title: 'Authenticity Care', text: 'Clean storage, careful handling, and a focus on trusted sourcing for every bottle.', details: ['Batch checks', 'Neat display', 'Quality-first stock'] },
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <section className="subhero relative overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}store/store-12.jpg`} alt="A look at our wine store in Jaipur" />
        <div className="subhero__shade" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-36 text-center sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} className="pill">
            <Sparkles className="h-4 w-4" />
            Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-6 text-5xl font-black text-white sm:text-7xl">
            Thoughtful service for every pour.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Wines helps you choose, gift, and plan with confidence, whether you need one impressive bottle or a full celebration selection.
          </motion.p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="service-card"
              >
                <div className="service-card__icon">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}>
                      <BadgeCheck className="h-4 w-4" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0b0908] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-heading section-heading--dark">
            <span>How It Works</span>
            <h2>Simple, quick, and guided</h2>
          </div>

          <div className="process-grid">
            {[
              ['01', 'Share the occasion', 'Gift, party, collection, or a specific label request.'],
              ['02', 'Get curated options', 'We suggest bottles by taste, style, budget, and presentation.'],
              ['03', 'Confirm the selection', 'Your order is checked, packed, and prepared with care.'],
              ['04', 'Enjoy responsibly', 'Walk away with bottles that match the moment beautifully.'],
            ].map(([step, title, text], index) => (
              <motion.div key={step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="process-step">
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad service-bottle-strip relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="moving-shelf" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}store/store-06.jpg`} alt="" />
            <span className="shelf-caption">Picked with care. Ready to celebrate.</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">Bottle Handling</span>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
              Packed, checked, and staged before pickup.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              Every order is handled like a display shelf: labels facing cleanly, bottles checked, and gifting details prepared before you arrive.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-[2rem] border border-gold/20 bg-white/[0.04] lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <GlassWater className="h-12 w-12 text-gold" />
            <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">Planning a celebration?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">
              Tell us the guest count, taste profile, and mood. We will help create a balanced bottle list that feels generous, stylish, and easy to serve.
            </p>
            <button className="primary-btn group mt-8">
              Start Planning
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <img className="h-full min-h-[340px] w-full object-cover" src={`${import.meta.env.BASE_URL}store/store-10.jpg`} alt="A thoughtfully stocked wine shelf" />
        </div>
      </section>
    </motion.main>
  );
};

export default Services;
