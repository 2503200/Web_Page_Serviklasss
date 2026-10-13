import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/legal-page';
import { company } from '@/lib/company';

export const Route = createFileRoute('/terminos')({
  component: Terms,
  head: () => ({
    meta: [
      { title: 'Términos y condiciones | SERVIKLASSS S.A.' },
      { name: 'description', content: 'Términos y condiciones de uso del sitio web de SERVIKLASSS S.A., empresa de transporte turístico receptivo en Ecuador.' },
    ],
  }),
});

function Terms() {
  return (
    <LegalPage title="Términos y condiciones de uso">
      <p>
        Bienvenido al sitio web de {company.name}. Al navegar por este sitio aceptas estos términos y condiciones. Si no
        estás de acuerdo con ellos, te pedimos no utilizar el sitio.
      </p>

      <h2>1. Sobre nosotros</h2>
      <p>
        {company.name} es una empresa ecuatoriana de transporte turístico receptivo que ofrece tours, viajes grupales y
        traslados turísticos. Puedes contactarnos en <a href={`mailto:${company.email}`}>{company.email}</a> o en
        cualquiera de nuestras oficinas.
      </p>

      <h2>2. Uso del sitio</h2>
      <p>
        Este sitio tiene fines informativos y de contacto. Te comprometes a usarlo de forma lícita, a no intentar dañarlo
        ni acceder sin autorización a sus sistemas, y a proporcionar información veraz cuando nos contactes.
      </p>

      <h2>3. Información, cotizaciones y reservas</h2>
      <ul>
        <li>La información publicada sobre servicios, destinos y flota es referencial y puede cambiar sin previo aviso.</li>
        <li>Las solicitudes enviadas por el formulario, WhatsApp, correo o teléfono no constituyen una reserva confirmada.</li>
        <li>Una reserva se considera confirmada solo cuando nuestro equipo la confirma de forma expresa, junto con el precio, la fecha y las condiciones del servicio.</li>
        <li>Las condiciones de pago, cambios y cancelaciones se informarán al momento de la cotización o confirmación de cada servicio.</li>
        <li>La asignación de vehículos está sujeta a disponibilidad.</li>
      </ul>

      <h2>4. Imágenes y contenido</h2>
      <p>
        Las fotografías de destinos turísticos son ilustrativas. Los textos, el logotipo, la marca y las imágenes propias de
        {' '}{company.name} están protegidos y no pueden copiarse ni usarse con fines comerciales sin nuestra autorización.
      </p>

      <h2>5. Enlaces a terceros</h2>
      <p>
        Este sitio contiene enlaces y servicios de terceros, como WhatsApp y Google Maps. No somos responsables del
        contenido ni de las políticas de privacidad de esos servicios.
      </p>

      <h2>6. Responsabilidad</h2>
      <p>
        Procuramos que la información del sitio sea correcta y esté actualizada, pero no garantizamos que esté libre de
        errores ni que el sitio funcione sin interrupciones. No seremos responsables por daños derivados del uso del sitio
        o de la imposibilidad de acceder a él, en la medida permitida por la ley.
      </p>

      <h2>7. Datos personales</h2>
      <p>
        El tratamiento de tus datos personales se rige por nuestra <a href="/privacidad">Política de privacidad y cookies</a>.
      </p>

      <h2>8. Cambios</h2>
      <p>Podemos modificar estos términos en cualquier momento. La versión vigente será siempre la publicada en esta página.</p>

      <h2>9. Ley aplicable</h2>
      <p>Estos términos se rigen por las leyes de la República del Ecuador. Cualquier controversia se someterá a los jueces competentes del Ecuador.</p>
    </LegalPage>
  );
}
