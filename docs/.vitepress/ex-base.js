import { createApp } from 'vue';
import Control from './Control.vue';
import Controls from './Controls.vue';

export const buildWc = (elementName, baseVueComponent) => {
  if (typeof window === 'undefined') return;
  if (!customElements.get(elementName))
    customElements.define(
      elementName,
      class extends HTMLElement {
        connectedCallback() {
          const warp = `<link rel="stylesheet" type="text/css" href='https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css' />`;
          const target = `<div id="app" class="mt-16"></div>`;
          const shadowUnoStyle = `<style>
        @unocss-placeholder
        h3 {
          font-weight: bold;
        }
        .component {
          padding: 16px;
          border: 3px solid rgb(246, 248, 250);
          margin-bottom: 8px;
        }
        .options {
          margin-bottom: 8px;

        }
        .options span {
          margin-right: 12px;
          margin-left: 4px;
        }
      </style>`;

          this.shadow = this.attachShadow({ mode: 'open' });
          this.shadow.innerHTML = shadowUnoStyle + warp + target;
          createApp(baseVueComponent)
          .component('demo-control', Control)
          .component('demo-controls', Controls)
          .mount(this.appEl);
          document.addEventListener('change', () => {
            if (window.theme) {
              const stylesheets = this.shadow.querySelectorAll('link');
              stylesheets.forEach((s) => {
                if (s.getAttribute('href').includes('@warp-ds/tokens')) {
                  s.setAttribute(
                    'href',
                    `https://assets.finn.no/pkg/@warp-ds/tokens/v1/${theme}.css`
                  );
                }
              });
            }
          });
        }
        get appEl() {
          return this.shadow.querySelector('#app');
        }
      }
    );
};
