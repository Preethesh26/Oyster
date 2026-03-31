/**
 * Send email via Brevo Transactional Email API
 * Docs: https://developers.brevo.com/reference/sendtransacemail
 */
export async function sendEmail({ name, email, phone, subject, message }) {
  const apiKey = import.meta.env.VITE_BREVO_API_KEY

  const body = {
    sender: { name: `${name} (via Hima Organic Website)`, email: 'himamashroomfarms@gmail.com' },
    to: [{ email: 'himamashroomfarms@gmail.com', name: 'Hima Organic' }],
    replyTo: { email, name },
    subject: `[Website Enquiry] ${subject || 'New message'} — from ${name}`,
    htmlContent: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e0e0e0;border-radius:12px;">
        <h2 style="color:#4e7a52;margin:0 0 4px;">New Enquiry — Hima Organic</h2>
        <p style="color:#888;font-size:13px;margin:0 0 20px;">Submitted via website contact form</p>
        <hr style="border:none;border-top:1px solid #eee;margin:0 0 20px"/>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#888;width:90px;vertical-align:top;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#4e7a52;">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Subject</td><td style="padding:8px 0;">${subject || '—'}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="font-size:13px;color:#888;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Message</p>
        <p style="font-size:14px;color:#333;line-height:1.75;white-space:pre-wrap;margin:0;">${message}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="font-size:12px;color:#bbb;margin:0;">
          💡 Hit <strong>Reply</strong> to respond directly to ${name} at ${email}
        </p>
      </div>
    `,
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Failed to send email')
  }

  return true
}
