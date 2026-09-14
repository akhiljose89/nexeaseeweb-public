import { COMPANY_NAME, PRODUCT_NAME } from '@/config/site'
import type { Cta, Feature } from './types'

/**
 * About page content.
 * Placeholder copy — replace with the company’s real story, team and values.
 */
export const about = {
  hero: {
    eyebrow: 'About us',
    title: `We make supply chains provable.`,
    subtitle: `${COMPANY_NAME} is a software company focused on traceability, compliance and verification for regulated and high-value supply chains.`,
  },

  mission: {
    title: 'Our mission',
    text: `To give every organisation — regulators, producers, distributors, retailers and the public — a shared, trustworthy answer to three questions: Where did this product come from? Who has handled it? Does it meet the rules?`,
  },

  vision: {
    title: 'Our vision',
    text: `A world where counterfeit, diluted, expired or uncertified goods cannot quietly enter the market, because proving authenticity is as simple as scanning a code.`,
  },

  story: {
    eyebrow: 'Our story',
    title: 'Started with one industry. Built for all of them.',
    paragraphs: [
      `${COMPANY_NAME} began by looking closely at how medicines move from manufacturer to patient — and at how much of that journey still depends on paper, phone calls and trust. The same gaps kept appearing in agriculture, food, alcohol, chemicals, luxury goods and electronics.`,
      `Rather than build a separate product for each industry, we designed ${PRODUCT_NAME} as a configurable platform: sectors define their own product types, participants, licences, transfer rules and verification policies, while the core stays the same.`,
      `Today we combine product engineering, mobile-first field tools and a cryptographic integrity layer to help organisations replace fragmented compliance processes with a single verifiable record.`,
    ],
  },

  values: {
    eyebrow: 'What we believe',
    title: 'Values we hold ourselves to',
    items: [
      {
        icon: 'shield',
        title: 'Trust is earned in the details',
        description: 'Every event, signature and audit entry matters. We build so that no one — including us — can quietly rewrite history.',
      },
      {
        icon: 'settings',
        title: 'Configure, don’t fork',
        description: 'Industry differences belong in configuration. One well-built core serves many sectors better than ten half-built copies.',
      },
      {
        icon: 'users',
        title: 'Design for the field',
        description: 'Software must work for the person scanning a pallet in a cold room, not only for the analyst at a desk.',
      },
      {
        icon: 'lock',
        title: 'Security by default',
        description: 'Least privilege, encrypted sensitive data, and fail-closed verification are baseline requirements.',
      },
      {
        icon: 'chart',
        title: 'Outcomes over output',
        description: 'We measure success by fewer counterfeit incidents, faster audits and simpler compliance — not by features shipped.',
      },
      {
        icon: 'plug',
        title: 'Open to integrate',
        description: 'We expect to live alongside ERP, warehouse, government and partner systems, and design our APIs accordingly.',
      },
    ] as Feature[],
  },

  approach: {
    eyebrow: 'How we work with clients',
    title: 'A practical path from idea to production',
    steps: [
      { title: 'Discover', description: 'We map your products, participants, rules and compliance workflows together.' },
      { title: 'Configure', description: 'Your sector, product types, roles and verification policies are set up on the platform.' },
      { title: 'Pilot', description: 'A focused pilot with real assets and real participants validates the workflows end to end.' },
      { title: 'Scale', description: 'Roll out to more sites, partners and sectors, and integrate with your existing systems.' },
    ],
  },

  team: {
    eyebrow: 'Our team',
    title: 'Engineers, designers and domain specialists',
    text: `We are a multidisciplinary team with experience in enterprise software, mobile applications, cloud infrastructure, information security and regulated-industry compliance. Team profiles will be added here.`,
  },

  cta: {
    title: 'Want to work with us?',
    subtitle: 'Whether you are a regulator, a producer or a technology partner, we would love to hear from you.',
    primaryCta: { label: 'Get in touch', href: '/contact' } as Cta,
    secondaryCta: { label: `See ${PRODUCT_NAME}`, href: '/products/nextrazer' } as Cta,
  },
}
