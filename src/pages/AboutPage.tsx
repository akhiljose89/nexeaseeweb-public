import { Button, CtaBand, FeatureGrid, PageHero, SectionHead, Steps } from '@/components/Blocks'
import { about } from '@/content/about'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useReveal } from '@/hooks/useReveal'

export function AboutPage() {
  usePageMeta('About', about.hero.subtitle)
  useReveal()

  return (
    <>
      <PageHero eyebrow={about.hero.eyebrow} title={about.hero.title} subtitle={about.hero.subtitle} />

      {/* Mission & vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2 reveal">
            <div className="callout">
              <h3>{about.mission.title}</h3>
              <p>{about.mission.text}</p>
            </div>
            <div className="callout callout--accent">
              <h3>{about.vision.title}</h3>
              <p>{about.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section section--soft">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">{about.story.eyebrow}</span>
              <h2 className="h2">{about.story.title}</h2>
            </div>
            <div className="prose reveal">
              {about.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={about.values.eyebrow} title={about.values.title} center />
          <div className="reveal">
            <FeatureGrid items={about.values.items} columns={3} />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow={about.approach.eyebrow} title={about.approach.title} />
          <div className="reveal">
            <Steps steps={about.approach.steps} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">{about.team.eyebrow}</span>
            <h2 className="h2">{about.team.title}</h2>
            <p className="lead">{about.team.text}</p>
          </div>
          <div className="cluster" style={{ justifyContent: 'center' }}>
            <Button cta={{ label: 'Join our team', href: '/contact' }} variant="outline" />
          </div>
        </div>
      </section>

      <CtaBand
        title={about.cta.title}
        subtitle={about.cta.subtitle}
        primaryCta={about.cta.primaryCta}
        secondaryCta={about.cta.secondaryCta}
      />
    </>
  )
}
