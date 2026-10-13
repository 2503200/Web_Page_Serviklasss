import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/legal-page';
import { company } from '@/lib/company';
import { setConsent } from '@/lib/consent';

export const Route = createFileRoute('/privacidad')({
  component: Privacy,
  head: () => ({
    meta: [
      { title: 'Política de privacidad y cookies | SERVIKLASSS S.A.' },
      { name: 'description', content: 'Cómo SERVIKLASSS S.A. trata los datos personales de sus clientes y visitantes, conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador.' },
    ],
  }),
});

function Privacy() {
  return (
    <LegalPage title="Política de privacidad y cookies">
      <p>
        En {company.name} respetamos tu privacidad. Esta política explica qué datos personales tratamos cuando visitas este
        sitio web o te comunicas con nosotros, para qué los usamos y cuáles son tus derechos, de acuerdo con la Ley
        Orgánica de Protección de Datos Personales del Ecuador (LOPDP) y su reglamento.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        {company.name}, empresa ecuatoriana de transporte turístico receptivo, con oficinas en Guayaquil, Machala, El Guabo
        y Pasaje. Para cualquier asunto relacionado con tus datos puedes escribirnos a{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a> o acudir a cualquiera de nuestras oficinas.
      </p>

      <h2>2. Qué datos tratamos</h2>
      <ul>
        <li><strong>Datos que tú nos das:</strong> nombre, número de teléfono, correo electrónico y el contenido de tu mensaje cuando usas el formulario de contacto o nos escribes por WhatsApp, correo o teléfono.</li>
        <li><strong>Datos para la prestación del servicio:</strong> cuando contratas un tour o traslado, los datos necesarios para organizarlo (por ejemplo, nombres de los pasajeros, número de documento de identidad, fecha, lugar de recogida y número de personas).</li>
        <li><strong>Datos técnicos:</strong> nuestro proveedor de alojamiento web puede registrar de forma automática datos técnicos como la dirección IP y el tipo de navegador, con fines de seguridad y funcionamiento del sitio.</li>
      </ul>
      <p>Este sitio web no almacena en una base de datos propia la información del formulario de contacto: el formulario solo prepara un mensaje que tú decides enviar por WhatsApp.</p>

      <h2>3. Para qué usamos tus datos</h2>
      <ul>
        <li>Responder tus consultas y enviarte cotizaciones.</li>
        <li>Gestionar reservas de tours, viajes grupales y traslados turísticos.</li>
        <li>Cumplir obligaciones legales, tributarias y las exigidas por las autoridades de turismo y transporte.</li>
        <li>Mantener la seguridad y el buen funcionamiento del sitio web.</li>
      </ul>
      <p>No vendemos ni alquilamos tus datos personales, y no los usamos para publicidad sin tu consentimiento.</p>

      <h2>4. Base legal</h2>
      <p>
        Tratamos tus datos sobre la base de tu consentimiento (cuando nos escribes o aceptas esta política), de la
        ejecución del servicio que nos solicitas y del cumplimiento de nuestras obligaciones legales. Puedes retirar tu
        consentimiento en cualquier momento.
      </p>

      <h2>5. Con quién compartimos tus datos</h2>
      <p>Solo compartimos datos cuando es necesario para prestarte el servicio o por obligación legal. Usamos estos servicios de terceros:</p>
      <ul>
        <li><strong>WhatsApp (Meta):</strong> para la comunicación contigo cuando eliges escribirnos por ese medio.</li>
        <li><strong>Google Maps y Google Fonts (Google):</strong> para mostrar los mapas de nuestras oficinas y la tipografía del sitio.</li>
        <li><strong>Cloudflare:</strong> proveedor de alojamiento y seguridad del sitio web.</li>
        <li><strong>Autoridades competentes:</strong> cuando la ley lo exija.</li>
      </ul>
      <p>Algunos de estos proveedores pueden procesar datos fuera del Ecuador, bajo sus propias políticas de privacidad y medidas de seguridad.</p>

      <h2>6. Cuánto tiempo conservamos tus datos</h2>
      <p>
        Conservamos tus datos solo durante el tiempo necesario para atender tu consulta o prestar el servicio contratado y,
        después, durante los plazos que exijan las leyes ecuatorianas (por ejemplo, en materia tributaria). Luego los
        eliminamos o anonimizamos.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Conforme a la LOPDP, tienes derecho a acceder a tus datos, rectificarlos y actualizarlos, solicitar su eliminación,
        oponerte a su tratamiento, pedir su portabilidad y solicitar la suspensión del tratamiento. Para ejercerlos,
        escríbenos a <a href={`mailto:${company.email}`}>{company.email}</a> indicando tu nombre, el derecho que quieres
        ejercer y un medio de contacto. Responderemos dentro de los plazos establecidos por la ley. Si consideras que no
        hemos atendido adecuadamente tu solicitud, puedes acudir a la Superintendencia de Protección de Datos Personales.
      </p>

      <h2>8. Seguridad</h2>
      <p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra pérdida, uso indebido o acceso no autorizado.</p>

      <h2>9. Menores de edad</h2>
      <p>Este sitio no está dirigido a menores de edad. Las reservas para menores deben ser realizadas por sus padres o representantes legales.</p>

      <h2 id="cookies">10. Cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu navegador. Este sitio <strong>no usa cookies propias
        de publicidad ni de analítica</strong>. Solo guardamos en tu navegador tu elección sobre el aviso de cookies, para no
        volver a preguntarte.
      </p>
      <p>
        Los mapas de nuestras oficinas se cargan desde Google Maps, que puede instalar sus propias cookies. Por eso solo
        mostramos los mapas si aceptas las cookies de terceros. Si eliges «Solo necesarias», podrás ver la ubicación de
        cada oficina con el botón «Ver en Google Maps».
      </p>
      <p><button type="button" className="legal-link-button" onClick={() => setConsent(null)}>Cambiar mis preferencias de cookies</button></p>

      <h2>11. Cambios en esta política</h2>
      <p>Podemos actualizar esta política. Publicaremos cualquier cambio en esta página, indicando la fecha de la última actualización.</p>
    </LegalPage>
  );
}
