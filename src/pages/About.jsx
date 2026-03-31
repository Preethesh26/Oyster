import { useEffect } from 'react'
import { MUSHROOM_IMG, ABOUT_IMG } from '../data'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function About() {
  useScrollReveal()
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label center reveal">Our Story</div>
          <h1 className="center reveal">About Hima Organic</h1>
          <p className="center reveal page-hero-sub">A small farm with a big heart — rooted in Puttur, Dakshina Kannada.</p>
        </div>
      </section>

      <section className="about" style={{ paddingTop: 80 }}>
        <div className="container about-grid">
          <div className="about-img-wrap reveal reveal-left">
            <img src={ABOUT_IMG} alt="Farm" />
            <div className="about-badge">Est. 2024</div>
          </div>
          <div className="about-text reveal reveal-right">
            <div className="section-label">Who We Are</div>
            <h2>Grown with Care,<br />Served with Love</h2>
            <p><strong>Hima Organic Oyster Mushroom</strong> is a family-run farm based in Berike, Kodimbadi Post & Village, Puttur Taluk, Dakshina Kannada — 574325.</p>
            <p>We specialise in growing premium white, gray, and light gray oyster mushrooms (<em>Pleurotus ostreatus</em>) using traditional, chemical-free cultivation methods on locally sourced paddy straw.</p>
            <p>The warm, humid coastal climate of Dakshina Kannada provides the perfect natural environment for oyster mushroom cultivation — no artificial climate control needed.</p>
          </div>
        </div>
      </section>

      <section className="features" style={{ paddingTop: 80 }}>
        <div className="container">
          <div className="section-label center reveal">Our Values</div>
          <h2 className="center reveal">What We Stand For</h2>
          <div className="features-grid">
            {[
              { icon: '🌱', title: 'Organic Always', desc: 'No pesticides, no synthetic fertilisers. Just clean, natural cultivation from day one.' },
              { icon: '🤝', title: 'Community First', desc: 'We source paddy straw locally, supporting farmers in Dakshina Kannada.' },
              { icon: '🌊', title: 'Coastal Roots', desc: 'Our farm thrives in the natural humidity of the Karnataka coast — no shortcuts.' },
              { icon: '📦', title: 'Fresh Guarantee', desc: 'Every order is harvested and packed the same day. Freshness is non-negotiable.' },
            ].map(({ icon, title, desc }, i) => (
              <div className={`feature-card reveal reveal-delay-${i + 1}`} key={title}>
                <div className="feature-icon-wrap">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about" style={{ paddingTop: 80, paddingBottom: 120 }}>
        <div className="container about-grid">
          <div className="about-text reveal reveal-left">
            <div className="section-label">Our Location</div>
            <h2>Find Us in Puttur</h2>
            <p>We're located in Berike village, Kodimbadi Post, Puttur Taluk — in the heart of Dakshina Kannada's lush coastal belt.</p>
            <ul className="contact-details" style={{ marginTop: 16 }}>
              <li><span>📍</span><span>Berike, Kodimbadi Post & Village,<br />Puttur Taluk, Dakshina Kannada – 574325</span></li>
              <li><span>📞</span><a href="tel:+919019417813">+91 90194 17813</a></li>
              <li><span>✉️</span><a href="mailto:himamashroomfarms@gmail.com">himamashroomfarms@gmail.com</a></li>
            </ul>
          </div>
          <div className="map-wrap reveal reveal-right">
            <iframe
              title="Hima Organic Farm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15577.123456789!2d75.5!3d12.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a4a4a4a4a4a4%3A0x0!2sPuttur%2C+Karnataka+574325!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="360"
              style={{ border: 0, borderRadius: 20 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
