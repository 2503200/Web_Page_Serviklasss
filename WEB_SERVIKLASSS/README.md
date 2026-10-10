# SERVIKLASSS S.A.

Página de una sola sección de navegación para transporte Guayaquil–Machala, desarrollada con React 19, TypeScript, TanStack Start y Tailwind CSS 4. Incluye diseño adaptable, fotografías WebP, SEO, menú móvil, mapas de oficinas y contacto por WhatsApp.

## Ejecutar localmente

Requiere Node.js 22+ y Bun.

```sh
bun install
bun run dev
# Pruebas
bun run test
# Compilación para despliegue
bun run build
```

## Personalización

- `src/lib/company.ts`: direcciones, números, horarios de atención, correo, flota y capacidad.
- `src/routes/index.tsx`: textos, servicios, destinos, navegación, título y descripción SEO.
- `src/styles.css`: colores corporativos, tipografía, espacios y animaciones. Usa Montserrat y Open Sans.
- `src/assets/*.webp`: fotografías optimizadas. Son imágenes generadas e ilustrativas, **no fotografías reales de la flota ni certificaciones de los destinos**. Sustitúyelas por imágenes autorizadas de la empresa antes del lanzamiento si se dispone de ellas. Conserva los avisos mientras sean ilustrativas.
- `public/favicon.png`: icono derivado del autobús de la marca textual.
- El crédito del pie de página utiliza «Diseñado por Lovable»; puede sustituirse por el estudio que efectivamente diseñe o mantenga la página.

Las redes sociales se omiten porque no se suministraron cuentas verificadas. Las encomiendas se muestran como consulta de disponibilidad, no como un servicio confirmado. «Ver horarios» solicita las **salidas** por WhatsApp; los horarios publicados corresponden a **atención de oficinas**.

## Formulario funcional

El formulario valida los campos y abre WhatsApp con nombre, correo, teléfono y mensaje. El visitante confirma el envío en WhatsApp. **No envía correo automáticamente ni almacena mensajes**, y no necesita claves privadas ni una base de datos. Para envío directo por correo deberá configurarse y verificarse un servicio como Formspree o EmailJS antes de cambiar este flujo. El contacto por correo mediante `mailto:` también está disponible.

## Google Maps

La página usa dos iframes de Maps Embed con búsquedas por dirección y la variable pública:

```text
VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY
```

En Lovable está configurada mediante el conector de Google Maps. No copie secretos del servidor al navegador. Los iframes se cargan solo en un dominio `.lovable.app` autorizado; en localhost y vistas previas con credenciales se conserva un bloque de ubicación y el enlace «Ver en Google Maps», evitando errores de autorización y exposición del nombre privado de la vista previa. Para otro proveedor de hosting o un dominio propio, configure su propia clave pública con Maps Embed API habilitada, restricciones para el dominio exacto y actualice la comprobación de dominio en `OfficeMap`. La clave gestionada por Lovable solo admite sus dominios autorizados. Los resultados son búsquedas por dirección; verifique la ubicación exacta de las oficinas antes de publicar. La carga externa de mapas en el dominio publicado no está verificada desde localhost.

## Despliegue

La opción más directa es publicar desde Lovable. La configuración incluida utiliza el adaptador de TanStack Start/Nitro con destino Cloudflare, gestionado por la plataforma.

**Este código fuente no es una carpeta de HTML estático ni una exportación estática precompilada.** No suba el código directamente a GitHub Pages. Para Netlify, Vercel o un servidor Node tradicional, adapte el destino de Nitro en `vite.config.ts` según la documentación del proveedor y de `@lovable.dev/vite-tanstack-config`, ejecute `bun run build` y publique los archivos generados por ese adaptador. Los proveedores no usan necesariamente el mismo directorio de salida.

Para hosting exclusivamente estático se necesita configurar una exportación/prerenderizado completo de `/` y comprobar que los archivos HTML, JavaScript, CSS e imágenes resultantes funcionan sin servidor. Esa exportación no está incluida ni verificada en esta entrega; la aplicación actual conserva TanStack Start para integrarse correctamente con Lovable.

## Accesibilidad y rendimiento

Imágenes WebP locales, carga diferida fuera de la portada, tamaños de imagen definidos, etiquetas de formulario, enlaces telefónicos, controles accesibles por teclado y respeto por la preferencia de movimiento reducido. Las fuentes y Google Maps requieren conexión a Internet; el contacto requiere acceso a WhatsApp.

## Comprobaciones antes de publicar

1. Confirmar las fotografías, destinos turísticos ofrecidos y disponibilidad de encomiendas.
2. Revisar los puntos de Google Maps y los números de WhatsApp.
3. Probar el formulario y confirmar el envío desde WhatsApp.
4. Agregar cuentas sociales reales si existen.
5. Ejecutar las pruebas y revisar en teléfono y escritorio.

Los cambios de título, descripción y contenido llegan al sitio público al publicar una nueva versión.
