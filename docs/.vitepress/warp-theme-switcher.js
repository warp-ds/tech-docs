import { computed } from "vue";

export default {
  install: (app) => {
    const themes = {
      'Finn': 'finn-no',
      'Tori': 'tori-fi'
    };
    const rewriteStylesheets = (theme) => {
      const roots = [document, ...Array.from(document.querySelectorAll('*')).filter((el) => !!el.shadowRoot).map((el) => el.shadowRoot)];
      roots.forEach((root) => {
        const stylesheets = root.querySelectorAll('link[rel="stylesheet"][href*="/@warp-ds/css/"]');
        stylesheets.forEach((s) => {
          s.setAttribute(
            'href',
            `https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/${theme}.css`,
          );
        });
      });
    };

    const current = computed({
      get() {
        if (!localStorage.getItem('warpTheme')) {
          localStorage.setItem('warpTheme', themes.Finn);
          rewriteStylesheets(themes.Finn);
        }
        return localStorage.getItem('warpTheme');
      },
      set(theme) {
        localStorage.setItem('warpTheme', theme);
        rewriteStylesheets(theme);
      }
    });

    app.provide('warpThemeSwitcher', {
      themes,
      current
    });
  }
}