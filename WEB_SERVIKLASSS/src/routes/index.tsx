import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, BusFront, Check, ChevronRight, Clock3, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Snowflake, Users, X, Package, BriefcaseBusiness, Palmtree, Target, Eye, Armchair, Mail, Route as RouteIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company, contactUrl } from '@/lib/company';
import salinas from '@/assets/salinas.webp';
import montanita from '@/assets/montanita.webp';
import puertoLopez from '@/assets/puerto-lopez.webp';
import cuenca from '@/assets/cuenca.webp';
import machala from '@/assets/machala.webp';
import guayaquil from '@/assets/guayaquil.webp';

// Imágenes de la empresa: archivos reales en /public/images (antes eran punteros .asset.json de Lovable)
const logoSrc = '/images/serviklasss-logo.png';
const heroPhoto = '/images/serviklasss-hero.webp';
const fleet1 = '/images/serviklasss-flota-1.webp';
const fleet2 = '/images/serviklasss-flota-2.webp';
const aboutSrc = '/images/serviklasss-oficina.webp';

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      { title: 'SERVIKLASSS S.A. | Transporte Guayaquil – Machala y turismo' },
      { name: 'description', content: 'Viaja entre Guayaquil y Machala con SERVIKLASSS S.A. Transporte intercantonal, turismo y viajes grupales. 13 unidades y cuatro oficinas a tu servicio.' },
      { property: 'og:title', content: 'SERVIKLASSS S.A. — Viaja seguro entre Guayaquil y Machala' },
      { property: 'og:description', content: 'Comodidad, puntualidad y atención cercana. Reserva tu viaje o cotiza tu próxima aventura en Ecuador.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '/' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: '/' }],
  }),
});

const navigation = ['Inicio', 'Nosotros', 'Servicios', 'Flota', 'Destinos', 'Oficinas', 'Contacto'];
const services = [
  { icon: BusFront, title: 'Transporte intercantonal', description: 'Conectamos Guayaquil y Machala con un viaje cómodo, seguro y puntual.', link: 'Reserva tu asiento', message: 'Hola, quisiera reservar un viaje entre Guayaquil y Machala.' },
  { icon: Package, title: 'Encomiendas', description: 'Consulta con nuestro equipo la disponibilidad y condiciones para tus envíos.', link: 'Consulta disponibilidad', message: 'Hola, ¿ofrecen servicio de encomiendas? Quisiera consultar disponibilidad y condiciones.' },
  { icon: Palmtree, title: 'Turismo y viajes grupales', description: 'Descubre Ecuador con tu familia, amigos o grupo. Nosotros te llevamos.', link: 'Planea tu aventura', message: 'Hola, quisiera cotizar un viaje turístico o grupal.' },
  { icon: BriefcaseBusiness, title: 'Reservas corporativas', description: 'Movilidad para tu equipo, reuniones y eventos, con atención personalizada.', link: 'Cotiza tu traslado', message: 'Hola, quisiera cotizar un traslado corporativo.' },
];
const destinations = [
  { name: 'Salinas', caption: 'Sol, playa y mar', image: salinas },
  { name: 'Montañita', caption: 'Un destino para desconectar', image: montanita },
  { name: 'Puerto López', caption: 'Naturaleza y aventura', image: puertoLopez },
  { name: 'Cuenca', caption: 'Historia y encanto', image: cuenca },
  { name: 'Machala', caption: 'La capital bananera', image: machala },
  { name: 'Guayaquil', caption: 'La Perla del Pacífico', image: guayaquil },
];
const whatsappMessage = (text: string) => `${company.whatsapp}?text=${encodeURIComponent(text)}`;

