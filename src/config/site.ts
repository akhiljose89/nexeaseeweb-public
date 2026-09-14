/**
 * Site-wide configuration.
 *
 * Everything that is likely to change when the real content arrives —
 * names, contact details, navigation, social links — lives here so it
 * can be updated in one place.
 */

export const COMPANY_NAME = 'NexEease'
export const PRODUCT_NAME = 'NexTrazer'

export const site = {
  name: COMPANY_NAME,
  tagline: 'Traceability software for regulated supply chains',
  description:
    'NexEease builds traceability, compliance and verification software that gives regulated supply chains a single, verifiable record of product identity, custody and compliance.',
  url: 'https://www.nexeease.com',

  contact: {
    email: 'info@nexeease.com',
    phone: '+32466206624',
    addressLines: ['NexEease Solutions', 'Excelsiorlaan 72', 'Zaventem, Belgium'],
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ],
} as const

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: PRODUCT_NAME,
        href: '/products/nextrazer',
        description: 'Configurable traceability, compliance and verification platform',
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'All products', href: '/products' },
      { label: PRODUCT_NAME, href: '/products/nextrazer' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of service', href: '#' },
    ],
  },
]
