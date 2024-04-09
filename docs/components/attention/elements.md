### Visual options

#### Callout

```js
<w-attention placement="right" show callout class="flex items-center">
  <div id="target" slot="target">
    <p>This is a target to callout attention element</p>
  </div>
  <span slot="message">Callout on right</span>
</w-attention>
```

#### Tooltip

```js
<w-attention placement="right" tooltip flip>
  <button id="target" slot="target">
    Hover or focus to show a tooltip on right
  </button>
  <span slot="message">I'm a tooltip on right</span>
</w-attention>
```

#### Popover

```js
<w-attention placement="right" popover flip fallback-placements='["left", "bottom", "top"]'>
  <button id="target" onclick="toggleShow()" slot="target">
    Click to toggle a popover on bottom
  </button>
  <span slot="message">I'm a popover on bottom</span>
</w-attention>
```

#### Popover with icon as target element

```js
<w-attention placement="right-end" popover distance="-8" skidding='27'>
  <button id="target" quiet variant="utility" onclick="toggleShow()" slot="target">
    <w-icon-info-16></w-icon-info-16>
  </button>
  <span slot="message">I'm a popover on right-end</span>
</w-attention>
```

#### Highlight (with optional close button)

```js
<w-attention placement="right" highlight id="highlight" can-close flip fallback-placements='["top"]'>
  <button
    id="highlightTarget"
    slot="target"
  >
    Click to toggle a highlight on right
  </button>
  <span slot="message">I'm a dismissible highlight on right</span>
</w-attention>
```
### Flip prop
The attention component uses the Floating-ui library to calculate its position. By default the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side. When `flip`is set to `false`, it will trigger Floating-ui's autoPlacement() function that will automatically reposition the attention component to where there is most space. <a target="_blank" href="https://floating-ui.com/docs/flip#fallbackplacements">Read more about Floating-ui's autoPlacement() function here</a>. When `flip` is set to `true`, it will instead trigger Floating-ui's flip() function that will make sure that the attention component stays in view by flipping it to the opposite side when there is no space left. For example, if `placement` prop is set to `right`, then the attention component will prefer to stay on the `right` side, unless there is no longer any space left on the `right` side, which it will then instead try to position it to the `left` side. <a target="_blank" href="https://floating-ui.com/docs/flip#fallbackplacements">Read more about Floating-ui's flip() function here</a>.

### Fallback-placements prop
By defaut, `fallback-placements` is `undefined`. If `flip`is set to `true`, then you can use `fallback-placements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`. For example, if `placement` is set to `top-start` and `fallback-placements` is set to `['top, left', 'right']`, then it will first try to position the attention component to be on the top-left side of the target-element. If there is no space for the inital `placement`, then it will first try to position the attention component to be top-centered, and then it will instead try to position it to be on the left side, and then on the right-side of the target-element. <a target="_blank" href="https://floating-ui.com/docs/flip#fallbackplacements">Read more about Floating-ui's fallbackPlacements here</a>.

### Accessibility
If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.

Attention element handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute (`role="tooltip"` for tooltip and `role="img"` otherwise), and a default localized `aria-label`. In addition, Attention automatically sets an `aria-details` on its target element, pointing to the slotted message element.

It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the `role` attribute on the relevant text element nested in `w-attention` and reference it by id through the use of `aria-details`. The `aria-details` attribute is on the target element, not on `w-attention`.

```js
<w-attention placement="top" tooltip>
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
