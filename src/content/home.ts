import { COMPANY_NAME, PRODUCT_NAME } from '@/config/site'
import type { Cta, Feature, Stat } from './types'

/**
 * Landing page content.
 * Placeholder copy — replace with final marketing text when available.
 */
export const home = {
  hero: {
    eyebrow: 'Software for regulated supply chains',
    title: 'Trust, traced end to end.',
    subtitle: `${COMPANY_NAME} builds software that gives regulated and high-value supply chains a single, verifiable record of product identity, custody and compliance — from producer to consumer.`,
    primaryCta: { label: `Explore ${PRODUCT_NAME}`, href: '/products/nextrazer' } as Cta,
    secondaryCta: { label: 'Talk to us', href: '/contact' } as Cta,
  },

  sectors: {
    label: 'Built for sectors where authenticity matters',
    items: [
      'Pharmaceuticals',
      'Agriculture',
      'Food & Beverage',
      'Alcohol',
      'Chemicals',
      'Luxury goods',
      'Electronics',
      'Textiles',
    ],
  },

  services: {
    eyebrow: 'What we do',
    title: 'From product strategy to production-grade platforms',
    subtitle:
      'We design, build and operate software for organisations that need to prove where a product came from, who handled it and whether it meets the rules.',
    items: [
      {
        icon: 'layers',
        title: 'Product engineering',
        description:
          'Cloud-native web platforms and APIs built on proven, enterprise-ready technology with security designed in from day one.',
      },
      {
        icon: 'mobile',
        title: 'Mobile-first field tools',
        description:
          'Scan, verify, receive and transfer from any device. Our mobile workflows are designed for warehouses, farms, clinics and shop floors.',
      },
      {
        icon: 'shield',
        title: 'Trust & integrity',
        description:
          'Cryptographically signed, tamper-evident event records that participants, auditors and regulators can independently verify.',
      },
      {
        icon: 'plug',
        title: 'Integration & consulting',
        description:
          'We connect to ERP, warehouse, government and partner systems, and help you map your compliance workflows to software.',
      },
    ] as Feature[],
  },

  product: {
    eyebrow: 'Flagship product',
    title: PRODUCT_NAME,
    subtitle:
      'A configurable traceability, compliance and verification platform. One product, many sectors — each with its own product types, participants, licences, transfer rules and verification policies.',
    bullets: [
      'Sector configuration engine — no code changes per industry',
      'Unique identity for every unit, batch, container or shipment',
      'Ownership and custody transfer with rule validation',
      'Public and authenticated verification by QR, barcode or NFC',
      'Web dashboards for regulators, producers, distributors and auditors',
    ],
    cta: { label: `Learn more about ${PRODUCT_NAME}`, href: '/products/nextrazer' } as Cta,
  },

  principles: {
    eyebrow: 'How we work',
    title: 'Principles that shape everything we ship',
    items: [
      {
        icon: 'settings',
        title: 'Config-first',
        description: 'Industry rules are configuration, not code. The same platform serves pharma, food, chemicals and more.',
      },
      {
        icon: 'lock',
        title: 'Security-first',
        description: 'Role-based access, encrypted sensitive data, and append-only audit trails are the baseline, not an add-on.',
      },
      {
        icon: 'mobile',
        title: 'Mobile-first',
        description: 'Field operations are designed into the product from the first prototype, not bolted on later.',
      },
      {
        icon: 'plug',
        title: 'Integration-ready',
        description: 'API-first design so ERP, IoT, government and partner systems can plug in when you are ready.',
      },
    ] as Feature[],
  },

  stats: [
    { value: '8+', label: 'Sectors supported out of the box' },
    { value: '1', label: 'Shared, verifiable record per asset' },
    { value: '100%', label: 'Of critical events signed and chained' },
    { value: '24/7', label: 'Public product verification' },
  ] as Stat[],

  cta: {
    title: 'Let’s build a more transparent supply chain.',
    subtitle: 'Tell us about your products, participants and compliance requirements. We will show you how it maps to the platform.',
    primaryCta: { label: 'Request a demo', href: '/contact' } as Cta,
    secondaryCta: { label: 'About the company', href: '/about' } as Cta,
  },
}
