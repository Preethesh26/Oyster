import { useEffect, useState } from 'react'
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '../data'
import { sendEmail } from '../lib/sendEmail'

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

export default function Contact() {
  useScrollReveal()
  const [form, setForm]     = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending'); setErrMsg('')
    try {
      await sendEmail(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error'); setErrMsg(err.message || 'Something went wrong.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="ct-hero">
        <div className="container">
          <div className="section-label center reveal">Get in Touch</div>
          <h1 className="center reveal">Contact Us</h1>
          <p className="center reveal ct-hero-sub">Orders, bulk enquiries, or just a hello — we'd love to hear from you.</p>
        </div>
      </section>

      {/* Info cards row */}
      <section className="ct-cards-section">
        <div className="container">
          <div className="ct-cards reveal">
            <div className="ct-card">
              <div className="ct-card-icon">📍</div>
              <h4>Visit Us</h4>
              <p>Berike, Kodimbadi Post & Village<br />Puttur Taluk, DK – 574325</p>
            </div>
            <div className="ct-card">
              <div className="ct-card-icon">📞</div>
              <h4>Call Us</h4>
              <p><a href="tel:+919019417813">+91 90194 17813</a></p>
              <p style={{fontSize:'0.8rem',marginTop:4}}>Mon – Sat, 8am – 6pm</p>
            </div>
            <div className="ct-card">
              <div className="ct-card-icon">✉️</div>
              <h4>Email Us</h4>
              <p><a href="mailto:himamashroomfarms@gmail.com">himamashroomfarms@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="ct-main">
        <div className="container ct-grid">

          {/* Form */}
          <div className="ct-form-wrap reveal reveal-left">
            <div className="section-label">Send a Message</div>
            <h2>We'll get back to you<br />within 24 hours</h2>

            {status === 'success' && <div className="form-success">✅ Message sent! We'll get back to you soon.</div>}
            {status === 'error'   && <div className="form-error">❌ {errMsg}</div>}

            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="ct-field">
                  <label>Your Name *</label>
                  <input type="text" placeholder="e.g. Ravi Kumar" required value={form.name} onChange={set('name')} />
                </div>
                <div className="ct-field">
                  <label>Email Address *</label>
                  <input type="email" placeholder="you@example.com" required value={form.email} onChange={set('email')} />
                </div>
              </div>
              <div className="form-row">
                <div className="ct-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={set('phone')} />
                </div>
                <div className="ct-field">
                  <label>Subject</label>
                  <input type="text" placeholder="e.g. Bulk order, Home delivery" value={form.subject} onChange={set('subject')} />
                </div>
              </div>
              <div className="ct-field">
                <label>Message *</label>
                <textarea placeholder="Tell us what you need — variety, quantity, delivery location..." rows={5} required value={form.message} onChange={set('message')} />
              </div>
              <button type="submit" className="btn btn-dark full-width ct-submit" disabled={status === 'sending'}>
                {status === 'sending' ? '⏳ Sending…' : 'Send Message →'}
              </button>
              <div className="ct-or"><span>or</span></div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank" rel="noreferrer"
                className="ct-wa-full"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order on WhatsApp
              </a>
            </form>
          </div>

          {/* Map */}
          <div className="ct-map-wrap reveal reveal-right">
            <div className="section-label">Find Us</div>
            <h2>Kodimbadi, Puttur</h2>
            <p style={{marginBottom:24}}>Berike village, Puttur Taluk, Dakshina Kannada — in the heart of coastal Karnataka.</p>
            <div className="ct-map">
              <iframe
                title="Hima Organic Farm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31154.0!2d75.5379!3d12.7605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a4b0e0e0e0e1%3A0x1234567890abcdef!2sPuttur%2C+Karnataka+574325!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
