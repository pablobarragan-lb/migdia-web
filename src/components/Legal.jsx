import { useState, useEffect } from 'react'

const LEGAL_CONTENT = {
  es: {
    cookie: {
      text: 'Este sitio utiliza almacenamiento local para recordar tus preferencias de visualización (idioma, paleta, tipografía). No se instalan cookies de seguimiento ni se comparten datos con terceros.',
      accept: 'Aceptar',
      more: 'Más información',
    },
    avisoLegal: {
      title: 'Aviso legal',
      body: `<h3>Identificación</h3>
<p>Responsable del sitio web: <strong>Respetable Logia Migdia nº 102</strong><br>
Correo electrónico: <a href="mailto:logiamigdia@gmail.com">logiamigdia@gmail.com</a><br>
Oriente de Castellón de la Plana<br>
Actividad: Asociación de carácter filosófico y fraternal</p>

<h3>Objeto del sitio</h3>
<p>Este sitio web tiene carácter informativo y divulgativo. Su finalidad es dar a conocer la Logia Migdia, sus principios, historia y actividad pública.</p>

<h3>Propiedad intelectual</h3>
<p>Los contenidos del sitio (textos, diseño, imágenes propias, código fuente) son propiedad de la Respetable Logia Migdia nº 102 o se utilizan con licencia. Las imágenes históricas reproducidas son de dominio público.</p>

<h3>Responsabilidad</h3>
<p>La Logia no se hace responsable de los contenidos de sitios enlazados ni garantiza la disponibilidad continua del servicio. Los datos de contacto facilitados a través del formulario se tratan con la máxima discreción conforme a nuestra política de privacidad.</p>

<h3>Legislación aplicable</h3>
<p>Este aviso legal se rige por la legislación española vigente, en particular la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE).</p>`,
    },
    privacidad: {
      title: 'Política de privacidad',
      body: `<h3>Responsable del tratamiento</h3>
<p>Respetable Logia Migdia nº 102<br>
Contacto: <a href="mailto:logiamigdia@gmail.com">logiamigdia@gmail.com</a></p>

<h3>Datos que recogemos</h3>
<p>A través del formulario de contacto: nombre, correo electrónico, asunto y mensaje. No recogemos datos de navegación, no usamos cookies de seguimiento ni herramientas de analítica.</p>

<h3>Finalidad y base legal</h3>
<p>Los datos del formulario se utilizan exclusivamente para responder a tu consulta. La base legal es tu consentimiento al enviar el formulario (art. 6.1.a RGPD).</p>

<h3>Destinatarios</h3>
<p>Los datos son accesibles únicamente a los hermanos responsables de la correspondencia de la Logia. No se ceden a terceros ni se transfieren fuera del EEE.</p>

<h3>Conservación</h3>
<p>Los datos se conservan mientras sea necesario para atender tu consulta y, en todo caso, no más de 12 meses desde el último contacto.</p>

<h3>Derechos</h3>
<p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:logiamigdia@gmail.com">logiamigdia@gmail.com</a>. Tienes derecho a presentar reclamación ante la AEPD (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>

<h3>Servicios de terceros</h3>
<p>Este sitio carga tipografías desde Google Fonts (fonts.googleapis.com). Google puede recibir tu dirección IP al servir las fuentes. Consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de privacidad de Google</a>.</p>`,
    },
    cookies: {
      title: 'Política de cookies',
      body: `<h3>¿Qué son las cookies?</h3>
<p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador. Este sitio <strong>no utiliza cookies</strong>.</p>

<h3>Almacenamiento local (localStorage)</h3>
<p>Utilizamos el almacenamiento local del navegador para recordar tus preferencias de visualización:</p>
<ul>
<li><strong>migdia_lang</strong> — Idioma seleccionado (es/ca)</li>
<li><strong>migdia_palette</strong> — Paleta de color</li>
<li><strong>migdia_variant</strong> — Variante tipográfica</li>
<li><strong>migdia_symbolism</strong> — Nivel de simbología</li>
<li><strong>migdia_cookies</strong> — Aceptación de este aviso</li>
</ul>
<p>Estos datos se almacenan exclusivamente en tu dispositivo, no se envían a ningún servidor ni se comparten con terceros. Son estrictamente necesarios para el funcionamiento de las preferencias del sitio.</p>

<h3>Servicios de terceros</h3>
<p>Cargamos tipografías desde <strong>Google Fonts</strong> (fonts.googleapis.com, fonts.gstatic.com). Google puede recibir tu IP al servir estos archivos. Según Google, este servicio no instala cookies. Consulta su <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener">política de privacidad de Fonts</a>.</p>

<h3>Cómo eliminar los datos almacenados</h3>
<p>Puedes borrar el almacenamiento local en cualquier momento desde los ajustes de tu navegador (Herramientas de desarrollador → Aplicación → Almacenamiento local → Borrar).</p>

<h3>Base legal</h3>
<p>El almacenamiento descrito se ampara en el art. 22.2 de la LSSI-CE como estrictamente necesario para prestar un servicio expresamente solicitado (recordar tus preferencias de visualización).</p>`,
    },
  },
  ca: {
    cookie: {
      text: "Aquest lloc utilitza emmagatzematge local per recordar les teves preferències de visualització (idioma, paleta, tipografia). No s'instal·len galetes de seguiment ni es comparteixen dades amb tercers.",
      accept: 'Acceptar',
      more: 'Més informació',
    },
    avisoLegal: {
      title: 'Avís legal',
      body: `<h3>Identificació</h3>
<p>Responsable del lloc web: <strong>Respectable Lògia Migdia núm. 102</strong><br>
Correu electrònic: <a href="mailto:logiamigdia@gmail.com">logiamigdia@gmail.com</a><br>
Orient de Castelló de la Plana<br>
Activitat: Associació de caràcter filosòfic i fraternal</p>

<h3>Objecte del lloc</h3>
<p>Aquest lloc web té caràcter informatiu i divulgatiu. La seva finalitat és donar a conèixer la Lògia Migdia, els seus principis, la seva història i la seva activitat pública.</p>

<h3>Propietat intel·lectual</h3>
<p>Els continguts del lloc (textos, disseny, imatges pròpies, codi font) són propietat de la Respectable Lògia Migdia núm. 102 o s'utilitzen amb llicència. Les imatges històriques reproduïdes són de domini públic.</p>

<h3>Responsabilitat</h3>
<p>La Lògia no es fa responsable dels continguts de llocs enllaçats ni garanteix la disponibilitat contínua del servei. Les dades de contacte facilitades a través del formulari es tracten amb la màxima discreció d'acord amb la nostra política de privacitat.</p>

<h3>Legislació aplicable</h3>
<p>Aquest avís legal es regeix per la legislació espanyola vigent, en particular la Llei 34/2002 de Serveis de la Societat de la Informació (LSSI-CE).</p>`,
    },
    privacidad: {
      title: 'Política de privacitat',
      body: `<h3>Responsable del tractament</h3>
<p>Respectable Lògia Migdia núm. 102<br>
Contacte: <a href="mailto:logiamigdia@gmail.com">logiamigdia@gmail.com</a></p>

<h3>Dades que recollim</h3>
<p>A través del formulari de contacte: nom, correu electrònic, assumpte i missatge. No recollim dades de navegació, no usem galetes de seguiment ni eines d'analítica.</p>

<h3>Finalitat i base legal</h3>
<p>Les dades del formulari s'utilitzen exclusivament per respondre a la teva consulta. La base legal és el teu consentiment en enviar el formulari (art. 6.1.a RGPD).</p>

<h3>Destinataris</h3>
<p>Les dades són accessibles únicament als germans responsables de la correspondència de la Lògia. No es cedeixen a tercers ni es transfereixen fora de l'EEE.</p>

<h3>Conservació</h3>
<p>Les dades es conserven mentre sigui necessari per atendre la teva consulta i, en tot cas, no més de 12 mesos des de l'últim contacte.</p>

<h3>Drets</h3>
<p>Pots exercir els teus drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a <a href="mailto:logiamigdia@gmail.com">logiamigdia@gmail.com</a>. Tens dret a presentar reclamació davant l'AEPD (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>

<h3>Serveis de tercers</h3>
<p>Aquest lloc carrega tipografies des de Google Fonts (fonts.googleapis.com). Google pot rebre la teva adreça IP en servir les fonts. Consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de privacitat de Google</a>.</p>`,
    },
    cookies: {
      title: 'Política de galetes',
      body: `<h3>Què són les galetes?</h3>
<p>Les galetes són petits arxius de text que els llocs web emmagatzemen al teu navegador. Aquest lloc <strong>no utilitza galetes</strong>.</p>

<h3>Emmagatzematge local (localStorage)</h3>
<p>Utilitzem l'emmagatzematge local del navegador per recordar les teves preferències de visualització:</p>
<ul>
<li><strong>migdia_lang</strong> — Idioma seleccionat (es/ca)</li>
<li><strong>migdia_palette</strong> — Paleta de color</li>
<li><strong>migdia_variant</strong> — Variant tipogràfica</li>
<li><strong>migdia_symbolism</strong> — Nivell de simbologia</li>
<li><strong>migdia_cookies</strong> — Acceptació d'aquest avís</li>
</ul>
<p>Aquestes dades s'emmagatzemen exclusivament al teu dispositiu, no s'envien a cap servidor ni es comparteixen amb tercers. Són estrictament necessàries per al funcionament de les preferències del lloc.</p>

<h3>Serveis de tercers</h3>
<p>Carreguem tipografies des de <strong>Google Fonts</strong> (fonts.googleapis.com, fonts.gstatic.com). Google pot rebre la teva IP en servir aquests arxius. Segons Google, aquest servei no instal·la galetes. Consulta la seva <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener">política de privacitat de Fonts</a>.</p>

<h3>Com eliminar les dades emmagatzemades</h3>
<p>Pots esborrar l'emmagatzematge local en qualsevol moment des dels ajustos del teu navegador (Eines de desenvolupador → Aplicació → Emmagatzematge local → Esborrar).</p>

<h3>Base legal</h3>
<p>L'emmagatzematge descrit s'empara en l'art. 22.2 de la LSSI-CE com a estrictament necessari per prestar un servei expressament sol·licitat (recordar les teves preferències de visualització).</p>`,
    },
  },
}

