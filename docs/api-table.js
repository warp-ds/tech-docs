export const react = {
  Alert: {
    required: [['type', '\'negative\' | \'positive\' | \'warning\' | \'info\'', 'undefined', `Type of Alert`]],
    props: [
      ['show', 'boolean', 'undefined', `Controls when the alert shows`],
      ['role', 'string', 'alert', `ARIA live region "role" attribute value`],
      ['className', 'string', 'undefined', `Additional classes to include`],
      ['style', 'string', 'undefined', `Additional CSS styles for the container`],
    ]
  },
  Button: {
    required: [],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['onClick', '(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void', '', 'Action to be called when the component is clicked'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      ['type', '|"button"|"submit"|"reset"', 'button', "Button type, only applied when href is not set."],
      ['primary', 'boolean', 'false', 'Set the button to be a primary, call to action button. Can be combined with `small`.'],
      ['secondary', 'boolean', 'true', 'Set the button to be a secondary, flat style button. Can be combined with `quiet` and `small`.'],
      ['negative', 'boolean', 'false', 'Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.'],
      ['utility', 'boolean', 'false', 'Set the button to be a utility style button. Can be combined with `small`.'],
      ['quiet', 'boolean', 'false', 'Quieten down the button, can be combined with other button types.'],
      ['small', 'boolean', 'false', 'Set the button to be a small size, can be combined with other button types.'],
      ['link', 'boolean', 'false', 'Set the button to look like a link. Can be combined with `small`.'],
      ['pill', 'boolean', 'false', 'Set the button to look like a pill style button.'],
      ['loading', 'boolean', 'false', 'Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.'],
      ['href', 'string', '', 'Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation.'],
      ['target', 'string', '', 'Anchor target, see `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a`.'],
      ['rel', 'string', '', 'The relationship of the linked URL.'],
    ],
  },
}

export const vue = {
  Alert: {
    required: [],
    props: [
      ['v-model', 'boolean', 'undefined', `Controls when the alert shows`],
      ['title', 'string', 'undefined', `The title for the alert`],
      ['role', 'string', 'alert', `The aria role for the alert`],
      ['negative', 'boolean', 'undefined', `Creates a negative alert`],
      ['positive', 'boolean', 'undefined', `Creates a positive alert`],
      ['warning', 'boolean', 'undefined', `Creates a warning alert`],
      ['info', 'boolean', 'undefined', `Creates an info alert`],
    ]
  },
  Pill: {
    required: [],
    props: [
      ['label', 'string', 'undefined', `The pill's label`],
      ['canClose', 'boolean', 'false', 'If the pill should be removeable'],
      ['suggestion', 'boolean', 'false', `If the pill should have suggestion-styling`],
    ],
    events: [
      ['close', 'the close button is pressed']
    ]
  },
  Button: {
    required: [],
    props: [
      ['label', 'string', '', 'Interchangeable with the default slot for labelling'],
      ['href', 'string', '', 'When set, an anchor tag will be used instead of a button'],
      ['type', 'string', 'button', "Controls the button's type, unused when `href` is present"],
    ],
    slots: [
      ['default', 'can be used instead of the label prop for button content']
    ],
  },
  ButtonVariants: {
    titles: ['variant', 'modifiers'],
    rows: [
      ['primary', 'negative, quiet, small, loading'],
      ['secondary', 'quiet, small, loading'],
      ['link', 'small'],
      ['utility', 'small, loading'],
      ['pill', ''],
    ]
  },
  ButtonGroup: {
    required: [],
    props: [
      ['outlined', 'boolean', '', 'Outlines the button-group'],
      ['raised', 'boolean', '', 'Adds shadow to the button-group'],
      ['vertical', 'boolean', '', 'Changes the orientation to vertical'],
    ],
    slots: [
      ['default', 'where all the buttons go']
    ]
  },
  ButtonGroupItem: {
    required: [],
    props: [
      ['selected', 'boolean', '', 'Used to give the item a selected appearance - e.g. when used with toggles'],
    ],
    slots: [
      ['default', 'button content']
    ]
  },
  Box: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['bleed', 'boolean', '', 'Will make a box full-width on sm-size'],
      ['clickable', 'boolean', '', 'Applies styling to indicate clickability, does NOT add clickability to the box itself (see `fClickable` for that)'],
      ['bordered', 'boolean', '', 'Adds a lovely border'],
      ['info', 'boolean', '', 'Will style the box with light-blue colors'],
      ['neutral', 'boolean', '', 'Will style the box with light-gray colors'],
    ]
  },
  Clickable: {
    required: [],
    props: [
      ['href', 'string', '', 'When set, an anchor tag will be used instead of a button'],
      ['label', 'boolean', '', 'Will add label-styling to the clickable – for label content, see slots'],
      ['radio', 'boolean', '', 'Will create a radio toggle with label and input elements'],
      ['checkbox', 'boolean', '', 'Will create a checkbox toggle with label and input elements'],
    ]
  },
}

export const elements = {
  Alert: {
    required: [['variant', '\'negative\' | \'positive\' | \'warning\' | \'info\'', 'undefined', `Variant of the alert`]],
    props: [
      ['show', 'boolean', 'false', `Controls when the alert shows`],
      ['role', 'string', 'alert', `ARIA live region "role" attribute value`],
    ]
  },
}