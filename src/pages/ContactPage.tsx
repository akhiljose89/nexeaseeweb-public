import { useState, type FormEvent } from 'react'
import { PageHero } from '@/components/Blocks'
import { Icon } from '@/components/Icons'
import { site } from '@/config/site'
import { contact } from '@/content/contact'
import { usePageMeta } from '@/hooks/usePageMeta'

export function ContactPage() {
  usePageMeta('Contact', contact.hero.subtitle)
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: wire to a form backend / API endpoint. For now, show a confirmation.
    setSent(true)
  }

  return (
    <>
      <PageHero eyebrow={contact.hero.eyebrow} title={contact.hero.title} subtitle={contact.hero.subtitle} />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="form">
              {sent ? (
                <div className="form__success" role="status">
                  <div className="card__icon card__icon--accent">
                    <Icon name="check" />
                  </div>
                  <h2>{contact.form.successTitle}</h2>
                  <p style={{ color: 'var(--muted)' }}>{contact.form.successText}</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate={false}>
                  <h2>{contact.form.title}</h2>
                  <div className="form__row">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input id="name" name="name" type="text" autoComplete="name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work email</label>
                      <input id="email" name="email" type="email" autoComplete="email" required />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="field">
                      <label htmlFor="company">Company</label>
                      <input id="company" name="company" type="text" autoComplete="organization" />
                    </div>
                    <div className="field">
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" name="subject" defaultValue={contact.form.subjects[0]}>
                        {contact.form.subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required placeholder="Tell us about your products, participants and compliance needs." />
                  </div>
                  <button type="submit" className="btn btn--primary">
                    {contact.form.submitLabel}
                    <Icon name="arrow" />
                  </button>
                  <p className="form__note">We will only use your details to respond to your enquiry.</p>
                </form>
              )}
            </div>

            <aside style={{ display: 'grid', gap: 40 }}>
              <div className="info-list">
                {contact.reasons.map((r) => (
                  <div key={r.title} className="info-item">
                    <div className="card__icon">
                      <Icon name={r.icon} />
                    </div>
                    <div>
                      <h3>{r.title}</h3>
                      <p>{r.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-list">
                <div className="info-item">
                  <div className="card__icon card__icon--accent">
                    <Icon name="mail" />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="card__icon card__icon--accent">
                    <Icon name="phone" />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <a href={`tel:${site.contact.phone.replace(/\s+/g, '')}`}>{site.contact.phone}</a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="card__icon card__icon--accent">
                    <Icon name="pin" />
                  </div>
                  <div>
                    <h3>Office</h3>
                    <p>
                      {site.contact.addressLines.map((l, i) => (
                        <span key={l}>
                          {l}
                          {i < site.contact.addressLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