const LEGAL_KEYS = ['avisoLegal', 'privacidad', 'cookies']

export function CookieBanner({ lang }) {
  const [visible, setVisible] = useState(false)
  const t = LEGAL_CONTENT[lang]?.cookie || LEGAL_CONTENT.es.cookie

  useEffect(() => {
    try {
      if (!localStorage.getItem('migdia_cookies')) setVisible(true)
    } catch { setVisible(true) }
  }, [])

  const accept = () => {
    try { localStorage.setItem('migdia_cookies', '1') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="alert">
      <p>{t.text}</p>
      <div className="cookie-actions">
        <button className="btn btn-primary btn-sm" onClick={accept}>{t.accept}</button>
      </div>
    </div>
  )
}

export function LegalModal({ page, lang, onClose }) {
  if (!page) return null
  const content = LEGAL_CONTENT[lang]?.[page] || LEGAL_CONTENT.es[page]
  if (!content) return null

  return (
    <div className="legal-overlay" onClick={onClose}>
      <div className="legal-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={content.title}>
        <div className="legal-header">
          <h2>{content.title}</h2>
          <button className="legal-close" onClick={onClose} aria-label="Cerrar">&times;</button>
        </div>
        <div className="legal-body" dangerouslySetInnerHTML={{ __html: content.body }} />
      </div>
    </div>
  )
}

export function LegalFooterLinks({ lang, legal, onOpen }) {
  return (
    <>
      {legal.map((label, i) => (
        <button key={i} className="footer-legal-btn" onClick={() => onOpen(LEGAL_KEYS[i])}>
          {label}
        </button>
      ))}
    </>
  )
}
