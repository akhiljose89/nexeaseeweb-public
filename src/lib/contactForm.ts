import { DEMO_SUBJECT } from '@/content/contact'
import { site } from '@/config/site'

/**
 * Delivery for the contact form.
 *
 * The site is static (GitHub Pages), so it has no server of its own that could send
 * email. The form posts to FormSubmit, which forwards each message to the mailbox in
 * the URL. Routing is therefore just choosing which address goes into that URL.
 */
const ENDPOINT = 'https://formsubmit.co/ajax/'

/** Give up after this long so the button never stays on "Sending…" forever. */
const TIMEOUT_MS = 15000

export type Enquiry = {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

/** Demo requests go to the demo mailbox; every other topic goes to the general one. */
export function recipientFor(subject: string): string {
  return subject === DEMO_SUBJECT ? site.contact.demoEmail : site.contact.email
}

/** Resolves once the message is confirmed delivered to the service; throws otherwise. */
export async function sendEnquiry(enquiry: Enquiry): Promise<void> {
  const isDemo = enquiry.subject === DEMO_SUBJECT

  const res = await fetch(`${ENDPOINT}${recipientFor(enquiry.subject)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: enquiry.name,
      // FormSubmit uses a field named "email" as the Reply-To, so replying goes to the visitor.
      email: enquiry.email,
      company: enquiry.company || '(not given)',
      topic: enquiry.subject,
      message: enquiry.message,
      _subject: isDemo
        ? `New demo request from the ${site.name} website`
        : `New enquiry (${enquiry.subject}) from the ${site.name} website`,
      _template: 'table',
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })

  // The service reports many failures inside an HTTP 200 response ({"success":"false"}),
  // so the status code alone proves nothing. Only an explicit success counts as sent.
  let body: { success?: unknown; message?: unknown } | null = null
  try {
    body = await res.json()
  } catch {
    // Not JSON (for example an error page); handled below as a failure.
  }
  const confirmed = res.ok && body !== null && (body.success === true || body.success === 'true')

  // A mailbox that has not been activated yet gets an activation email instead of the
  // message. Visitors must not be told it was sent in that case.
  const awaitingActivation = typeof body?.message === 'string' && /activat/i.test(body.message)

  if (!confirmed || awaitingActivation) {
    throw new Error(typeof body?.message === 'string' ? body.message : `Request failed (${res.status})`)
  }
}
