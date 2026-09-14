import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '@/config/site'
import { Icon } from './Icons'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  // Elevate header once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on navigation
  useEffect(() => {
    setDrawerOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  // Close dropdown on outside click / escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setDrawerOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Logo />

          <nav className="nav" ref={navRef} aria-label="Primary">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className={`nav__item${openMenu === item.label ? ' nav__item--open' : ''}`}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={`nav__link${location.pathname.startsWith(item.href) ? ' nav__link--active' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  >
                    {item.label}
                    <Icon name="chevron" />
                  </button>
                  <div className="nav__menu" role="menu">
                    <Link to={item.href} className="nav__menu-link" role="menuitem">
                      <strong>All products</strong>
                      <span>Browse everything we build</span>
                    </Link>
                    {item.children.map((child) => (
                      <Link key={child.href} to={child.href} className="nav__menu-link" role="menuitem">
                        <strong>{child.label}</strong>
                        {child.description && <span>{child.description}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={item.label} className="nav__item">
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </div>
              ),
            )}
          </nav>

          <div className="header__actions">
            <Link to="/contact" className="btn btn--primary btn--sm">
              Request a demo
            </Link>
            <button
              type="button"
              className="burger"
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <Icon name={drawerOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${drawerOpen ? ' drawer--open' : ''}`} aria-hidden={!drawerOpen}>
        {navigation.map((item) => (
          <div key={item.label}>
            <Link to={item.href} className="drawer__link">
              {item.label}
            </Link>
            {item.children && (
              <div className="drawer__sub">
                {item.children.map((child) => (
                  <Link key={child.href} to={child.href}>
                    <strong>{child.label}</strong>
                    {child.description && <span>{child.description}</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="drawer__cta">
          <Link to="/contact" className="btn btn--primary" style={{ width: '100%' }}>
            Request a demo
          </Link>
        </div>
      </div>
    </>
  )
}
