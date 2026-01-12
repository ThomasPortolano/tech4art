(() => {
  const playStoreLinks = document.querySelectorAll('[data-play-store-link="true"]');

  for (const link of playStoreLinks) {
    link.addEventListener('click', () => {
      window.dispatchEvent(
        new CustomEvent('odyssee:outbound', {
          detail: {
            destination: 'google-play',
            href: link.href,
          },
        })
      );
    });
  }
})();

