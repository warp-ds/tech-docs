## Usage

```js
<w-button variant="primary">Primary button</w-button>
```

## Variants

### Primary
The primary button is a call to action. Can be combined with "small" attribute.

```js
<w-button variant="primary">Primary button</w-button>
<w-button variant="primary" small>Primary button small</w-button>
```

### Secondary
The secondary button is for secondary or tertiary actions. Can be combined with "small" and "quiet" attributes. "secondary" is the default value of the "variant" attribute.

```js
<w-button variant="secondary">Secondary button</w-button>
<w-button variant="secondary" small>Secondary button small</w-button>
```

### Negative
The negative button is for emphasizing actions that can be destructive or have negative consequences if taken. Can be combined with "small" and "quiet" attributes.

```js
<w-button variant="negative">Negative button</w-button>
<w-button variant="negative" small>Negative button small</w-button>
```

### Utility

```js
<w-button variant="utility">Utility button</w-button>
<w-button variant="utility" small>Utility button small</w-button>
```

### Link

```js
<w-button variant="link">Link button</w-button>
<w-button variant="link" small>Link button small</w-button>
```

### Pill

```js
<w-button variant="pill">💙</w-button>
<w-button variant="pill" small>💙</w-button>
```

## Quiet
By default, buttons have a visible stroke and fill. Quiet buttons do not have this visible stroke or fill and should only be used for secondary actions within a button group. Quiet buttons have the same padding rules as other action buttons and reveal a button-like background color when hovered.
```js
<w-button quiet="">Quiet secondary button</w-button>
<w-button quiet="" variant="negative">Quiet negative button</w-button>
<w-button quiet="" variant="utility">Quiet utility button</w-button>
```

## Link
Buttons will be rendered as an anchor (a tag) if they use an href attribute.
```js
<w-button href="https://google.no">Button as anchor</w-button>
```

## Loading state
To show the user that the action they triggered has begun, buttons have an in progress or loading state.
```js
<w-button variant="primary" loading="">Primary button loading</w-button>
```

## Disabled state

Disabled is an anti-pattern and is not supported. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons.

## Props

<api-table type=elements component="Button" />
