import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Cta, Faq, Feature, Sector, Stat, Step } from '@/content/types'
import { Icon } from './Icons'

/* ---------- Small helpers ---------- */

/** Renders an internal <Link>, an in-page anchor, or an external <a> depending on href. */
export function SmartLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export function Button({ cta, variant = 'primary' }: { cta: Cta; variant?: 'primary' | 'accent' | 'outline' | 'ghost-light' }) {
  return (
    <SmartLink href={cta.href} className={`btn btn--${variant}`}>
      {cta.label}
      <Icon name="arrow" />
    </SmartLink>
  )
}

export function SectionHead({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  )
}

/* ---------- Content blocks ---------- */

export function FeatureGrid({ items, columns = 3, accent = false }: { items: Feature[]; columns?: 2 | 3 | 4; accent?: boolean }) {
  return (
    <div className={`grid grid--${columns}`}>
      {items.map((f) => (
        <article key={f.title} className="card">
          <div className={`card__icon${accent ? ' card__icon--accent' : ''}`}>
            <Icon name={f.icon} />
          </div>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </article>
      ))}
    </div>
  )
}

export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title} className="step">
          <span className="step__num">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </li>
      ))}
    </ol>
  )
}

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.label} className="stat">
          <div className="stat__value">{s.value}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((t) => (
        <li key={t}>
          <Icon name="check" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export function SectorGrid({ sectors }: { sectors: Sector[] }) {
  return (
    <div className="grid grid--2">
      {sectors.map((s) => (
        <article key={s.name} className="sector">
          <div className="sector__icon">
            <Icon name={s.icon} />
          </div>
          <div>
            <h3>{s.name}</h3>
            <dl>
              <div>
                <dt>Assets: </dt>
                <dd>{s.assets}</dd>
              </div>
              <div>
                <dt>Rules: </dt>
                <dd>{s.rules}</dd>
              </div>
            </dl>
          </div>
        </article>
      ))}
    </div>
  )
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <details key={f.question} className="faq__item">
          <summary>
            {f.question}
            <Icon name="plus" />
          </summary>
          <p>{f.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function CtaBand({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  title: string
  subtitle?: string
  primaryCta: Cta
  secondaryCta?: Cta
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-band">
          <h2 className="h2">{title}</h2>
          {subtitle && <p className="lead">{subtitle}</p>}
          <div className="cluster">
            <Button cta={primaryCta} variant="primary" />
            {secondaryCta && <Button cta={secondaryCta} variant="ghost-light" />}
          </div>
        </div>
      </div>
    </section>
  )
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  actions?: ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="h1">{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
        {actions && <div className="cluster page-hero__actions">{actions}</div>}
      </div>
    </section>
  )
}

export function TechGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="tech">
      {items.map((t) => (
        <div key={t.label} className="tech__item">
          <div className="tech__label">{t.label}</div>
          <div className="tech__value">{t.value}</div>
        </div>
      ))}
    </div>
  )
}
