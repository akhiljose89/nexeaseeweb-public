import { Link } from 'react-router-dom'
import { footerColumns, site } from '@/config/site'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo light />
            <p>{site.description}</p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('/') ? <Link to={l.href}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <div className="footer__social">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