function Brand() {
  return <a href="#inicio" className="brand" aria-label="SERVIKLASSS S.A. Inicio"><img src={logoSrc} alt="Serviklasss S.A. — seguridad y buen servicio" className="brand-logo" width={1583} height={504} /></a>;
}
function SectionHeading({ eyebrow, title, description, center = false }: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{description && <p className="section-intro">{description}</p>}</div>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formReady, setFormReady] = useState(false);
  // The form opens a pre-filled WhatsApp message; it never claims delivery.
  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const url = contactUrl({ name: String(data.get('name') ?? '').trim(), email: String(data.get('email') ?? '').trim(), phone: String(data.get('phone') ?? '').trim(), message: String(data.get('message') ?? '').trim() });
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormReady(true);
  }
  return <>
    <header className="header">
      <div className="topbar"><div className="container-site topbar-inner"><span className="flex items-center gap-2"><MapPin size={12} />Guayaquil ↔ Machala ↔ Pasaje ↔ El Guabo · Ecuador</span><div className="flex items-center gap-6"><a className="topbar-email flex items-center gap-2" href={`mailto:${company.email}`}><Mail size={12} />{company.email}</a><a className="flex items-center gap-2" href="tel:+593968664350"><Phone size={11} />+593 968664350</a></div></div></div>
      <div className="container-site nav-inner"><Brand /><nav className="desktop-nav" aria-label="Navegación principal">{navigation.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} className={`nav-link ${index === 0 ? 'active' : ''}`}>{item}</a>)}</nav><Button asChild variant="cta" className="header-reserve h-10"><a href={company.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Reserva tu viaje</a></Button><Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<Button asChild variant="cta"><a href={company.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Reserva tu viaje</a></Button></nav>}
    </header>
    <main>
      <section id="inicio" className="hero">
        <img src={heroPhoto} className="hero-photo" alt="Bus de SERVIKLASSS en una carretera junto al mar en la costa ecuatoriana" width={1600} height={853} fetchPriority="high" />
        <div className="container-site hero-content reveal"><div className="hero-eyebrow">Conectamos ciudades, acercamos personas</div><h1>Viaja seguro entre<br />Guayaquil y <span>Machala.</span></h1><p className="hero-description">Transporte intercantonal de pasajeros con comodidad, puntualidad y servicio de calidad.</p><div className="hero-actions"><Button asChild variant="cta"><a href={whatsappMessage('Hola, quisiera consultar los horarios de salida entre Guayaquil y Machala.')} target="_blank" rel="noopener noreferrer"><Clock3 />Ver horarios<ArrowRight /></a></Button><Button asChild variant="hero"><a href="#contacto"><MessageCircle />Contáctanos</a></Button></div><div className="hero-assurance"><ShieldCheck size={17} />Tu tranquilidad nos acompaña en cada kilómetro.</div></div>
        <div className="hero-route"><MapPin size={16} />Guayaquil<span>────</span><MapPin size={16} />Machala<span>────</span><MapPin size={16} />El Guabo<span>────</span><MapPin size={16} />Pasaje</div>
      </section>
      <div className="trust-band"><div className="container-site trust-grid">{[{ icon: ShieldCheck, title: 'Seguridad en cada viaje', text: 'Tu bienestar, nuestra prioridad' }, { icon: Clock3, title: 'Puntualidad y confianza', text: 'Comprometidos con tu tiempo' }, { icon: BusFront, title: '13 unidades a tu servicio', text: 'Comodidad en cada kilómetro' }, { icon: MapPin, title: '4 oficinas operativas', text: 'Guayaquil, Machala, El Guabo y Pasaje' }].map(item => <div className="trust-item" key={item.title}><item.icon className="trust-icon" /><div><strong>{item.title}</strong><p>{item.text}</p></div></div>)}</div></div>
      <section id="nosotros" className="section"><div className="container-site about-grid scroll-reveal"><div className="about-image-wrap"><img src={aboutSrc} alt="Oficina de SERVIKLASSS con vehículos de la flota estacionados al frente" width={1600} height={1200} loading="lazy" className="about-image" /><div className="fleet-badge"><strong>13</strong><span>unidades,<br />un mismo compromiso</span></div></div><div className="about-copy"><SectionHeading eyebrow="Somos SERVIKLASSS S.A." title="Más que un viaje, un compromiso contigo." /><p>Somos una empresa ecuatoriana de transporte intercantonal que une Guayaquil y Machala. Con una flota de 13 vehículos y cuatro oficinas operativas, estamos cerca de ti en cada etapa de tu viaje.</p><div className="mission-grid"><div><h3><Target size={17} />Nuestra misión</h3><p>Brindar un servicio de transporte intercantonal seguro, puntual y cómodo, superando las expectativas de nuestros pasajeros.</p></div><div><h3><Eye size={17} />Nuestra visión</h3><p>Ser la empresa líder en transporte de pasajeros en la ruta Guayaquil-Machala, reconocida por su excelencia operativa y compromiso con la satisfacción del cliente.</p></div></div><div className="values">{['Puntualidad', 'Seguridad', 'Confort', 'Compromiso', 'Honestidad'].map(v => <span key={v}><Check size={12} />{v}</span>)}</div></div></div></section>
      <section id="servicios" className="section section-tint"><div className="container-site scroll-reveal"><SectionHeading eyebrow="Nuestros servicios" title="Una solución para cada destino." description="Viajes cotidianos, nuevas aventuras o traslados de empresa. Cuenta con nosotros." center /><div className="services-grid">{services.map(s => <article className="service" key={s.title}><div className="service-icon"><s.icon size={25} strokeWidth={1.7} /></div><h3>{s.title}</h3><p>{s.description}</p><a href={whatsappMessage(s.message)} target="_blank" rel="noopener noreferrer">{s.link}<ArrowRight size={14} /></a></article>)}</div></div></section>
       <section id="flota" className="section"><div className="container-site fleet-layout scroll-reveal"><div><img src={fleet2} className="fleet-main" alt="Furgoneta de pasajeros SERVIKLASSS, móvil 11" width={1600} height={1200} loading="lazy" /><div className="fleet-thumbs"><img src={heroPhoto} alt="Bus de SERVIKLASSS en carretera junto al mar" width={1600} height={853} loading="lazy" /><img src={fleet1} alt="Vehículos SERVIKLASSS estacionados frente a la oficina, móvil 07" width={1600} height={1200} loading="lazy" /></div><p className="image-note">La asignación de vehículos está sujeta a disponibilidad.</p></div><div><SectionHeading eyebrow="Nuestra flota" title="El confort también es parte del camino." description="13 unidades preparadas para acompañarte. Espacios cómodos y una experiencia de viaje pensada para ti." /><div className="feature-list">{[{ icon: Users, title: '7 a 20 pasajeros', text: 'Capacidad por unidad' }, { icon: Snowflake, title: 'Aire acondicionado', text: 'Un ambiente agradable' }, { icon: Armchair, title: 'Asientos reclinables', text: 'Descansa en el trayecto' }, { icon: ShieldCheck, title: 'Seguridad', text: 'Viaja con tranquilidad' }].map(f => <div key={f.title} className="feature"><f.icon size={25} strokeWidth={1.6} /><div><strong>{f.title}</strong><span>{f.text}</span></div></div>)}</div><Button asChild variant="outline"><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">Consulta tu próximo viaje<ArrowRight /></a></Button></div></div></section>
      <section id="destinos" className="section section-tint"><div className="container-site scroll-reveal"><SectionHeading eyebrow="Descubre Ecuador" title="Tu próxima aventura empieza aquí." description="Del mar a la sierra, hay un destino esperando por ti. Viaja con SERVIKLASSS y crea nuevos recuerdos." center /><div className="destinations-grid">{destinations.map(d => <a key={d.name} className="destination" href={whatsappMessage(`Hola, quisiera cotizar un viaje turístico a ${d.name}.`)} target="_blank" rel="noopener noreferrer" aria-label={`Cotizar viaje a ${d.name}`}><img src={d.image} alt={`Paisaje turístico ilustrativo de ${d.name}, Ecuador`} width={512} height={512} loading="lazy" /><div className="destination-label"><div><h3>{d.name}</h3><p>{d.caption}</p></div><ArrowUpRight size={22} /></div></a>)}</div><div className="destination-cta"><Button asChild variant="cta" size="lg"><a href={whatsappMessage('Hola, quisiera cotizar un viaje turístico.')} target="_blank" rel="noopener noreferrer"><MessageCircle />Cotiza tu viaje<ArrowRight /></a></Button></div></div></section>
      <section id="oficinas" className="section"><div className="container-site scroll-reveal"><SectionHeading eyebrow="Estamos cerca de ti" title="Cuatro ciudades. La misma atención." description="Visítanos en nuestras oficinas de Guayaquil, Machala, El Guabo y Pasaje. Será un gusto ayudarte." center /><div className="offices-grid">{company.offices.map(office => <article key={office.city} className="office"><div className="office-content"><div className="office-title"><MapPin size={23} /><h3>Oficina {office.city}</h3></div><p className="office-address">{office.address}</p><a className="office-phone" href={`tel:${office.phone.replace(/\s/g, '')}`}><Phone size={15} />{office.phone}</a><div className="hours">{company.hours.map(h => <div key={h.day}><span>{h.day}</span><span>{h.time}</span></div>)}</div><div className="office-actions"><Button asChild variant="outline" size="sm"><a href={office.mapLink} target="_blank" rel="noopener noreferrer"><MapPin />Ver en Google Maps<ArrowUpRight /></a></Button><Button asChild variant="whatsapp" size="sm"><a href={office.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a></Button></div></div><OfficeMap city={office.city} query={office.mapQuery} coords={'coords' in office ? office.coords : undefined} /></article>)}</div></div></section>
      <section id="contacto" className="section section-tint"><div className="container-site contact-grid scroll-reveal"><div><SectionHeading eyebrow="Hablemos de tu próximo viaje" title="¿A dónde quieres ir?" description="Consulta horarios de salida, reserva tu asiento o cuéntanos el viaje que tienes en mente." /><div className="contact-method"><Mail size={24} /><div><span>Escríbenos</span><a href={`mailto:${company.email}`}>{company.email}</a></div></div><div className="contact-method"><MessageCircle size={24} /><div><span>Reservas y cotizaciones</span><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">+593 968664350<ArrowUpRight className="inline ml-2" size={14} /></a></div></div></div><form className="contact-form" onSubmit={handleContact}><div className="field"><label htmlFor="contact-name">Nombre completo *</label><input id="contact-name" name="name" placeholder="Tu nombre" autoComplete="name" required maxLength={100} /></div><div className="field"><label htmlFor="contact-phone">Teléfono *</label><input id="contact-phone" name="phone" type="tel" placeholder="Tu número de teléfono" autoComplete="tel" required maxLength={30} /></div><div className="field full"><label htmlFor="contact-email">Correo electrónico *</label><input id="contact-email" name="email" type="email" placeholder="nombre@correo.com" autoComplete="email" required maxLength={150} /></div><div className="field full"><label htmlFor="contact-message">Mensaje *</label><textarea id="contact-message" name="message" placeholder="Cuéntanos cómo podemos ayudarte…" required maxLength={2000} /></div><div className="form-foot"><Button type="submit" variant="cta" className="h-11"><MessageCircle />Enviar por WhatsApp<ArrowRight /></Button><p role="status">{formReady ? 'Tu mensaje está preparado. Confirma el envío en WhatsApp.' : 'Se abrirá WhatsApp con tu mensaje. Tú confirmas el envío.'}</p></div></form></div></section>
    </main>
    <footer className="footer"><div className="container-site"><div className="footer-main"><div><Brand /><p className="footer-tagline">Tu destino, nuestro compromiso.</p></div><nav className="footer-links" aria-label="Enlaces del pie de página">{navigation.slice(1).map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav><a className="flex items-center gap-2 text-xs" href={company.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Viaja con nosotros<ChevronRight size={14} /></a></div><div className="footer-bottom"><span>© {new Date().getUTCFullYear()} SERVIKLASSS S.A. Todos los derechos reservados.</span><span>Diseñado por Lovable · Hecho para conectar Ecuador.</span></div></div></footer>
    <Button asChild variant="whatsapp" size="icon" className="floating-whatsapp"><a href={company.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar a SERVIKLASSS por WhatsApp" title="Escríbenos por WhatsApp"><MessageCircle /></a></Button>
  </>;
}

// Maps Embed uses only the managed, referrer-restricted public browser key.
function OfficeMap({ city, query, coords }: { city: string; query: string; coords?: { lat: number; lng: number } | undefined }) {
  const [authorizedOrigin, setAuthorizedOrigin] = useState(false);
  useEffect(() => {
    // Never send a credential-bearing preview hostname to a third-party iframe.
    setAuthorizedOrigin(window.location.hostname.endsWith('.lovable.app'));
  }, []);
  const key = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY'];
  const place = coords ? `${coords.lat},${coords.lng}` : query;
  if (!key || !authorizedOrigin) return <div className="bg-secondary p-6 flex items-center gap-3 min-h-32"><MapPin className="text-primary shrink-0" size={26} /><div><strong className="text-primary text-sm">Encuéntranos en {city}</strong><p className="text-muted-foreground text-xs mt-1">Consulta la ubicación con el botón «Ver en Google Maps».</p></div></div>;
  return <iframe title={`Ubicación de la oficina SERVIKLASSS en ${city}`} src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${encodeURIComponent(place)}`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />;
}
