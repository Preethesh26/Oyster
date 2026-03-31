import { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { MUSHROOM_IMG, ABOUT_IMG, growthStages, varieties, features, WHATSAPP_NUMBER, WHATSAPP_MSG } from '../data'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function ProcessScene() {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)
  const total = growthStages.length

  const goTo = (i) => {
    setActive(i)
    const track = trackRef.current
    if (!track) return
    track.children[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  // sync active dot from scroll position
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const center = track.scrollLeft + track.offsetWidth / 2
      let closest = 0
      Array.from(track.children).forEach((c, i) => {
        if (Math.abs(c.offsetLeft + c.offsetWidth / 2 - center) <
            Math.abs(track.children[closest].offsetLeft + track.children[closest].offsetWidth / 2 - center))
          closest = i
      })
      setActive(closest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="ps-scene">
      {/* progress bar */}
      <div className="ps-progress-bar">
        <div className="ps-progress-fill" style={{ width: `${((active + 1) / total) * 100}%` }} />
      </div>

      {/* dot nav */}
      <div className="ps-dot-nav">
        {growthStages.map((s, i) => (
          <button key={i} className={`ps-dnav-btn ${i === active ? 'on' : i < active ? 'done' : ''}`} onClick={() => goTo(i)}>
            <span className="ps-dnav-pip" />
            <span className="ps-dnav-label">{s.label}</span>
          </button>
        ))}
      </div>

      {/* cards — click inactive card to focus it, drag to scroll */}
      <div className="ps-track" ref={trackRef}>
        {growthStages.map((s, i) => (
          <div
            key={i}
            className={`ps-card ${i === active ? 'ps-card--on' : ''}`}
            onClick={() => i !== active && goTo(i)}
          >
            <div className="ps-card-img">
              <img src={s.img} alt={s.label} />
              <div className="ps-card-img-dim" />
              <div className="ps-card-num">{String(s.stage).padStart(2,'0')}</div>
            </div>
            <div className="ps-card-body">
              <div className="ps-card-tag">{s.icon} Stage {s.stage} / {total}</div>
              <h3>{s.label}</h3>
              <p>{s.desc}</p>
              <div className="ps-card-bar">
                <div className="ps-card-bar-fill" style={{ width: `${(s.stage / total) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* counter + arrows */}
      <div className="ps-counter-row">
        <button className="ps-arr-btn" onClick={() => goTo(active - 1)} disabled={active === 0}>‹</button>
        <span className="ps-count">{String(active + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>
        <button className="ps-arr-btn" onClick={() => goTo(active + 1)} disabled={active === total - 1}>›</button>
      </div>
    </div>
  )
}

const reviews = [
  { name: 'Priya S.',      location: 'Puttur',       stars: 5, text: 'Hima\'s mushrooms are the freshest I\'ve found in Puttur. Clean, firm, and full of flavour — straight from the farm.' },
  { name: 'Ravi Kumar',    location: 'Mangaluru',    stars: 5, text: 'Ordered 2kg of white oyster — delivered the same morning. Absolutely fresh, no smell, perfect texture. Will order every week!' },
  { name: 'Anitha M.',     location: 'Puttur',       stars: 5, text: 'We use Hima mushrooms in our restaurant. Consistent quality, great price for bulk. Our customers love the dishes.' },
  { name: 'Suresh Bhat',   location: 'Sullia',       stars: 5, text: 'Never thought locally grown mushrooms could taste this good. The gray oyster variety is amazing in curry.' },
  { name: 'Deepa Nayak',   location: 'Bantwal',      stars: 4, text: 'Very fresh and well packed. Delivery was quick. The light gray variety has a very delicate flavour — perfect for soups.' },
]

function ReviewCards() {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)

  const goTo = (i) => {
    setActive(i)
    trackRef.current?.children[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const center = track.scrollLeft + track.offsetWidth / 2
      let closest = 0
      Array.from(track.children).forEach((c, i) => {
        if (Math.abs(c.offsetLeft + c.offsetWidth / 2 - center) <
            Math.abs(track.children[closest].offsetLeft + track.children[closest].offsetWidth / 2 - center))
          closest = i
      })
      setActive(closest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-label center reveal">Customer Reviews</div>
        <h2 className="center reveal">What Our Customers Say</h2>
      </div>

      <div className="rv-track" ref={trackRef}>
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`rv-card ${i === active ? 'rv-card--on' : ''}`}
            onClick={() => i !== active && goTo(i)}
          >
            <div className="rv-stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
            <p className="rv-text">"{r.text}"</p>
            <div className="rv-author">
              <div className="rv-avatar">{r.name[0]}</div>
              <div>
                <strong>{r.name}</strong>
                <span>{r.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rv-dots">
        {reviews.map((_, i) => (
          <button key={i} className={`rv-dot ${i === active ? 'rv-dot--on' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  useScrollReveal()
  const navigate = useNavigate()

  return (
    <>
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-bg">
          <img src={MUSHROOM_IMG} alt="" />
          <div className="home-hero-overlay" />
        </div>
        <div className="home-hero-content">
          <div className="home-hero-eyebrow reveal">
            <span className="eyebrow-dot" />
            Puttur · Dakshina Kannada
          </div>
          <h1 className="home-hero-title reveal reveal-delay-1">
            Pure Organic<br />
            <span className="home-hero-accent">Oyster Mushrooms</span><br />
            From Our Farm
          </h1>
          <p className="home-hero-sub reveal reveal-delay-2">
            Hand-harvested daily in Kodimbadi, Puttur — fresh, clean, and delivered to your door.
          </p>
          <div className="home-hero-actions reveal reveal-delay-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noreferrer"
              className="btn btn-hero-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </a>
            <button className="btn btn-hero-outline" onClick={() => navigate('/shop')}>
              View Prices →
            </button>
          </div>
        </div>
        <div className="home-hero-stats reveal">
          <div className="hstat"><strong>100%</strong><span>Organic</span></div>
          <div className="hstat-div" />
          <div className="hstat"><strong>3</strong><span>Varieties</span></div>
          <div className="hstat-div" />
          <div className="hstat"><strong>24h</strong><span>Fresh</span></div>
          <div className="hstat-div" />
          <div className="hstat"><strong>0</strong><span>Chemicals</span></div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="home-about">
        <div className="container about-grid">
          <div className="about-img-wrap reveal reveal-left">
            <img src={ABOUT_IMG} alt="Oyster mushrooms growing" />
            <div className="about-badge">Kodimbadi, Puttur</div>
          </div>
          <div className="about-text reveal reveal-right">
            <div className="section-label">Our Story</div>
            <h2>Rooted in Puttur,<br />Grown with Purpose</h2>
            <p>
              <strong>Hima Organic</strong> is a family farm in Berike, Kodimbadi, Puttur Taluk.
              We grow premium oyster mushrooms on locally sourced paddy straw — no chemicals, no shortcuts.
            </p>
            <p>
              The warm, humid coastal climate of Dakshina Kannada is naturally perfect for cultivation.
              Every cluster is hand-picked at peak freshness and delivered the same day.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-dark" onClick={() => navigate('/about')}>Our Story →</button>
              <button className="btn btn-line" onClick={() => navigate('/shop')}>Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── VARIETIES PREVIEW ── */}
      <section className="home-varieties">
        <div className="container">
          <div className="section-label center reveal">What We Grow</div>
          <h2 className="center reveal">Three Varieties, One Farm</h2>
          <div className="home-varieties-grid">
            {varieties.map(({ name, img, desc, retail }, i) => (
              <div className={`hv-card reveal reveal-delay-${i + 1}`} key={name}>
                <div className="hv-img">
                  <img src={img} alt={name} />
                  <div className="hv-price">₹{retail}/kg</div>
                </div>
                <div className="hv-body">
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'd like to order ${name} from Hima Organic.`)}`}
                    target="_blank" rel="noreferrer"
                    className="btn btn-dark btn-sm"
                  >
                    📲 Order
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/shop" className="btn btn-line">See Full Pricing →</Link>
          </div>
        </div>
      </section>

      {/* ── GROWTH JOURNEY ── */}
      <section className="process-section" id="growth">
        <div className="container">
          <div className="section-label center reveal">How We Grow</div>
          <h2 className="center reveal">From Substrate to Harvest</h2>
          <p className="center reveal process-sub">Every cluster starts with paddy straw and ends on your plate.</p>
        </div>
        <ProcessScene />
      </section>

      {/* ── WHY US ── */}
      <section className="features">
        <div className="container">
          <div className="section-label center reveal">Why Choose Us?</div>
          <h2 className="center reveal">The Hima Difference</h2>
          <div className="features-grid">
            {features.map(({ icon, title, desc }, i) => (
              <div className={`feature-card reveal reveal-delay-${i + 1}`} key={title}>
                <div className="feature-icon-wrap">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="home-cta-banner">
        <div className="container">
          <div className="home-cta-inner reveal">
            <div>
              <h2>Ready for Fresh Mushrooms?</h2>
              <p>Order directly on WhatsApp — same-day harvest, delivered fresh.</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noreferrer"
              className="btn btn-cta-white"
            >
              📲 Order Now on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <ReviewCards />
    </>
  )
}
