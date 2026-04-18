import { useState, useEffect } from 'react'
import { SITE_CONTENT } from './content'
import { NavBar } from './components/Nav'
import { Hero, QuoteBlock, Masoneria, Historia, Principios } from './components/SectionsA'
import { Noticias, Biblioteca, FAQ, Contacto, Footer } from './components/SectionsB'
import { CookieBanner, LegalModal } from './components/Legal'

const load = (key, fallback) => {
  try {
    return localStorage.getItem('migdia_' + key) ?? fallback
  } catch { return fallback }
}

export default function App() {
  const [lang, setLang] = useState(() => load('lang', 'es'))
  const [variant, setVariant] = useState(() => load('variant', 'classic'))
  const [palette, setPalette] = useState(() => load('palette', 'ivory'))
  const [symbolism, setSymbolism] = useState(() => load('symbolism', 'discrete'))
  const [section, setSection] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  const [legalPage, setLegalPage] = useState(null)

  useEffect(() => { try { localStorage.setItem('migdia_lang', lang) } catch {} }, [lang])
  useEffect(() => { try { localStorage.setItem('migdia_variant', variant) } catch {} }, [variant])
  useEffect(() => { try { localStorage.setItem('migdia_palette', palette) } catch {} }, [palette])
  useEffect(() => { try { localStorage.setItem('migdia_symbolism', symbolism) } catch {} }, [symbolism])

  useEffect(() => {
    document.documentElement.setAttribute('data-variant', variant)
    document.documentElement.setAttribute('data-palette', palette)
    document.documentElement.lang = lang
  }, [variant, palette, lang])

  useEffect(() => {
    const ids = ['inicio', 'masoneria', 'historia', 'principios', 'noticias', 'biblioteca', 'faq', 'contacto']
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let cur = 'inicio'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 180) cur = id
      }
      setSection(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const content = SITE_CONTENT[lang] || SITE_CONTENT.es

  return (
    <>
      <NavBar
        lang={lang} setLang={setLang}
        palette={palette} setPalette={setPalette}
        symbolism={symbolism} setSymbolism={setSymbolism}
        variant={variant} setVariant={setVariant}
        section={section}
        scrolled={scrolled}
        content={content}
      />
      <main>
        <Hero content={content} symbolism={symbolism} variant={variant} />
        <QuoteBlock content={content} variant={variant} />
        <Masoneria content={content} symbolism={symbolism} />
        <Historia content={content} symbolism={symbolism} />
        <Principios content={content} symbolism={symbolism} />
        <Noticias content={content} symbolism={symbolism} />
        <Biblioteca content={content} />
        <FAQ content={content} />
        <Contacto content={content} symbolism={symbolism} lang={lang} />
      </main>
      <Footer content={content} symbolism={symbolism} onLegalOpen={setLegalPage} />
      <CookieBanner lang={lang} />
      <LegalModal page={legalPage} lang={lang} onClose={() => setLegalPage(null)} />
    </>
  )
}
