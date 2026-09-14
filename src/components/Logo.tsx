import { Link } from 'react-router-dom'
import { COMPANY_NAME } from '@/config/site'

/**
 * Brand mark — the real NexEasee logo (horizontal lockup), swapped for the
 * white-wordmark variant on dark backgrounds (header on light, footer on navy).
 * Source files: Marketing/NexEease-Logo/NexEasee-Logo-Exports/01-website/.
 */
export function Logo({ light = false }: { light?: boolean }) {
  const base = light ? '/logo/nexeasee-logo-horizontal-on-dark' : '/logo/nexeasee-logo-horizontal'

  return (
    <Link to="/" className="logo" aria-label={`${COMPANY_NAME} home`}>
      <picture>
        <source type="image/webp" srcSet={`${base}-400w.webp 1x, ${base}-800w.webp 2x`} />
        <img
          src={`${base}-400w.png`}
          srcSet={`${base}-400w.png 1x, ${base}-800w.png 2x`}
          alt={COMPANY_NAME}
          width={176}
          height={44}
        />
      </picture>
    </Link>
  )
}
