### Visual options

#### Popover

```js
<w-attention placement="bottom" popover="">
  <button id="target" onclick="toggleShow()" slot="target">
    Click to toggle a popover on bottom
  </button>
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

#### Highlight (with optional close button)

```js
<w-attention placement="right" highlight id="highlight" can-close="">
  <button
    id="highlightTarget"
    slot="target"
  >
    Click to toggle a highlight on right
  </button>
  <span slot="message">I'm a dismissible highlight on right</span>
</w-attention>
```

### Accessibility
If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.

Attention element handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute (`role="tooltip"` for tooltip and `role="img"` otherwise), and a default localized `aria-label`. In addition, Attention automatically sets an `aria-details` on its target element, pointing to the slotted message element.

It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the `role` attribute on the relevant text element nested in `w-attention` and reference it by id through the use of `aria-details`. The `aria-details` attribute is on the target element, not on `w-attention`.

```js
<w-attention placement="top" tooltip="">
  <div slot="message">
    <p id="aria-content" role="tooltip">This tooltip text is important</p>
    <p>(this text is less relevant)</p>
  </div>
  <button aria-describedby="aria-content" id="target" slot="target">
    Click to toggle a tooltip on top
  </button>
</w-attention>
```

### Props

<api-table type="elements" component="Attention" />
