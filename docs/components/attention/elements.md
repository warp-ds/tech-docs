### Visual options

#### Popover

```js
<w-attention placement="bottom" popover="">
  <w-button id="target" primary onclick="toggleShow()" slot="target">
    Click to toggle a popover on bottom
  </w-button>
  <span slot="message">I'm a popover on bottom</span>
</w-attention>
```

#### Callout

```js
<w-attention placement="right" show="" callout="" class="flex items-center">
  <div id="target" slot="target">
    <p>This is a target to callout attention element</p>
  </div>
  <span slot="message">Callout on right</span>
</w-attention>
```

#### Tooltip

```js
<w-attention placement="right" tooltip="">
  <button id="target" slot="target">
    Hover or focus to show a tooltip on right
  </button>
  <span slot="message">I'm a tooltip on right</span>
</w-attention>
```

### Accessibility
If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.

Attention element handles accessibility automatically by wrapping its slotted content with a `div` with either `role="tooltip"` for tooltip or `role="img"` for callout and popover, a default `aria-label` and setting an `aria-details` attribute on the target element. The default `aria-label` also supports i18n. 

It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the `role` attribute on the relevant text element nested in `w-attention` and reference it by id through the use of `aria-details`. The `aria-details` attribute is on the target element, not on `w-attention`.

```js
<w-attention placement="top" popover="">
  <div slot="message">
    <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
    <p>(this text is less relevant)</p>
  </div>
  <button aria-details="aria-content" id="target" slot="target">
    Click to toggle a popover on top
  </button>
</w-attention>
```

### Props

<api-table type="elements" component="Attention" />
