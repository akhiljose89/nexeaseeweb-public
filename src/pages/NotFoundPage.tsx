import { Button } from '@/components/Blocks'
import { usePageMeta } from '@/hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta('Page not found')
  return (
    <section className="not-found">
      <div className="container">
        <div className="h1">404</div>
        <h1 className="h2" style={{ marginTop: 12 }}>Page not found</h1>
        <p className="lead" style={{ marginInline: 'auto' }}>
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="cluster" style={{ justifyContent: 'center', marginTop: 28 }}>
          <Button cta={{ label: 'Back to home', href: '/' }} variant="primary" />
        </div>
      </div>
    </section>
  )
}
