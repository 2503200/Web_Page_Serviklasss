import { useSyncExternalStore } from 'react';

// Consentimiento de cookies de terceros (Google Maps). Se guarda solo en el navegador del visitante.
export type Consent = 'all' | 'necessary';
export type ConsentState = Consent | null | 'pending';

const KEY = 'serviklasss-cookie-consent';
const EVENT = 'serviklasss-consent-change';

function read(): ConsentState {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === 'all' || value === 'necessary' ? value : null;
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

export function setConsent(value: Consent | null) {
  try {
    if (value) window.localStorage.setItem(KEY, value);
    else window.localStorage.removeItem(KEY);
  } catch {
    // El navegador puede bloquear el almacenamiento; la elección vale solo para esta visita.
  }
  window.dispatchEvent(new Event(EVENT));
}

/** 'pending' mientras la página se renderiza en el servidor, para no mostrar el aviso antes de tiempo. */
export function useConsent(): ConsentState {
  return useSyncExternalStore(subscribe, read, () => 'pending');
}
