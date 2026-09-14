import { Button, Checklist, CtaBand, FeatureGrid, SectionHead, Stats } from '@/components/Blocks'
import { Icon } from '@/components/Icons'
import { TraceGraphic } from '@/components/TraceGraphic'
import { home } from '@/content/home'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useReveal } from '@/hooks/useReveal'

export function HomePage() {
  usePageMeta('', home.hero.subtitle)
  useReveal()

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <span className="eyebrow">{home.hero.eyebrow}</span>
              <h1 className="h1">{home.hero.title}</h1>
              <p className="lead">{home.hero.subtitle}</p>
              <div className="cluster hero__actions">
                <Button cta={home.hero.primaryCta} variant="accent" />
                <Button cta={home.hero.secondaryCta} variant="ghost-light" />
              </div>
            </div>
            <div className="hero__art">
              <TraceGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* Sector strip */}
      <div className="strip">
        <div className="container">
          <p className="strip__label">{home.sectors.label}</p>
          <ul className="chips">
            {home.sectors.items.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={home.services.eyebrow} title={home.services.title} subtitle={home.services.subtitle} />
          <div className="reveal">
            <FeatureGrid items={home.services.items} columns={4} />
          </div>
        </div>
      </section>

      {/* Flagship product */}
      <section className="section section--soft">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">{home.product.eyebrow}</span>
              <h2 className="h2">{home.product.title}</h2>
              <p className="lead">{home.product.subtitle}</p>
              <Checklist items={home.product.bullets} />
              <div className="cluster" style={{ marginTop: 28 }}>
                <Button cta={home.product.cta} variant="primary" />
              </div>
            </div>
            <div className="reveal">
              <div className="visual">
                <ProductPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section section--navy">
        <div className="container">
          <SectionHead eyebrow={home.principles.eyebrow} title={home.principles.title} center />
          <div className="reveal">
            <FeatureGrid items={home.principles.items} columns={4} />
          </div>
          <div style={{ marginTop: 40 }} className="reveal">
            <Stats stats={home.stats} />
          </div>
        </div>
      </section>

      <CtaBand
        title={home.cta.title}
        subtitle={home.cta.subtitle}
        primaryCta={home.cta.primaryCta}
        secondaryCta={home.cta.secondaryCta}
      />
    </>
  )
}

/** Small mock "verification result" panel used as a product preview. */
function ProductPreview() {
  const rows = [
    ['Asset', 'Batch #PH-2031-0417'],
    ['Product type', 'Medicine · 20 mg tablets'],
    ['Origin', 'Licensed manufacturer'],
    ['Current custodian', 'Regional distributor'],
    ['Status', 'Active · not recalled'],
  ]
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: 'rgba(25,195,125,0.15)',
            color: '#19c37d',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="check" width={22} height={22} />
        </span>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#fff' }}>Verified authentic</div>
          <div style={{ fontSize: 13, color: 'var(--on-navy-muted)' }}>6 signed events · chain intact</div>
        </div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        {rows.map(([k, v]) => (
          <div
            key={k}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16,
              padding: '10px 12px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontSize: 14,
            }}
          >
            <span style={{ color: 'var(--on-navy-muted)' }}>{k}</span>
            <span style={{ color: '#fff', fontWeight: 600, textAlign: 'right' }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['Producer', 'Regulator', 'Distributor'].map((p, i) => (
          <span
            key={p}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 10px',
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 600,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#e8eef5',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#19c37d', opacity: 1 - i * 0.25 }} />
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}
