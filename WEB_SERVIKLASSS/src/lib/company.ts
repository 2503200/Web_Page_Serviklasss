// Public company information; opening hours are not departure schedules.
export const company = {
  name: 'SERVIKLASSS S.A.',
  email: 'serkla24@gmail.com',
  fleetSize: 13,
  capacity: { min: 15, max: 20 },
  whatsapp: 'https://wa.me/593968664350',
  hours: [
    { day: 'Lunes a viernes', time: '05:00 – 20:00' },
    { day: 'Sábados', time: '07:00 – 19:00' },
    { day: 'Domingos', time: '08:00 – 20:00' },
  ],
  offices: [
    { city: 'Guayaquil', phone: '+593 986081490', whatsapp: 'https://wa.me/593986081490', address: 'Av. San Jorge #200 E/. Francisco de Icaza y Dr. Juan Carbo Noboa, sector Nueva Kennedy – Frente a Muebles El Arbolito.', mapQuery: 'Av. San Jorge #200, Guayaquil, Ecuador', mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.%20San%20Jorge%20%23200%2C%20Guayaquil%2C%20Ecuador' },
    { city: 'Machala', phone: '+593 968664350', whatsapp: 'https://wa.me/593968664350', address: 'Av. Alejandro Castro Benítez y Vía Pajonal, sector Las Crucitas.', mapQuery: 'Serviklasss S.A., Av. Alejandro Castro Benites, Machala, Ecuador', mapLink: 'https://maps.app.goo.gl/KZJozB8uiL6dJyudA' },
    { city: 'El Guabo', phone: '+593 969210645', whatsapp: 'https://wa.me/593969210645', address: 'La Aduana - Circunvalación Norte, junto a la Gasolinera Primax.', mapQuery: 'Gasolinera Primax El Guabo, La Aduana, Circunvalación Norte, El Guabo, Ecuador', mapLink: 'https://maps.app.goo.gl/B3LiFmQyMiFD96LW7' },
    { city: 'Pasaje', phone: '+593 990867289', whatsapp: 'https://wa.me/593990867289', address: 'Calles Machala y Rocafuerte, Esquina.', mapQuery: 'Calles Machala y Rocafuerte, Pasaje, Ecuador', coords: { lat: -3.325795, lng: -79.8076047 }, mapLink: 'https://maps.app.goo.gl/5DvrojjPvHGqkwvy6' },
  ],
} as const;

export function contactUrl(data: { name: string; email: string; phone: string; message: string }) {
  const text = `Hola SERVIKLASSS, soy ${data.name}.\nCorreo: ${data.email}\nTeléfono: ${data.phone}\n\n${data.message}`;
  return `${company.whatsapp}?text=${encodeURIComponent(text)}`;
}
