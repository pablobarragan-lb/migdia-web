import { Eyebrow, AssetImage, CompassSquare, Triangle, Sun, Star } from './Primitives'

export function Hero({ content: c, symbolism, variant }) {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="inicio" className={`hero hero--${variant}`}>
      <div className="hero-grid">
        <div className="hero-left">
          <Eyebrow>{c.hero.eyebrow}</Eyebrow>
          <h1 className="hero-title">{c.hero.title}</h1>
          <p className="hero-lead">{c.hero.lead}</p>
          <div className="hero-ctas">
            <a href="#contacto" className="btn btn-primary" onClick={scrollTo('contacto')}>{c.hero.cta1}</a>
            <a href="#masoneria" className="btn btn-ghost" onClick={scrollTo('masoneria')}>{c.hero.cta2} →</a>
          </div>
          <div className="hero-caption">{c.hero.caption}</div>
        </div>

        <div className="hero-right">
          <div className="hero-seal">
            <img src="/assets/sello-migdia.jpg" alt="Sello de la Logia Migdia" width="300" height="300" />
          </div>
          {symbolism !== 'minimal' && (
            <div className="hero-meta">
              <div className="hero-meta-row"><span className="label">Latitud</span><span className="val">39°59′ N</span></div>
              <div className="hero-meta-row"><span className="label">Longitud</span><span className="val">0°02′ O</span></div>
              <div className="hero-meta-row"><span className="label">Fundación</span><span className="val">MMXV</span></div>
              <div className="hero-meta-row"><span className="label">Columnas</span><span className="val">V · III · MMXXII</span></div>
            </div>
          )}
        </div>
      </div>

      {symbolism === 'present' && (
        <div className="hero-symbols">
          <Sun size={28} /><span className="dot" /><Star size={10} /><span className="dot" /><Triangle size={22} /><span className="dot" /><CompassSquare size={36} strokeWidth={1} />
        </div>
      )}

      <div className="hero-tagline"><span>{c.meta.tagline}</span></div>
    </section>
  )
}

export function QuoteBlock({ content: c }) {
  return (
    <section className="quote-block">
      <div className="quote-inner">
        <span className="quote-mark">&ldquo;</span>
        <blockquote>{c.quote.text}</blockquote>
        <cite>— {c.quote.attribution}</cite>
      </div>
    </section>
  )
}

export function Masoneria({ content: c, symbolism }) {
  return (
    <section id="masoneria" className="section section--masoneria">
      <div className="section-header">
        <Eyebrow>{c.masoneria.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.masoneria.title}</h2>
      </div>

      <div className="mas-grid">
        <div className="mas-text">
          {c.masoneria.body.map((p, i) => (
            <p key={i} className={i === 0 ? 'lead' : ''}>{p}</p>
          ))}
        </div>
        <div className="mas-figure">
          <AssetImage
            src="/assets/manuscrito-geometria.jpg"
            alt="Manuscrito de la Geometría"
            caption="Inicial del manuscrito sobre la Geometría. Traducción latina del texto árabe de 1120 por Abelardo de Bath — Los Elementos de Euclides, 1309–1316."
            aspect="3/4"
            tint
          />
        </div>
      </div>

      <div className="pillars">
        {c.masoneria.pillars.map((p, i) => (
          <article key={i} className="pillar">
            <div className="pillar-head">
              <span className="pillar-num">{p.n}</span>
              {symbolism !== 'minimal' && <Triangle size={18} strokeWidth={1} />}
            </div>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Historia({ content: c, symbolism }) {
  return (
    <section id="historia" className="section section--historia">
      <div className="historia-layout">
        <aside className="historia-side">
          <div className="section-header">
            <Eyebrow>{c.historia.eyebrow}</Eyebrow>
            <h2 className="section-title">{c.historia.title}</h2>
          </div>
          <div className="historia-img">
            <AssetImage
              src="/assets/enrique-iii.jpg"
              alt="Enrique III de Inglaterra y el Maestro de Obras"
              caption="Enrique III de Inglaterra acompañado del Maestro de Obras — La Vida de los Santos Albano y Amfíbalo, siglo XIV."
              aspect="4/5"
              tint
            />
          </div>
        </aside>

        <ol className="timeline">
          {c.historia.timeline.map((e, i) => (
            <li key={i} className="timeline-item">
              <div className="timeline-marker">
                <span className="year">{e.year}</span>
                {symbolism === 'present' && <span className="pip"><Star size={8} /></span>}
              </div>
              <div className="timeline-body">
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Principios({ content: c }) {
  const items = [
    { src: '/assets/pedra-bruta.jpg', t: 'Libertad', k: 'Pedra Bruta', d: 'Cada aprendiz recibe una piedra bruta. Liberarla de lo superfluo — y de uno mismo — es la primera tarea.' },
    { src: '/assets/piedra-cubica.jpg', t: 'Igualdad', k: 'Piedra Cúbica', d: 'La piedra pulida, dispuesta al servicio común. La igualdad no borra diferencias: las integra en el Templo.' },
    { src: '/assets/columnas.jpg', t: 'Fraternidad', k: 'Columnas', d: 'Dos columnas sostienen el mismo dintel. La fuerza y la sabiduría caminan juntas — ninguna, sola, levanta el edificio.' },
  ]

  return (
    <section id="principios" className="section section--principios">
      <div className="section-header centered">
        <Eyebrow>{c.principios.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.principios.title}</h2>
        <p className="section-sub">{c.principios.sub}</p>
      </div>

      <div className="prin-grid">
        {items.map((it, i) => (
          <article key={i} className="prin-card">
            <div className="prin-img"><img src={it.src} alt={it.t} loading="lazy" /></div>
            <div className="prin-body">
              <span className="prin-key">{it.k}</span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
