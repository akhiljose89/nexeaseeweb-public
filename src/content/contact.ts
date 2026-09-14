import { COMPANY_NAME } from '@/config/site'

/**
 * Contact page content.
 */
export const contact = {
  hero: {
    eyebrow: 'Contact',
    title: 'Let’s talk.',
    subtitle: `Whether you want a product demo, a partnership conversation or have a general enquiry, the ${COMPANY_NAME} team would love to hear from you.`,
  },

  form: {
    title: 'Send us a message',
    subjects: ['Request a demo', 'Partnership', 'Careers', 'General enquiry'],
    submitLabel: 'Send message',
    successTitle: 'Thanks for reaching out!',
    successText: 'We have received your message and will get back to you shortly.',
  },

  reasons: [
    { icon: 'dashboard', title: 'Product demo', description: 'See the platform configured for your sector, end to end.' },
    { icon: 'users', title: 'Partnerships', description: 'Integrators, regulators and technology partners — let’s build together.' },
    { icon: 'mail', title: 'General enquiries', description: 'Questions about the company, careers or press.' },
  ],
}
