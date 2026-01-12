(() => {
  const playStoreLinks = document.querySelectorAll('[data-play-store-link="true"]');
  const contactLinks = document.querySelectorAll('[data-contact-link="true"]');
  const faqItems = document.querySelectorAll('[data-faq-item="true"]');

  for (const link of playStoreLinks) {
    link.addEventListener('click', () => {
      const language = document.documentElement.lang || 'unknown';
      const location = link.getAttribute('data-cta-location') || 'unknown';

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'lead_cta_click', {
          content_language: language,
          cta_location: location,
          destination: 'google-play',
          link_url: link.href,
          transport_type: 'beacon',
        });
      }

      window.dispatchEvent(
        new CustomEvent('odyssee:outbound', {
          detail: {
            destination: 'google-play',
            href: link.href,
            content_language: language,
            cta_location: location,
          },
        })
      );
    });
  }

  for (const link of contactLinks) {
    link.addEventListener('click', () => {
      const language = document.documentElement.lang || 'unknown';
      const location = link.getAttribute('data-contact-location') || 'unknown';
      const type = link.getAttribute('data-contact-type') || 'unknown';

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contact_click', {
          content_language: language,
          contact_location: location,
          contact_type: type,
          link_url: link.href,
          transport_type: 'beacon',
        });
      }
    });
  }

  for (const [index, details] of faqItems.entries()) {
    details.addEventListener('toggle', () => {
      const language = document.documentElement.lang || 'unknown';
      const id = details.getAttribute('data-faq-id') || 'unknown';
      const question = details.querySelector('summary')?.textContent?.trim() || 'unknown';
      const state = details.open ? 'open' : 'close';

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'faq_toggle', {
          content_language: language,
          faq_id: id,
          faq_question: question,
          faq_index: index + 1,
          faq_state: state,
          transport_type: 'beacon',
        });
      }
    });
  }
})();
