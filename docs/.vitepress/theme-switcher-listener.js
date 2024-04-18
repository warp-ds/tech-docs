document.addEventListener('change', () => {
  if (window.theme) {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach((s) => {
      if (s.getAttribute('href').includes('@warp-ds/css')) {
        s.setAttribute(
          'href',
          `https://assets.finn.no/pkg/@warp-ds/css/v1/tokens/${theme}.css`,
        );
      }
    });
  }
});