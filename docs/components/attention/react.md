### Import

```js
import { Attention } from '@warp-ds/react';
```

### Visual options

#### Callout

```js
<div>
  <Box info>
    <h1 aria-details="callout-bubbletext">I am a box full of info</h1>
  </Box>
  <Attention callout placement="right" isShowing={true}>
    <p id="callout-bubbletext">I'm a callout because that box over there is new or something</p>
  </Attention>
</div>
```

#### Tooltip

```js
function Example() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef();

  return (
    <div>
      <h1
        ref={targetEl}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <button
          aria-describedby='tooltip-bubbletext'
          aria-expanded='true'
          type='button'
          className='bg-transparent'
        >
          hover this for useless info
        </button>
      </h1>
      <Attention
        tooltip
        placement="bottom"
        targetEl={targetEl}
        isShowing={show}
      >
        <p id="tooltip-bubbletext">lol i am a popover</p>
      </Attention>
    </div>
  );
}
```

#### Popover

```js
function Example() {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef();
  const targetEl = React.useRef();

  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  });

  return (
    <div ref={containerRef}>
      <Button
        small
        aria-expanded={show}
        aria-controls='popover-example'
        aria-details='popover-bubbletext'
        utility
        onClick={() => setShow(!show)}
        ref={targetEl}
      >
        Open menu
      </Button>
      <Attention
        popover
        placement="bottom"
        targetEl={targetEl}
        isShowing={show}
      >
        <ul id="popover-bubbletext">
          <li tabIndex={0} >
            Hello
          </li>
          <li tabIndex={0} >
            World
          </li>
        </ul>
      </Attention>
    </div>
  );
}
```

### Props

<api-table type="react" component="Attention" />
