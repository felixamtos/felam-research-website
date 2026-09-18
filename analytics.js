/*
  FELAM analytics configuration
  Replace the placeholders below with your real IDs/tokens after creating
  the corresponding analytics properties. Until configured, no analytics
  request is sent by this file.
*/
(function () {
  const GA_MEASUREMENT_ID = 'G-REPLACE_WITH_YOUR_GA4_ID';
  const CLOUDFLARE_BEACON_TOKEN = 'REPLACE_WITH_YOUR_CLOUDFLARE_TOKEN';

  if (GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes('REPLACE_WITH')) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });

    const ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(ga);
  }

  if (CLOUDFLARE_BEACON_TOKEN && !CLOUDFLARE_BEACON_TOKEN.includes('REPLACE_WITH')) {
    const cf = document.createElement('script');
    cf.defer = true;
    cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    cf.setAttribute('data-cf-beacon', JSON.stringify({ token: CLOUDFLARE_BEACON_TOKEN }));
    document.body.appendChild(cf);
  }
})();
