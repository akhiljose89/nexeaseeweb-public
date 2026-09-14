import { Button, Checklist, CtaBand, PageHero } from '@/components/Blocks'
import { TraceGraphic } from '@/components/TraceGraphic'
import { products } from '@/content/products'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useReveal } from '@/hooks/useReveal'

export function ProductsPage() {
  usePageMeta('Products', products.hero.subtitle)
  useReveal()

  return (
    <>
      <PageHero eyebrow={products.hero.eyebrow} title={products.hero.title} subtitle={products.hero.subtitle} />

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 32 }}>
          {products.items.map((p) => (
            <article key={p.slug} className="product-card reveal">
              <div>
                {p.badge && <span className="badge">{p.badge}</span>}
                <h2>{p.name}</h2>
                <p className="tagline">{p.tagline}</p>
                <p className="desc">{p.description}</p>
                <Checklist items={p.highlights} />
                <div className="cluster" style={{ marginTop: 28 }}>
                  <Button cta={p.cta} variant="primary" />
                </div>
              </div>
              <div>
                <TraceGraphic />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title={products.custom.title} subtitle={products.custom.text} primaryCta={products.custom.cta} />
    </>
  )
}
