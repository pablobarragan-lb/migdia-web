import { useState } from 'react'

export function NavBar({ lang, setLang, palette, setPalette, symbolism, setSymbolism, variant, setVariant, section, scrolled, content: c }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const items = [
    { id: 'inicio', label: c.nav.home },
    { id: 'masoneria', label: c.nav.masoneria },
    { id: 'historia', label: c.nav.historia },
    { id: 'principios', label: c.nav.principios },
    { id: 'noticias', label: c.nav.noticias },
    { id: 'biblioteca', label: c.nav.biblioteca },
    { id: 'faq', label: c.nav.faq },
    { id: 'contacto', label: c.nav.contacto },
  ]

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => go('inicio')} aria-label="Inicio">
          <img src="/assets/sello-migdia.jpg" alt="" className="brand-seal" width="36" height="36" />
          <div className="brand-text">
            <span className="brand-name">Logia Migdia</span>
            <span className="brand-sub">{c.meta.orientOccident}</span>
          </div>
        </button>

        <nav className="nav-links" aria-label="principal">
          {items.slice(1).map(it => (
            <button key={it.id} onClick={() => go(it.id)} className={section === it.id ? 'active' : ''}>
              {it.label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="Idioma">
            <button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>ES</button>
            <span>·</span>
            <button className={lang === 'ca' ? 'on' : ''} onClick={() => setLang('ca')}>CA</button>
          </div>
          <button className="burger" onClick={() => setMenuOpen(v => !v)} aria-label="Menú">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {items.map(it => (
            <button key={it.id} onClick={() => go(it.id)}>{it.label}</button>
          ))}
        </div>
      )}
    </header>
  )
}
