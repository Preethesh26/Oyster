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
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrMsg('')
    try {
      await sendEmail(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label center reveal">Get in Touch</div>
          <h1 className="center reveal">Contact Us</h1>
          <p className="center reveal page-hero-sub">Orders, bulk enquiries, or just a hello — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact" style={{ paddingTop: 80 }}>
        <div className="container contact-grid">

          {/* Info */}
          <div className="contact-info reveal reveal-left">
            <div className="section-label">Reach Us</div>
            <h2>Ready to Order?</h2>
            <p>We supply fresh oyster mushrooms to households, restaurants, and retailers across Puttur and Dakshina Kannada.</p>
            <ul className="contact-details">
              <li><span>📍</span><span>Berike, Kodimbadi Post & Village,<br />Puttur Taluk, Dakshina Kannada – 574325</span></li>
              <li><span>📞</span><a href="tel:+919019417813">+91 90194 17813</a></li>
              <li><span>✉️</span><a href="mailto:himamashroomfarms@gmail.com">himamashroomfarms@gmail.com</a></li>
            </ul>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noreferrer"
              className="btn btn-dark"
              style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              📲 Chat on WhatsApp
            </a>
            <div className="map-wrap" style={{ marginTop: 32 }}>
              <iframe
                title="Hima Organic Farm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31154.0!2d75.5379!3d12.7605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a4b0e0e0e0e1%3A0x1234567890abcdef!2sPuttur%2C+Karnataka+574325!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%" height="280"
                style={{ border: 0, borderRadius: 16 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form className="contact-form reveal reveal-right" onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: 16, color: 'var(--text)' }}>Send a Message</h3>

            {status === 'success' && (
              <div className="form-success">
                ✅ Message sent! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">
                ❌ {errMsg}
              </div>
            )}

            <div className="form-row">
              <input
                type="text" placeholder="Your name" required
                value={form.name} onChange={set('name')}
              />
              <input
                type="email" placeholder="Your email" required
                value={form.email} onChange={set('email')}
              />
            </div>
            <input
              type="tel" placeholder="Phone number (optional)"
              value={form.phone} onChange={set('phone')}
            />
            <input
              type="text" placeholder="Subject (e.g. Bulk order, Home delivery)"
              value={form.subject} onChange={set('subject')}
            />
            <textarea
              placeholder="Tell us what you need..." rows={5} required
              value={form.message} onChange={set('message')}
            />
            <button
              type="submit"
              className="btn btn-dark full-width"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>

        </div>
      </section>
    </>
  )
}
