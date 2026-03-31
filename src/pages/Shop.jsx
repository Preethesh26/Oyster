import { useEffect } from 'react'
import { varieties, WHATSAPP_NUMBER } from '../data'

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

function waOrder(name, type) {
  const msg = encodeURIComponent(`Hi! I'd like to order ${name} (${type}) from Hima Organic.`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export default function Shop() {
  useScrollReveal()
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label center reveal">Fresh Daily</div>
          <h1 className="center reveal">Our Mushrooms</h1>
          <p className="center reveal page-hero-sub">Hand-harvested every morning. Order by WhatsApp for same-day delivery.</p>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="varieties" style={{ paddingTop: 80 }}>
        <div className="container">
          <div className="varieties-grid">
            {varieties.map(({ name, img, desc, retail, bulk }, i) => (
              <div className={`variety-card reveal reveal-delay-${i + 1}`} key={name}>
                <div className="variety-img-wrap">
                  <img src={img} alt={name} />
                  <div className="variety-overlay"><span>Order Now</span></div>
                </div>
                <div className="variety-info">
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <div className="price-row">
                    <div className="price-tag">
                      <span className="price-label">Retail</span>
                      <span className="price-val">₹{retail}<small>/kg</small></span>
                    </div>
                    <div className="price-tag price-tag--bulk">
                      <span className="price-label">Bulk (5kg+)</span>
                      <span className="price-val">₹{bulk}<small>/kg</small></span>
                    </div>
                  </div>
                  <div className="variety-btns">
                    <a href={waOrder(name, 'retail')} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">📲 Order Retail</a>
                    <a href={waOrder(name, 'bulk 5kg+')} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">Bulk Order</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-label center reveal">Pricing</div>
          <h2 className="center reveal">Simple, Transparent Rates</h2>
          <div className="pricing-table reveal">
            <div className="pricing-head">
              <span>Variety</span>
              <span>Retail (per kg)</span>
              <span>Bulk 5kg+ (per kg)</span>
              <span>Order</span>
            </div>
            {varieties.map(({ name, retail, bulk }) => (
              <div className="pricing-row" key={name}>
                <span className="pricing-name">🍄 {name}</span>
                <span className="pricing-price">₹{retail}</span>
                <span className="pricing-price pricing-price--bulk">₹{bulk}</span>
                <a href={waOrder(name, 'retail')} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Order</a>
              </div>
            ))}
          </div>
          <p className="pricing-note reveal">* Minimum bulk order: 5 kg per variety. Delivery available across Puttur and Dakshina Kannada. Contact us for restaurant/wholesale rates.</p>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="features" style={{ paddingBottom: 120 }}>
        <div className="container">
          <div className="section-label center reveal">How to Order</div>
          <h2 className="center reveal">3 Simple Steps</h2>
          <div className="features-grid">
            {[
              { icon: '📲', title: 'WhatsApp Us', desc: 'Send us a message on WhatsApp with your variety, quantity, and delivery address.' },
              { icon: '✅', title: 'Confirm Order', desc: 'We confirm availability and harvest time — usually same morning.' },
              { icon: '🚚', title: 'Fresh Delivery', desc: 'Your mushrooms are packed and delivered fresh the same day.' },
            ].map(({ icon, title, desc }, i) => (
              <div className={`feature-card reveal reveal-delay-${i + 1}`} key={title}>
                <div className="feature-icon-wrap">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
            <div className="feature-card reveal reveal-delay-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
              <div className="feature-icon-wrap">🍄</div>
              <h3>Ready to Order?</h3>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to order fresh oyster mushrooms.')}`} target="_blank" rel="noreferrer" className="btn btn-dark">📲 Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
