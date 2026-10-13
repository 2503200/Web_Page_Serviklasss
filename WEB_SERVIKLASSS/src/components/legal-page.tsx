import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { company } from '@/lib/company';

export const LEGAL_UPDATED = '12 de octubre de 2026';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container-site legal-header-inner">
          <a href="/" aria-label="SERVIKLASSS S.A. Inicio"><img src="/images/serviklasss-logo.png" alt="Serviklasss S.A." className="brand-logo" width={1583} height={504} /></a>
          <a href="/" className="legal-back"><ArrowLeft size={15} />Volver al inicio</a>
        </div>
      </header>
      <main className="container-site legal-content">
        <h1>{title}</h1>
        <p className="legal-updated">Última actualización: {LEGAL_UPDATED}</p>
        {children}
      </main>
      <footer className="legal-footer">
        <div className="container-site">
          <span>© {new Date().getUTCFullYear()} {company.name}</span>
          <nav aria-label="Documentos legales"><a href="/privacidad">Política de privacidad</a><a href="/terminos">Términos y condiciones</a></nav>
        </div>
      </footer>
    </div>
  );
}
