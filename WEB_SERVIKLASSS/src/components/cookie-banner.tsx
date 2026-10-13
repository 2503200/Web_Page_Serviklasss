import { Button } from '@/components/ui/button';
import { setConsent, useConsent } from '@/lib/consent';

export function CookieBanner() {
  const consent = useConsent();
  if (consent !== null) return null;
  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p>
        Este sitio no usa cookies propias de publicidad ni de seguimiento. Los mapas de nuestras oficinas se muestran con
        Google Maps, que puede instalar cookies de terceros. Puedes aceptarlas o continuar sin ellas. Más información en
        nuestra <a href="/privacidad#cookies">Política de privacidad</a>.
      </p>
      <div className="cookie-actions">
        <Button variant="outline" size="sm" onClick={() => setConsent('necessary')}>Solo necesarias</Button>
        <Button variant="cta" size="sm" onClick={() => setConsent('all')}>Aceptar</Button>
      </div>
    </div>
  );
}
