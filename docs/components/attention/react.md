### Import

```js
import { Attention } from '@warp-ds/react'
```

### Visual options

#### Callout

```js
<div>
  <Box info>
    <h1 aria-details='callout-bubbletext'>I am a box full of info</h1>
  </Box>
  <Attention callout placement='right' isShowing={true}>
    <p id='callout-bubbletext'>
      I'm a callout because that box over there is new or something
    </p>
  </Attention>
</div>
```

#### Tooltip

```js
function Example() {
  const [show, setShow] = React.useState(false)
  const targetEl = React.useRef()

  return (
    <div>
      <Button
        ref={targetEl}
        utility
        aria-describedby='tooltip-bubbletext'
        aria-expanded={show}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      >
        hover this for useless info
      </Button>
      <Attention
        tooltip
        placement='bottom'
        targetEl={targetEl}
        isShowing={show}
      >
        <p id='tooltip-bubbletext'>I am a tooltip</p>
      </Attention>
    </div>
  )
}
```

#### Popover

```js
function Example() {
  const [show, setShow] = React.useState(false)
  const targetEl = React.useRef()

  return (
    <div>
      <Button
        small
        aria-expanded={show}
        aria-controls='popover-attention-example'
        aria-details='popover-bubbletext'
        utility
        onClick={() => setShow(!show)}
        ref={targetEl}
      >
        Open menu
      </Button>
      <Attention
        popover
        placement='bottom'
        targetEl={targetEl}
        isShowing={show}
        id='popover-attention-example'
      >
        <ul id='popover-bubbletext'>
          <li>Hello</li>
          <li>World</li>
        </ul>
      </Attention>
    </div>
  )
}
```

#### Highlight (with optional close button)

```js
function DismissibleHighlight() {
  const [show, setShow] = React.useState(false)
  const targetEl = React.useRef()

  return (
    <div className='flex flex-col justify-between h-[200]'>
      <Button
        small
        aria-expanded={show}
        aria-controls='highlight-attention-example'
        utility
        onClick={() => setShow(!show)}
        className='w-max mb-0'
      >
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-2/3" aria-details='highlight-bubble-text'>
          <Box info>
            <h1>I am a box full of info</h1>
          </Box>
        </div>
        <Attention
          highlight
          canClose
          onDismiss={() => setShow(false)}
          placement='top'
          isShowing={show}
          targetEl={targetEl}
          id='highlight-attention-example'
        >
          <p id='highlight-bubble-text'>
            I'm a highlight that can dismiss itself
          </p>
        </Attention>
      </div>
    </div>
  )
}
```

### Accessibility

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute (`role="tooltip"` for tooltip and `role="img"` otherwise), and a default localized `aria-label`.

It is possible to override the `role` and `aria-label` attributes:

```js
<Attention tooltip placement='right' isShowing={true} role='' aria-label=''>
  <p id='tooltip-bubbletext' role='tooltip'>
    I'm a tooltip speech bubble with overridden role and aria-label attributes
    pointing up.
  </p>
</Attention>
```

If the user chooses to override the `role` and `aria-label` attributes then it is important to also add `aria-details` on the target element. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details">Read more about `aria-detail` here</a>

### Props

<api-table type="react" component="Attention" />
