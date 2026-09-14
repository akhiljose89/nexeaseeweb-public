import { COMPANY_NAME, PRODUCT_NAME } from '@/config/site'
import type { Cta, Faq, Feature, Sector, Step } from './types'

/**
 * Products overview page content.
 */
export const products = {
  hero: {
    eyebrow: 'Products',
    title: 'Software that makes supply chains provable.',
    subtitle: `Our products are built on one conviction: proving where a product came from, who handled it and whether it meets the rules should be simple, configurable and verifiable by anyone who needs to know.`,
  },

  items: [
    {
      slug: 'nextrazer',
      name: PRODUCT_NAME,
      badge: 'Flagship',
      tagline: 'Configurable traceability, compliance and verification platform',
      description:
        'One platform for many sectors. Register products, issue licences and certificates, transfer custody between participants, and let anyone verify authenticity with a scan.',
      highlights: [
        'Sector configuration engine',
        'Unique asset identity (UUID, QR, barcode, NFC)',
        'Custody transfer with rule validation',
        'Public & authenticated verification',
        'Tamper-evident event history',
      ],
      cta: { label: `Explore ${PRODUCT_NAME}`, href: '/products/nextrazer' } as Cta,
    },
  ],

  custom: {
    title: 'Need something tailored?',
    text: `Beyond our products, ${COMPANY_NAME} delivers custom traceability, compliance and integration solutions for organisations with specific regulatory or operational requirements.`,
    cta: { label: 'Discuss a custom solution', href: '/contact' } as Cta,
  },
}

/**
 * NexTrazer product page content.
 * Placeholder copy derived from the product’s positioning — replace with final text.
 */
