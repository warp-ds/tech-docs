import { createApp } from 'vue'

export const buildWc = (elementName, baseVueComponent) => {
  if (typeof window === 'undefined') return
  if (!customElements.get(elementName)) customElements.define(elementName, class extends HTMLElement {
    connectedCallback() {
      const warp = `<link rel="stylesheet" type="text/css" href='https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css' />`
      const target = `<div id="app" class="mt-16"></div>`
      const shadowUnoStyle = `<style>@unocss-placeholder</style>`
      
      this.shadow = this.attachShadow({ mode: 'open' })
      this.shadow.innerHTML = warp + shadowUnoStyle + target    
      createApp(baseVueComponent).mount(this.appEl)
      document.addEventListener("change", () => {
        if (window.theme) {
          const stylesheets = this.shadow.querySelectorAll('link');
          stylesheets.forEach(s => {
            if (s.getAttribute('href').includes('@warp-ds/tokens')) {
              s.setAttribute('href', `https://assets.finn.no/pkg/@warp-ds/tokens/v1/${theme}.css`);
            }
          });
        }
      });  
    }
    get appEl() {
      return this.shadow.querySelector('#app');
    }
  })
}