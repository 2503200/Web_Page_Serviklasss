import { describe, expect, it } from 'vitest';
import { company, contactUrl } from '@/lib/company';

describe('SERVIKLASSS company requirements', () => {
  it('has a fleet of 13 vehicles', () => { expect(company.fleetSize).toBe(13); });
  it('has capacity from 15 to 20 passengers', () => { expect(company.capacity).toEqual({ min: 15, max: 20 }); });
  it('uses the supplied weekday office hours', () => { expect(company.hours.find(h => h.day === 'Lunes a viernes')?.time).toBe('05:00 – 20:00'); });
  it('uses the supplied Saturday office hours', () => { expect(company.hours.find(h => h.day === 'Sábados')?.time).toBe('07:00 – 19:00'); });
  it('uses the supplied Sunday office hours', () => { expect(company.hours.find(h => h.day === 'Domingos')?.time).toBe('08:00 – 20:00'); });
  it('routes Guayaquil contact to the supplied number', () => { expect(company.offices[0].whatsapp).toBe('https://wa.me/593986081490'); });
  it('routes El Guabo contact to the supplied number', () => { expect(company.offices[2].phone).toBe('+593 969210645'); expect(company.offices[2].whatsapp).toBe('https://wa.me/593969210645'); });
  it('routes Pasaje contact to the supplied number', () => { expect(company.offices[3].phone).toBe('+593 990867289'); expect(company.offices[3].whatsapp).toBe('https://wa.me/593990867289'); });
  it('routes Machala reservations to the supplied number', () => { expect(company.whatsapp).toBe('https://wa.me/593968664350'); expect(company.offices[1].whatsapp).toBe(company.whatsapp); });
  it('keeps the supplied office addresses', () => {
    expect(company.offices[0].address).toBe('Av. San Jorge #200 E/. Francisco de Icaza y Dr. Juan Carbo Noboa, sector Nueva Kennedy – Frente a Muebles El Arbolito.');
    expect(company.offices[1].address).toBe('Av. Alejandro Castro Benítez y Vía Pajonal, sector Las Crucitas.');
    expect(company.offices[2].address).toBe('La Aduana - Circunvalación Norte, junto a la Gasolinera Primax.');
    expect(company.offices[3].address).toBe('Calles Machala y Rocafuerte, Esquina.');
  });
  it('has four offices including El Guabo and Pasaje', () => {
    expect(company.offices.map(o => o.city)).toEqual(['Guayaquil', 'Machala', 'El Guabo', 'Pasaje']);
  });
  it('uses the supplied Google Maps location links', () => {
    expect(company.offices[1].mapLink).toBe('https://maps.app.goo.gl/KZJozB8uiL6dJyudA');
    expect(company.offices[2].mapLink).toBe('https://maps.app.goo.gl/B3LiFmQyMiFD96LW7');
    expect(company.offices[3].mapLink).toBe('https://maps.app.goo.gl/5DvrojjPvHGqkwvy6');
  });
  it('encodes all contact details without extra URL parameters', () => {
    const url = new URL(contactUrl({ name: 'Ana & José', email: 'ana@example.com', phone: '0991234567', message: 'Viaje a Cuenca? & grupo de 15' }));
    expect(url.origin + url.pathname).toBe('https://wa.me/593968664350');
    expect(url.searchParams.get('text')).toBe('Hola SERVIKLASSS, soy Ana & José.\nCorreo: ana@example.com\nTeléfono: 0991234567\n\nViaje a Cuenca? & grupo de 15');
    expect([...url.searchParams.keys()]).toEqual(['text']);
  });
});