export const nextrazer = {
  hero: {
    eyebrow: `${PRODUCT_NAME} by ${COMPANY_NAME}`,
    title: 'One verifiable record for every product, batch and shipment.',
    subtitle: `${PRODUCT_NAME} is a configurable traceability, compliance and verification platform for regulated and high-value supply chains. Define your sector’s products, participants, licences and rules — then register, transfer and verify assets with a shared, tamper-evident history.`,
    primaryCta: { label: 'Request a demo', href: '/contact' } as Cta,
    secondaryCta: { label: 'See how it works', href: '#how-it-works' } as Cta,
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Every regulated supply chain struggles with the same questions',
    items: [
      {
        icon: 'eye',
        title: 'No transparency',
        description: 'Limited visibility over product origin, movement, custody and authenticity across organisations.',
      },
      {
        icon: 'alert',
        title: 'Counterfeit and uncertified goods',
        description: 'Fake, diluted, expired, stolen or uncertified products entering the market undetected.',
      },
      {
        icon: 'file',
        title: 'Manual, fragmented compliance',
        description: 'Licences, certificates and audits handled by paper, email and spreadsheets between regulators and businesses.',
      },
      {
        icon: 'clock',
        title: 'Hard to prove custody',
        description: 'Difficulty proving who owned or handled a product, batch or certificate at a specific point in time.',
      },
    ] as Feature[],
  },

  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Everything you need to trace, comply and verify',
    subtitle: 'Built as a sector-configurable product, not a single-industry application.',
    items: [
      {
        icon: 'settings',
        title: 'Sector configuration engine',
        description: 'Define product categories, types, custom attributes, statuses, roles and verification fields per sector — without code changes.',
      },
      {
        icon: 'tag',
        title: 'Unique asset identity',
        description: 'Every unit, batch, container, pallet or shipment gets a UUID and optional QR, barcode or NFC identifier.',
      },
      {
        icon: 'certificate',
        title: 'Licences, certificates & permits',
        description: 'Issue, renew, expire and revoke authorisations for organisations and individuals, and enforce them on every action.',
      },
      {
        icon: 'transfer',
        title: 'Ownership & custody transfer',
        description: 'Transfer assets between participants with rule validation, acceptance workflows and a full audit history.',
      },
      {
        icon: 'scan',
        title: 'Public & authenticated verification',
        description: 'Anyone can scan a code to verify identity, origin, status and certificates. Authorised users see more.',
      },
      {
        icon: 'shield',
        title: 'Integrity layer',
        description: 'Critical lifecycle events are cryptographically signed by the participant and chained so that history cannot be silently altered.',
      },
      {
        icon: 'dashboard',
        title: 'Web dashboards',
        description: 'Role-specific dashboards for platform admins, regulators, producers, distributors, retailers and auditors.',
      },
      {
        icon: 'mobile',
        title: 'Mobile app',
        description: 'Scan, verify, receive, transfer and record field data — including logistics readings — from a phone.',
      },
      {
        icon: 'plug',
        title: 'APIs & integration',
        description: 'REST APIs for web, mobile and future ERP, warehouse, IoT, government and partner integrations.',
      },
    ] as Feature[],
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'From configuration to consumer verification in four steps',
    steps: [
      {
        title: 'Configure your sector',
        description: 'Set up product types, attributes, participant roles, licences and transfer rules that match your industry.',
      },
      {
        title: 'Register assets',
        description: 'Producers with a valid licence create units, batches or shipments — each with a unique, scannable identity.',
      },
      {
        title: 'Transfer custody',
        description: 'Move assets between participants. Every transfer is validated against the rules and recorded in the history.',
      },
      {
        title: 'Verify anywhere',
        description: 'Regulators, partners and the public verify authenticity, status and certificates via web or mobile.',
      },
    ] as Step[],
  },

  integrity: {
    eyebrow: 'Trust & integrity',
    title: 'A record that no single party can rewrite',
    subtitle: 'Three guarantees that make the history trustworthy — for participants, auditors and regulators alike.',
    items: [
      {
        icon: 'signature',
        title: 'Non-repudiation',
        description: 'Each participant signs their own events with a key only they hold. Nobody can deny what they submitted.',
      },
      {
        icon: 'link',
        title: 'Tamper-evidence',
        description: 'Every event references the one before it. Editing history is mathematically detectable.',
      },
      {
        icon: 'globe',
        title: 'Shared truth',
        description: 'Periodic signed checkpoints are shared with participants and auditors, so independent proof exists outside our systems.',
      },
    ] as Feature[],
  },

  sectors: {
    eyebrow: 'Sectors',
    title: 'One platform, configured per industry',
    subtitle: 'Each sector defines its own assets, participants and rules.',
    items: [
      { name: 'Pharmaceuticals', icon: 'pill', assets: 'Medicine unit, batch, package', rules: 'Licences, expiry, recall, prescription rules' },
      { name: 'Agriculture', icon: 'leaf', assets: 'Crop batch, seed lot, fertiliser', rules: 'Origin, organic certificate, harvest date' },
      { name: 'Alcohol', icon: 'bottle', assets: 'Bottle, batch, shipment', rules: 'Excise, age restriction, import/export' },
      { name: 'Chemicals', icon: 'flask', assets: 'Drum, container, batch', rules: 'Hazard class, safety certificate, restricted transfer' },
      { name: 'Food', icon: 'food', assets: 'Batch, pallet, packaged item', rules: 'Allergens, cold chain, expiry, recall' },
      { name: 'Luxury goods', icon: 'gem', assets: 'Item, serial number', rules: 'Authenticity, ownership history, resale proof' },
      { name: 'Electronics', icon: 'chip', assets: 'Component, device, serial number', rules: 'Warranty, origin, repair history' },
      { name: 'Textiles', icon: 'textile', assets: 'Fabric batch, garment', rules: 'Material origin, sustainability certificate' },
    ] as Sector[],
  },

  audiences: {
    eyebrow: 'Who it’s for',
    title: 'Every participant in the chain',
    items: [
      { icon: 'building', title: 'Regulators & certifiers', description: 'Issue and revoke licences, review compliance reports, and audit the full history.' },
      { icon: 'factory', title: 'Producers', description: 'Register products and batches under valid authorisations and prove origin.' },
      { icon: 'truck', title: 'Distributors & logistics', description: 'Receive, transfer and record transport data across every leg of the journey.' },
      { icon: 'store', title: 'Retailers', description: 'Confirm what arrives is genuine and compliant before it reaches the customer.' },
      { icon: 'search', title: 'Auditors', description: 'Read-only, independently verifiable access to the compliance history.' },
      { icon: 'users', title: 'Consumers & the public', description: 'Scan a code to check authenticity, origin and status in seconds.' },
    ] as Feature[],
  },

  technology: {
    eyebrow: 'Built on proven technology',
    title: 'Enterprise-ready foundations',
    items: [
      { label: 'Backend', value: 'Java / Spring Boot' },
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'Web', value: 'React / TypeScript' },
      { label: 'Mobile', value: 'Cross-platform app' },
      { label: 'Security', value: 'OAuth2 / OIDC, role-based access' },
      { label: 'Deployment', value: 'Cloud-native, containerised' },
    ],
  },

  faqs: [
    {
      question: `Is ${PRODUCT_NAME} limited to one industry?`,
      answer: 'No. It is designed as a sector-configurable platform. Each sector defines its own product types, participants, licences, transfer rules and verification fields.',
    },
    {
      question: 'Do consumers need an account to verify a product?',
      answer: 'No. Public verification works by scanning a QR code or entering an identifier. Authenticated users can see additional, role-specific information.',
    },
    {
      question: 'How is the history protected from tampering?',
      answer: 'Critical events are signed by the submitting participant and chained together, and signed checkpoints are shared with participants and auditors so independent proof exists.',
    },
    {
      question: 'Can it integrate with our existing systems?',
      answer: 'Yes. The platform is API-first and designed for integration with ERP, warehouse, IoT, government and partner systems.',
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Yes. The mobile app supports scanning, verification, receipt, transfer and field data entry, and is part of the product from the prototype stage.',
    },
  ] as Faq[],

  cta: {
    title: `See ${PRODUCT_NAME} in action`,
    subtitle: 'Book a walkthrough with our team. We will configure a sample sector and show the full flow from registration to verification.',
    primaryCta: { label: 'Request a demo', href: '/contact' } as Cta,
    secondaryCta: { label: 'Contact sales', href: '/contact' } as Cta,
  },
}
