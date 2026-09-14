import { Button, CtaBand, FaqList, FeatureGrid, PageHero, SectionHead, SectorGrid, Steps, TechGrid } from '@/components/Blocks'
import { nextrazer } from '@/content/products'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useReveal } from '@/hooks/useReveal'
import { PRODUCT_NAME } from '@/config/site'

export function NexTrazerPage() {
  usePageMeta(PRODUCT_NAME, nextrazer.hero.subtitle)
  useReveal()

  return (
    <>
      <PageHero
        eyebrow={nextrazer.hero.eyebrow}
        title={nextrazer.hero.title}
        subtitle={nextrazer.hero.subtitle}
        actions={
          <>
            <Button cta={nextrazer.hero.primaryCta} variant="accent" />
            <Button cta={nextrazer.hero.secondaryCta} variant="ghost-light" />
          </>
        }
      />

      {/* Problem */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={nextrazer.problem.eyebrow} title={nextrazer.problem.title} />
          <div className="reveal">
            <FeatureGrid items={nextrazer.problem.items} columns={4} />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--soft" id="capabilities">
        <div className="container">
          <SectionHead
            eyebrow={nextrazer.capabilities.eyebrow}
            title={nextrazer.capabilities.title}
            subtitle={nextrazer.capabilities.subtitle}
            center
          />
          <div className="reveal">
            <FeatureGrid items={nextrazer.capabilities.items} columns={3} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how-it-works">
        <div className="container">
          <SectionHead eyebrow={nextrazer.howItWorks.eyebrow} title={nextrazer.howItWorks.title} />
          <div className="reveal">
            <Steps steps={nextrazer.howItWorks.steps} />
          </div>
        </div>
      </section>

      {/* Integrity */}
      <section className="section section--navy">
        <div className="container">
          <SectionHead
            eyebrow={nextrazer.integrity.eyebrow}
            title={nextrazer.integrity.title}
            subtitle={nextrazer.integrity.subtitle}
            center
          />
          <div className="reveal">
            <FeatureGrid items={nextrazer.integrity.items} columns={3} />
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={nextrazer.sectors.eyebrow} title={nextrazer.sectors.title} subtitle={nextrazer.sectors.subtitle} />
          <div className="reveal">
            <SectorGrid sectors={nextrazer.sectors.items} />
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow={nextrazer.audiences.eyebrow} title={nextrazer.audiences.title} center />
          <div className="reveal">
            <FeatureGrid items={nextrazer.audiences.items} columns={3} accent />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={nextrazer.technology.eyebrow} title={nextrazer.technology.title} />
          <TechGrid items={nextrazer.technology.items} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" center />
          <FaqList faqs={nextrazer.faqs} />
        </div>
      </section>

      <CtaBand
        title={nextrazer.cta.title}
        subtitle={nextrazer.cta.subtitle}
        primaryCta={nextrazer.cta.primaryCta}
        secondaryCta={nextrazer.cta.secondaryCta}
      />
    </>
  )
}
