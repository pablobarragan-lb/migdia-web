import { useState, useEffect } from 'react'
import { Eyebrow, Star, AllSeeingEye, Sun, Triangle, CompassSquare } from './Primitives'

export function Noticias({ content: c, symbolism }) {
  return (
    <section id="noticias" className="section section--noticias">
      <div className="section-header">
        <Eyebrow>{c.noticias.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.noticias.title}</h2>
        <p className="section-sub">{c.noticias.sub}</p>
      </div>

      <div className="news-list">
        {c.noticias.items.map((n, i) => (
          <article key={i} className="news-item">
            <div className="news-date">
              <span className="news-date-txt">{n.date}</span>
              {symbolism === 'present' && <Star size={10} />}
            </div>
            <div className="news-body">
              <span className="news-tag">{n.tag}</span>
              <h3>{n.t}</h3>
              <p>{n.d}</p>
              <div className="news-place">{n.place}</div>
            </div>
            <div className="news-arrow">→</div>
          </article>
        ))}
      </div>

      <div className="news-cta">
        <button className="btn btn-ghost">{c.noticias.cta} →</button>
      </div>
    </section>
  )
}

export function Biblioteca({ content: c }) {
  const covers = ['/assets/llibre.jpg', '/assets/ara.jpg', '/assets/ull.jpg', '/assets/compas3.jpg', '/assets/quadre.jpg', '/assets/mandil.jpg']

  return (
    <section id="biblioteca" className="section section--biblioteca">
      <div className="section-header">
        <Eyebrow>{c.biblioteca.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.biblioteca.title}</h2>
        <p className="section-sub">{c.biblioteca.sub}</p>
      </div>

      <div className="bib-grid">
        {c.biblioteca.items.map((b, i) => (
          <article key={i} className="bib-card">
            <div className="bib-cover">
              <img src={covers[i % covers.length]} alt="" loading="lazy" />
              <span className="bib-cat">{b.cat}</span>
            </div>
            <div className="bib-meta">
              <h3>{b.t}</h3>
              <div className="bib-author">{b.author}</div>
              <div className="bib-pages">{b.pages}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function FAQ({ content: c }) {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section section--faq">
      <div className="faq-layout">
        <div className="faq-side">
          <Eyebrow>{c.faq.eyebrow}</Eyebrow>
          <h2 className="section-title">{c.faq.title}</h2>
        </div>
        <div className="faq-list">
          {c.faq.items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-qtxt">{it.q}</span>
                <span className="faq-plus">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contacto({ content: c, symbolism, lang }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setForm(f => ({ ...f, subject: c.contacto.subjects[0] }))
  }, [lang])

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (!form.name.trim()) er.name = true
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) er.email = true
    if (!form.message.trim() || form.message.trim().length < 10) er.message = true
    setErrors(er)
    if (Object.keys(er).length === 0) {
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setForm({ name: '', email: '', subject: c.contacto.subjects[0], message: '' })
      }, 4000)
    }
  }

  return (
    <section id="contacto" className="section section--contacto">
      <div className="cont-layout">
        <div className="cont-side">
          <Eyebrow>{c.contacto.eyebrow}</Eyebrow>
          <h2 className="section-title">{c.contacto.title}</h2>
          <p className="section-sub">{c.contacto.sub}</p>

          <div className="cont-info">
            <div className="cont-row">
              <span className="cont-lbl">E-mail</span>
              <a href={`mailto:${c.meta.email}`}>{c.meta.email}</a>
            </div>
            <div className="cont-row">
              <span className="cont-lbl">Or∴</span>
              <span>{c.meta.location}</span>
            </div>
            <div className="cont-row">
              <span className="cont-lbl">Obediencia</span>
              <span>{c.meta.obedience}</span>
            </div>
          </div>

          {symbolism !== 'minimal' && (
            <div className="cont-seal"><AllSeeingEye size={48} /></div>
          )}
        </div>

        <form className="cont-form" onSubmit={submit} noValidate>
          <div className={`field ${errors.name ? 'err' : ''}`}>
            <label>{c.contacto.fields.name}</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className={`field ${errors.email ? 'err' : ''}`}>
            <label>{c.contacto.fields.email}</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="field">
            <label>{c.contacto.fields.subject}</label>
            <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              {c.contacto.subjects.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className={`field ${errors.message ? 'err' : ''}`}>
            <label>{c.contacto.fields.message}</label>
            <textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={sent}>
            {sent ? '✓ Mensaje recibido' : `${c.contacto.send} →`}
          </button>
          <div className="cont-note">{c.contacto.note} <a href={`mailto:${c.meta.email}`}>{c.meta.email}</a></div>
        </form>
      </div>
    </section>
  )
}

export function Footer({ content: c, symbolism }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/assets/sello-migdia.jpg" alt="" width="56" height="56" />
          <div>
            <div className="footer-title">{c.footer.legend}</div>
            <div className="footer-tagline">{c.footer.tagline}</div>
          </div>
        </div>
        {symbolism === 'present' && (
          <div className="footer-symbols">
            <Sun size={22} /><Triangle size={18} /><CompassSquare size={28} strokeWidth={1} />
          </div>
        )}
      </div>
      <div className="footer-bottom">
        <div className="footer-legal">
          {c.footer.legal.map((l, i) => <a key={i} href="#">{l}</a>)}
        </div>
        <div className="footer-copy">
          © MMXXVI · {c.meta.email}
        </div>
      </div>
    </footer>
  )
}
