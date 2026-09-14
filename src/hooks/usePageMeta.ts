import { useEffect } from 'react'
import { site } from '@/config/site'

/** Sets the document title and meta description for a page. */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description ?? site.description
  }, [title, description])
}
