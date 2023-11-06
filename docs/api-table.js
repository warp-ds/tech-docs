export const react = {
  Affix: {
    title: 'Affix props',
    props: [
      ['aria-label', 'string', '', 'Defines a string value that labels the affix element'],
      ['prefix', 'boolean', '', 'Affix added at the beginning of input'],
      ['suffix', 'boolean', '', 'Affix added at the end of input'],
      ['clear', 'boolean', '', 'Displays a clear icon'],
      ['search', 'boolean', '', 'Displays a search icon'],
      ['label', 'string', '', 'Displays a string'],
    ],
    events: [
      ['onClick', '() => void', '', 'Click handler paired with clear or search'],
    ]
  },
  Alert: {
    required: [
      [
        'type',
        "'negative' | 'positive' | 'warning' | 'info'",
        'undefined',
        `Type of Alert`,
      ],
    ],
    props: [
      ['show', 'boolean', 'undefined', 'Controls when the alert shows'],
      ['role', 'string', 'alert', 'ARIA live region "role" attribute value'],
      ['className', 'string', 'undefined', 'Additional classes to include'],
      [
        'style',
        'string',
        'undefined',
        `Additional CSS styles for the container`,
      ],
    ],
  },
  Attention: {
    required: [
      [
        'placement', "'top' | 'bottom' | 'left' | 'right' ", '', `Placement according to the target element. The arrow will point to the opposite side of this position`,
      ],
    ],
    props: [
      ['noArrow', 'boolean', 'false', 'Render Attention component without arrow'],
      ['isShowing', 'boolean', '', 'Whether Attention component is shown Used for tooltip'],
      ['children', 'Element | Element[]', '', 'Elements inside of the Attention component'],
      ['targetEl', 'MutableRefObject<unknown>', '', 'The reference container to which the Attention component is positioned relative to'],
      ['className', 'string', '', 'Extend the Attention component container styling'],
      ['tooltip', 'boolean', '', 'Whether Attention component is rendered as a tooltip'],
      ['callout', 'boolean', '', 'Whether Attention component is rendered as a callout'],
      ['popover', 'boolean', '', 'Whether Attention component is rendered as a popover'],
      ['highlight', 'boolean', '', 'Whether Attention component is rendered as a highlight'],
      ['ref', 'Ref<HTMLDivElement>', '', 'Forward arrow ref so Attention element can use it'],
      ['role', 'string', '', 'Allows the user to override the default ARIA role attribute for the Attention component'],
      ['aria-label', 'string', '', 'Allows the user to override the default aria-label attribute for the Attention component'],
      ['canClose', 'boolean', '', 'Whether a close button is shown'],
    ],
    events: [
      ['onDismiss', '() => void', '', 'Called when user clicks the close button or presses Escape when the button is in focus.'],
    ],
  },
  Badge: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'notification', 'price'",
        "'neutral'",
        'Variant of the badge',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        "undefined",
        'Used for absolute positioning of the badge within a container',
      ],
      ['children', 'Element | Element[] | string', '', 'Content of the Badge component'],
      ['className', 'string', '', 'Additional CSS classes to apply to the component'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
    ],
  },
  Box: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['bleed', 'boolean', 'false', 'Will make a box full-width on sm-size'],
      ['bordered', 'boolean', 'false', 'Adds a lovely border'],
      [
        'info',
        'boolean',
        'false',
        'Will style the box with colors for indicating that it has informative content',
      ],
      [
        'neutral',
        'boolean',
        'false',
        'Will style the box in a neutral fashion',
      ],
      [
        '~~clickable~~',
        'boolean',
        'false',
        'Applies styling to indicate click-ability, does NOT add click-ability to the box itself (see `wClickable` for that). @deprecated For rendering a clickable box, use `Card` component.',
      ],
    ],
  },
  Breadcrumbs: {
    required: [],
    props: [
      [
        'aria-label',
        'string',
        'Her er du',
        'Defines a string value that labels the affix element.',
      ],
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
    ],
  },
  Button: {
    required: [],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      [
        'type',
        '"button"|"submit"|"reset"',
        'button',
        'Button type, only applied when href is not set.',
      ],
      [
        'primary',
        'boolean',
        'false',
        'Set the button to be a primary, call to action button. Can be combined with `small`.',
      ],
      [
        'secondary',
        'boolean',
        'false',
        'Set the button to be a secondary button. Can be combined with `quiet` and `small`.',
      ],
      [
        'negative',
        'boolean',
        'false',
        'Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.',
      ],
      [
        'utility',
        'boolean',
        'false',
        'Set the button to be a utility style button. Can be combined with `small`.',
      ],
      [
        'quiet',
        'boolean',
        'false',
        'Quieten down the button, can be combined with other button types.',
      ],
      [
        'small',
        'boolean',
        'false',
        'Set the button to be a small size, can be combined with other button types.',
      ],
      [
        'link',
        'boolean',
        'false',
        'Set the button to look like a link. Can be combined with `small`.',
      ],
      [
        'pill',
        'boolean',
        'false',
        'Set the button to look like a pill style button.',
      ],
      [
        'loading',
        'boolean',
        'false',
        'Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.',
      ],
      [
        'href',
        'string',
        '',
        'Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation.',
      ],
      [
        'target',
        'string',
        '',
        'Anchor target, see `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a`.',
      ],
      ['rel', 'string', '', 'The relationship of the linked URL.'],
      [
        'fullWidth',
        'boolean',
        '',
        "Sets the button's width to its parent's width. Useful especially on mobile when button should take full width.",
      ],
    ],
  },
  Card: {
    required: [['children', 'Element<br />|Element[]', '', 'The contents of the Card']],
    props: [
      ['className', 'string', '', 'Add your own custom styles to the container element'],
      ['as', 'string<br />|Component', 'div', 'The wrapping container element'],
      ['selected', 'boolean', '', 'If the card is selected'],
      [
        'flat',
        'boolean',
        '',
        'Removes box shadow around card',
      ],
    ],
  },
  Combobox: {
    required: [
      ['options', 'ComboboxOption[]', '', 'The available options to select from'],
      ['value', 'string', '', 'The TextField input value'],
      ['onChange', '(value: string) => void', '', 'Called when the value of the input changes'],
    ],
    props: [
      ['id', 'string', '', 'Unique identifier for the input field'],
      ['label', 'string', '', 'Label above input'],
      ['placeholder', 'string', '', 'Input placeholder'],
      ['openOnFocus', 'boolean', 'false', 'Whether the popover opens when focus is on the text field'],
      ['selectOnBlur', 'boolean', 'true', 'Select active option on blur'],
      ['matchTextSegments', 'boolean', 'false', 'Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override `[data-combobox-text-match]`. This uses the default matching algorithm. Use the `highlightValueMatch` to pass your own matching function.'],
      ['disableStaticFiltering', 'boolean', 'false', 'Disable client-side static filtering'],
      ['highlightValueMatch', '(optionValue: string, inputValue: string) => ReactNode', '', 'Pass your own function for highlight matching'],
      ['invalid', 'boolean', '', 'Renders the input field in an invalid state. Often paired together with `helpText` to provide feedback about the error'],
      ['helpText', 'ReactNode', '', 'The content to display as the help text'],
      ['className', 'string', '', 'Additional container styling'],
      ['listClassName', 'string', '', 'Additional list styling'],
      ['aria-label', 'number', '', 'Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined. Defines a string value that labels the current element. @see aria-labelledby.'],
      ['aria-labelledby', 'string', '', 'Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined. Identifies the element (or elements) that labels the current element.'],
      ['children', 'ReactNode', '', 'For Affix use'],
      [
        'optional',
        'boolean',
        '',
        'Whether to show optional text',
      ],
    ],
    events: [
      ['onSelect', '((value: string) => void) & ReactEventHandler<HTMLInputElement>', '', 'Called when the user selects an option'],
      ['onFocus', '(() => void) & FocusEventHandler<HTMLInputElement>', '', 'Called when the input is focus'],
      ['onBlur', '((value: string) => void) & FocusEventHandler<HTMLInputElement>', '', 'Called when the input loses focus with the current navigation value or input value'],
    ],
  },
  DeadToggle: {
    required: [],
    props: [
      [
        'radio',
        'boolean',
        '',
        'Passes radio type to the underlying toggle',
      ],
      [
        'checkbox',
        'boolean',
        '',
        'Passes checkbox type to the underlying toggle',
      ],
      [
        'value',
        'string',
        '',
        'Value for the input',
      ],
      [
        'checked',
        'boolean',
        '',
        'Whether the toggle is checked',
      ],
      ['className', 'string', '', 'Additional classnames to the toggle wrapper'],
      ['labelClassName', 'string', '', 'Additional classnames to the toggle label'],
    ],
  },
  Expandable: {
    required: [['title', 'string', '', 'The title for the expandable']],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      ['style', 'CSSProperties', '', 'CSS styles to inline on the component'],
      ['info', 'boolean', 'false', 'Styles the box with a color'],
      [
        'expanded',
        'boolean',
        'false',
        'The state of the component, either true for expanded or false for closed',
      ],
      [
        'bleed',
        'boolean',
        '',
        'Will make the expandable full-width on sm-size',
      ],
      ['box', 'boolean', '', 'Will make the expandable a Box'],
      [
        'buttonClass',
        'string',
        '',
        'Additional CSS classes to include on the button part of the component',
      ],
      [
        'contentClass',
        'string',
        '',
        'Additional CSS classes to include on the content part of the component',
      ],
      ['animated', 'boolean', '', 'Will animate the expansion/collapse'],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
      [
        'headingLevel',
        'HeadingLevel',
        '',
        'Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element',
      ],
    ],
    events: [
      [
        'onChange',
        '(state: boolean) => void',
        '',
        'Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.',
      ],
    ],
  },
  Modal: {
    required: [
      ['children', 'Element<br />|Element[]', '', 'The modal contents'],
      ['open', 'boolean', '', 'Whether the modal is open or not'],
    ],
    props: [
      ['title', 'string<br />|Element<br />|Element[]', '', 'A string or your own custom elements'],
      ['left', 'boolean<br />|Element<br />|Element[]', '', 'A default back button or your own custom elements'],
      ['right', 'boolean<br />|Element<br />|Element[]', '', 'A default close button or your own custom elements'],
      ['footer', 'Element<br />|Element[]', '', 'Buttons passed to the footer'],
      ['className', 'string', '', 'Additional classes added to the container'],
      ['id', 'string', '', 'An id for the container and ARIA attributes. A random id is generated if none is provided.'],
      ['style', 'CSSProperties', '', 'Additional styles to the container. [More info about CSSProperties](https://legacy.reactjs.org/docs/dom-elements.html#style)'],
      ['aria-label', 'number', '', 'Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,'],
      ['aria-labelledby', 'string', '', 'Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.'],
      ['initialFocusRef', 'RefObject<any>', '', `A reference to the element that should be focused. By default it'll be the first interactive element. [More info](https://react.dev/learn/manipulating-the-dom-with-refs)`],
    ],
    events: [
      [ 'onDismiss', '() => void', '', 'Handler that is called when the user presses esc or clicks outside the modal.'],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['label', 'string', 'undefined', 'The text content of the pill.'],
      ['~~icon~~', 'ReactNode', 'undefined', 'Used to render an icon inside the pill. You can pass any valid HTML. This will override the label property. @deprecated Do not use.'],
      ['canClose', 'boolean', 'false', 'Whether the pill should be removable via a close button.'],
      ['~~openSRLabel~~', 'string', 'Open filter', 'Used to render a label read by screen readers when targeting the pill. @deprecated Do not use.'],
      ['~~closeSRLabel~~', 'string', 'Remove filter', 'Used to render a label read by screen readers when targeting the close button. @deprecated Do not use.'],
      ['suggestion', 'boolean', 'false', 'Whether the pill should be rendered as a suggestion.'],
      ['className', 'string', 'undefined', 'Additional classes applied to the button element of the pill as long as canClose is set to false.'],
      ['aria-label', 'string', 'undefined', 'Sets the aria-label for the button element of the pill'],
    ],
    events: [
        ['onClick', 'Action to be called when the pill is clicked.'],
        ['onClose', 'Action to be called when the close button is clicked.'],
    ],
  },
  Select: {
    required: [],
    props: [
      [
        'id',
        'string',
        '',
        `The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).`,
      ],
      [
        'name',
        'string',
        '',
        'The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).',
      ],
      [
        'defaultValue',
        'string & (string|number|readonly string[])',
        '',
        'The default value (uncontrolled).',
      ],
      ['value', 'string', '', 'The current value (controlled).'],
      ['label', 'ReactNode', '', 'The content to display as the label.'],
      ['optional', 'boolean', '', 'Whether to show optional text.'],
      ['hint', 'ReactNode', '', 'The content to display as the help text.'],
      ['always', 'boolean', '', 'Whether to always show hint.'],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `hint` to provide feedback about the error.',
      ],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        'readOnly',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
      [
        'required',
        'boolean',
        '',
        'Whether user input is required on the input before form submission.',
      ],
      [
        'children',
        'ReactNode',
        '',
        'The `option` elements to populate the select with.',
      ],
      ['className', 'string', '', 'Additional classes to include.'],
      [
        'style',
        'CSSProperties',
        '',
        'Additional CSS styles for the container.',
      ],
      [
        'autoFocus',
        'boolean',
        '',
        'Whether the element should receive focus on render.',
      ],
    ],
  },
  Slider: {
    required: [
      ['step', 'number', '', 'Specifies the value granularity'],
      ['value', 'number', '', `The current value`],
    ],
    props: [
      ['max', 'number', '100', 'The greatest value in the range of permitted values'],
      ['min', 'number', '', 'The lowest value in the range of permitted values'],
      ['disabled', 'boolean', '', 'Whether the slider is disabled'],
      ['aria-label', 'number', '', 'String value for aria-label'],
      ['aria-labelledby', 'string', '', 'Identifies the element that labels the slider'],
      ['aria-valuetext', 'string', '', 'Human readable text alternative for the value'],
    ],
    events: [
      [ 'onChange', '(value: number) => void', '', 'Handler that is called when the value of the slider changes'],
    ]
  },
  Step: {
    required: [
      ['children', 'Element | Element[]', '', 'Contents of Step component'],
    ],
    props: [
      ['active', 'boolean', 'false', 'Step is active'],
      ['completed', 'boolean', 'false', 'Step is completed'],
    ],
  },
  Steps: {
    required: [['children', 'Element[]', '', 'Two or more Step components']],
    props: [
      ['horizontal', 'boolean', 'false', 'Direction of steps'],
      ['right', 'boolean', 'false', 'Align steps to the right'],
      ['className', 'string', '', 'Additional CSS class for the container'],
    ],
  },
  Switch: {
    required: [
        ['value', 'boolean', '', 'The value of the switch.'],
    ],
    props: [
      ['id', 'string', 'false', 'The unique identifier.'],
      ['aria-label', 'string', 'false', 'Defines a string value that labels the current element. Must be set if aria-labelledby is not defined.'],
      ['aria-labelledby', 'string', '', 'Identifies the element (or elements) that labels the current element. Must be set if aria-label is not defined.'],
    ],
    events: [
      ['onClick', '() => void', '', 'Handler for when the Switch is clicked.'],
    ]
  },
  Tab: {
    required: [
      ['name', 'string', '', 'Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler'],
      ['label', 'any', '', 'The label of the tab item'],
    ],
    props: [
      ['over', 'boolean', 'false', 'Set the over prop to true if you need to move icons to above the tab label'],
      ['isActive', 'boolean', '', 'Additional CSS class for the container'],
      ['style', 'any', '', 'Additional CSS styles for the Tab'],
      ['isActive', 'boolean', '', 'Used to set which tab should be active on mount. Defaults to the first tab if not present'],
      ['className', 'string', '', 'Additional CSS class for the container'],
    ],
    events: [
      ['setActive', '(name: string)', 'false', ''],
      ['onChange', '(name: string) => void', '', 'Action to be called when the component is clicked'],
    ],
  },
  TabPanel: {
    required: [
      ['children', 'ReactNode', '', 'The content of the tab panel.'],
      ['name', 'string', '', 'Tab name identifier - This value should be the same as the `name` prop of the corresponding Tab component.'],
    ],
    props: [
      ['hidden', 'boolean', '', 'Show/hide panel manually (in server-side rendering).'],
    ],
  },
  Tabs: {
    required: [['children', 'Element[]', '', 'The Tabs within the container']],
    props: [
      ['active', 'string', '', 'Used to set the name of the Tab that should be active on mount. Defaults to the first tab if not present and isActive is not set on any Tab'],
      ['className', 'string', '', 'Additional CSS class for the container'],
      ['style', 'any', '', 'Additional CSS styles for the container'],
    ],
    events: [
      ['onChange', '(name: string) => void', '', 'Handler that is called when the tab changes'],
    ],
  },
  TextArea: {
    required: [],
    props: [
      [
        'autoFocus',
        'boolean',
        '',
        'Whether the element should receive focus on render.',
      ],
      ['className', 'string', '', 'Additional classes to include.'],
      [
        'style',
        'CSSProperties',
        '',
        'Additional CSS styles for the container.',
      ],
      [
        'defaultValue',
        'string & (string|number|readonly string[])',
        '',
        'The default value (uncontrolled).',
      ],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        '~~error~~',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error. @deprecated use `invalid` instead.',
      ],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.',
      ],
      ['helpText', 'ReactNode', '', 'The content to display as the help text.'],
      [
        'id',
        'string',
        '',
        `The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).`,
      ],
      ['label', 'ReactNode', '', 'The content to display as the label.'],
      [
        'max',
        'string|number',
        '',
        'Standard `input` max attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).',
      ],
      [
        'min',
        'string|number',
        '',
        'Standard `input` min attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).',
      ],
      [
        'maxLength',
        'number',
        '',
        'The maximum number of characters supported by the input. See MDN.',
      ],
      [
        'minLength',
        'number',
        '',
        'The minimum number of characters supported by the input. See MDN.',
      ],
      [
        'name',
        'string',
        '',
        'The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).',
      ],
      [
        'pattern',
        'string',
        '',
        'Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).',
      ],
      [
        'placeholder',
        'string',
        '',
        'Text hint that occupies the text input when it is empty.',
      ],
      [
        'readOnly',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
      [
        'required',
        'boolean',
        '',
        'Whether user input is required on the input before form submission.',
      ],
      ['children', 'ReactNode', '', 'For affix use.'],
      ['value', 'string', '', 'The current value (controlled).'],
      ['optional', 'boolean', '', 'The current value (controlled).'],
    ],
  },
  TextField: {
    required: [],
    props: [
      [
        'type',
        '"number"<br />|"text"<br />|"search"<br />|"email"<br />|"password"<br />|"url"<br />|"tel"',
        '',
        'The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).',
      ],
      [
        'autoFocus',
        'boolean',
        '',
        'Whether the element should receive focus on render.',
      ],
      ['className', 'string', '', 'Additional classes to include.'],
      [
        'style',
        'CSSProperties',
        '',
        'Additional CSS styles for the container.',
      ],
      [
        'defaultValue',
        'string & (string|number|readonly string[])',
        '',
        'The default value (uncontrolled).',
      ],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        '~~error~~',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error. @deprecated use `invalid` instead.',
      ],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.',
      ],
      ['helpText', 'ReactNode', '', 'The content to display as the help text.'],
      [
        'id',
        'string',
        '',
        `The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).`,
      ],
      ['label', 'ReactNode', '', 'The content to display as the label.'],
      [
        'max',
        'string|number',
        '',
        'Standard `input` max attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).',
      ],
      [
        'min',
        'string|number',
        '',
        'Standard `input` min attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).',
      ],
      [
        'maxLength',
        'number',
        '',
        'The maximum number of characters supported by the input. See MDN.',
      ],
      [
        'minLength',
        'number',
        '',
        'The minimum number of characters supported by the input. See MDN.',
      ],
      [
        'name',
        'string',
        '',
        'The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).',
      ],
      [
        'pattern',
        'string',
        '',
        'Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).',
      ],
      [
        'placeholder',
        'string',
        '',
        'Text hint that occupies the text input when it is empty.',
      ],
      [
        'readOnly',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
      [
        'required',
        'boolean',
        '',
        'Whether user input is required on the input before form submission.',
      ],
      ['children', 'ReactNode', '', 'For affix use.'],
      ['value', 'string', '', 'The current value (controlled).'],
      ['optional', 'boolean', '', 'The current value (controlled).'],
    ],
  },
  Toggle: {
    required: [],
    props: [
      [
        'type',
        '"radio"<br />|"checkbox"<br />|"radio-button"',
        '',
        'The type of Toggle',
      ],
      [
        'title',
        'string',
        '',
        'The option(s) title',
      ],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.',
      ],
      ['helpText', 'string', '', 'Help text beneath options'],
      ['options', 'ToggleEntry[]', '', 'An array of options to render'],
      ['selected', 'ToggleEntry[]', '', 'An array of options to be selected / checked (controlled)'],
      ['defaultSelected', 'ToggleEntry[]', '', 'An array of options to be selected / checked on mount (uncontrolled)'],
      ['label', 'string', '', 'If you only need to render a single option, use this prop instead'],
      ['noVisibleLabel', 'boolean', '', 'Whether label should be invisible'],
      ['checked', 'boolean', '', 'Whether the single option should be checked (controlled)'],
      ['defaultChecked', 'boolean', '', 'Whether the single option should be checked on mount (uncontrolled)'],
      ['small', 'boolean', '', 'Whether the elements should be small'],
      ['optional', 'boolean', '', 'Whether the toggle is optional Appends (valgfritt) to the end of the title for indication'],
      ['equalWidth', 'boolean', '', 'Will make each radio-button equal width'],
      ['indeterminate', 'boolean', '', 'Whether a single option is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.'],
      ['className', 'string', '', 'Custom classes applied to the wrapping container'],
    ],
  },
};

export const vue = {
  Alert: {
    required: [],
    props: [
      ['v-model', 'boolean', 'undefined', 'Controls when the alert shows'],
      ['title', 'string', 'undefined', 'The title for the alert'],
      ['role', 'string', 'alert', 'The aria role for the alert'],
      ['negative', 'boolean', 'undefined', 'Creates a negative alert'],
      ['positive', 'boolean', 'undefined', 'Creates a positive alert'],
      ['warning', 'boolean', 'undefined', 'Creates a warning alert'],
      ['info', 'boolean', 'undefined', 'Creates an info alert'],
    ],
  },
  Attention: {
    required: [
      ['target-el', 'string', '', 'Selector of element that the Attention component is rendered relatively to'],
    ],
    props: [
      ['bottom', 'boolean', 'undefined', 'Placement according to the target element. Arrow would be on the opposite side of this position'],
      ['top', 'boolean', 'undefined', 'Placement according to the target element. Arrow would be on the opposite side of this position'],
      ['left', 'boolean', 'undefined', 'Placement according to the target element. Arrow would be on the opposite side of this position'],
      ['right', 'boolean', 'undefined', 'Placement according to the target element. Arrow would be on the opposite side of this position'],
      ['tooltip', 'boolean', 'undefined', 'Render tooltip'],
      ['callout', 'boolean', 'undefined', 'Whether Attention component is rendered as an inline callout'],
      ['popover', 'boolean', 'undefined', 'Whether Attention component is rendered as a popover'],
      ['highlight', 'boolean', 'undefined', 'Whether Attention component is rendered as a highlight'],
      ['v-model', 'boolean', '', 'Whether Attention component should be visible'],
      ['role', 'string', '', 'Allows the user to override the default ARIA role attribute for the Attention component'],
      ['ariaLabel', 'string', '', 'Allows the user to override the default aria-label attribute for the Attention component'],
      ['canClose', 'boolean', 'undefined', 'Whether a close button is shown'],
    ],
    events: [
      ['@dismiss', '', '', 'Triggered when user clicks the close button or presses Escape when the button is in focus.'],
    ],
  },
  Badge: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'notification', 'price'",
        "'neutral'",
        'Variant of the badge',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        "undefined",
        'Used for absolute positioning of the badge within a container',
      ],
    ],
  },
  Box: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['bleed', 'boolean', 'false', 'Will make a box full-width on sm-size'],
      ['bordered', 'boolean', 'false', 'Adds a lovely border'],
      [
        'info',
        'boolean',
        'false',
        'Will style the box with colors for indicating that it has informative content',
      ],
      [
        'neutral',
        'boolean',
        'false',
        'Will style the box in a neutral fashion',
      ],
      [
        '~~clickable~~',
        'boolean',
        'false',
        'Applies styling to indicate click-ability, does NOT add click-ability to the box itself (see `wClickable` for that). @deprecated For rendering a clickable box, use `Card` component.',
      ],
    ],
  },
  Breadcrumbs: {
    required: [],
    props: [
      [
        'aria-label',
        'string',
        'Her er du',
        'Defines a string value that labels the current element.',
      ],
    ],
  },
  Card: {
    required: [],
    props: [
      ['selected', 'boolean', '', 'If the card is selected'],
      ['flat', 'boolean', '', 'Removes box shadow around card'],
      ['as', 'string', 'div', 'The DOM element to emit'],
    ]
  },
  Button: {
    required: [],
    props: [
      [
        'label',
        'string',
        '',
        'Interchangeable with the default slot for labelling',
      ],
      [
        'href',
        'string',
        '',
        'When set, an anchor tag will be used instead of a button',
      ],
      [
        'type',
        'string',
        'button',
        "Controls the button's type, unused when `href` is present",
      ],
      [
        'fullWidth',
        'boolean',
        '',
        "Sets the button's width to its parent's width. Useful especially on mobile when button should take full width.",
      ],
    ],
    variants: [
      ['primary', 'quiet, small, loading'],
      ['secondary', 'quiet, small, loading'],
      ['negative', 'quiet, small, loading'],
      ['link', 'small'],
      ['utility', 'small, loading'],
      ['pill', ''],
    ],
  },
  ButtonGroup: {
    required: [],
    props: [
      ['outlined', 'boolean', '', 'Outlines the button-group'],
      ['raised', 'boolean', '', 'Adds shadow to the button-group'],
      ['vertical', 'boolean', '', 'Changes the orientation to vertical'],
    ],
    slots: [['default', 'where all the buttons go']],
  },
  ButtonGroupItem: {
    required: [],
    props: [
      [
        'selected',
        'boolean',
        '',
        'Used to give the item a selected appearance - e.g. when used with toggles',
      ],
    ],
    slots: [['default', 'button content']],
  },
  Clickable: {
    required: [],
    props: [
      [
        'href',
        'string',
        '',
        'When set, an anchor tag will be used instead of a button',
      ],
      [
        'label',
        'boolean',
        '',
        'Will add label-styling to the clickable – for label content, see slots',
      ],
      [
        'radio',
        'boolean',
        '',
        'Will create a radio toggle with label and input elements',
      ],
      [
        'checkbox',
        'boolean',
        '',
        'Will create a checkbox toggle with label and input elements',
      ],
    ],
  },
  Expandable: {
    props: [
      [
        'v-model',
        'boolean',
        'false',
        "If not provided, the component will use an internal value that starts the expandable 'closed'",
      ],
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['box', 'boolean', '', 'Will make the expandable a Box'],
      [
        'bleed',
        'boolean',
        '',
        'Will make the expandable full-width on sm-size',
      ],
      ['info', 'boolean', 'false', 'Styles the box with a color'],
      [
        'buttonClass',
        'string',
        '',
        'Additional CSS classes to include on the button part of the component',
      ],
      [
        'contentClass',
        'string',
        '',
        'Additional CSS classes to include on the content part of the component',
      ],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
    ],
    slots: [
      ['title', 'string', '', 'The title for the expandable'],
      [
        'default',
        'string',
        '',
        'Content that should be displayed when expanded',
      ],
    ],
    events: [
      [
        'expand',
        'boolean',
        '',
        'Content inside the expandable has been mounted and can be targeted - will fire after any opening animations are complete',
      ],
      [
        'collapse',
        'boolean',
        '',
        'Content inside the expandable has been fully torn down or hidden',
      ],
    ],
  },
  Field: {
    required: [],
    props: [
      ['label', 'string', '', ''],
      ['hint', 'string', '', 'The string can contain HTML.'],
      ['invalid', 'boolean', '', ''],
      [
        'label-level',
        'number',
        '',
        'Usable on toggles, will make the emitted legend element into a heading for accessibility.',
      ],
    ],
  },
  InputAttributes: {
    titles: ['attribute', 'type', 'notes'],
    rows: [
      [
        'valid',
        'boolean',
        '',
        'Whether or not to treat the form element as valid',
      ],
      ['hint', 'string', '', 'The hint to show when this result is triggered'],
      [
        'always',
        'boolean',
        '',
        `If true, will show the status/hint even if the form element hasn't been touched yet - normally validation is only shown after blur`,
      ],
    ],
  },
  InputValidation: {
    titles: ['prop', 'type', 'default', 'notes'],
    rows: [
      ['v-model', 'boolean', '', 'True when all descendants are valid'],
      [
        'v-model:completed',
        'boolean',
        '',
        'True when all descendants are completed - passing their required rule',
      ],
      [
        'should-validate',
        'boolean',
        '',
        'Can be used to instruct all descendants to immediately validate. Note that this will not update if the should-validate logic is updated elsewhere.',
      ],
      ['as', 'string', 'form', 'The DOM element to emit for the wrapper'],
    ],
  },
  Modal: {
    required: [],
    props: [
      ['v-model', 'boolean', '', 'Whether or not to show the modal'],
      ['left', 'boolean<br />|object', '', 'When truthy, will show the left button of the header. Object properties will be used as attributes on the button.'],
      ['right', 'boolean<br />|object', '', 'When truthy, will show the right button of the header. Object properties will be used as attributes on the button.'],
      ['title', 'string', '', ''],
      ['titleAttrs', 'object', '', 'Properties will be set as attributes of the title in the header.'],
      ['headerClasses', 'string<br />|object', '', 'Classes here will be set on the wrapper for the header.'],
      ['contentClasses', 'string<br />|object', '', 'Classes here will be set on the wrapper for the content.'],
      ['contentId', 'string', '', 'This id is useful if you need to programmatically scroll content in the modal.'],
    ],
    events: [
      [ 'dismiss', '', '', 'A user presses ESC or clicks outside the dialog'],
      [ 'left', '', '', 'The left title-button has been clicked'],
      [ 'right', '', '', 'The right title-button has been clicked'],
      [ 'shown', '', '', 'Modal entrance transitions are complete and content has been mounted'],
      [ 'hidden', '', '', 'Modal exit transitions are complete and content has been torn down or hidden'],
    ]
  },
  ModalSlots: {
    required: [],
    slots: [
      ['default', 'Content for the modal'],
      ['footer', 'Footer (button drawer) for the modal - the footer is sticky'],
      ['left', 'Overrides the default icon (a back arrow)'],
      ['right', 'Overrides the default icon (an X symbol)'],
    ],
  },
  ModalCustomProperties: {
    titles: ['name', 'notes'],
    rows: [
      ['--w-modal-max-height', 'The max-height of the modal dialog'],
      ['--w-modal-height', 'The height of the modal dialog'],
      ['--w-modal-width', 'The max-width of the modal dialog'],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['label', 'string', 'undefined', 'The text content of the pill.'],
      ['canClose', 'boolean', 'false', 'Whether the pill should be removable via a close button.'],
      ['suggestion', 'boolean', 'false', 'Whether the pill should be rendered as a suggestion.'],
    ],
    events: [['close', 'the close button is pressed']],
  },
  Slider: {
    required: [],
    props: [
      ['max', 'number', '100', 'The greatest value in the range of permitted values'],
      ['min', 'number', '0', 'The lowest value in the range of permitted values'],
      ['step', 'number', '', 'Specifies the value granularity'],
      ['label', 'string', '', 'String value for aria-label'],
      ['labelled-by', 'string', '', 'Identifies the element that labels the slider'],
    ],
  },
  Step: {
    required: [],
    props: [
      ['active', 'boolean', 'false', 'Step is active'],
      ['completed', 'boolean', 'false', 'Step is completed'],
    ],
  },
  Steps: {
    required: [],
    props: [
      ['horizontal', 'boolean', 'false', 'Direction of steps'],
      ['right', 'boolean', 'false', 'Align steps to the right'],
    ],
  },
  Switch: {
    required: [
      [
        'v-model',
        'boolean',
        'false',
        "The value of the switch.",
      ],
    ],
    props: [
      ['id', 'string', 'false', 'The unique identifier.'],
      ['disabled', 'boolean', 'false', 'Whether the switch is disabled.'],
    ],
  },
  Tab: {
    required: [
      ['name', 'string', '', 'Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler'],
      ['label', 'any', '', 'The label of the tab item'],
    ],
  },
  TabPanel: {
    required: [
      ['name', 'string', '', 'Tab name identifier - This value should be the same as the `name` prop of the corresponding Tab component.'],
    ],
  },
  Tabs: {
    required: [['children', 'Element[]', '', 'The tabs within the container']],
    events: [['v-model', 'string', '', 'Name of the active element']],
  },
  TextField: {
    required: [],
    props: [
      ['type', 'string', 'text', 'Allowed types are: `text` | `search` | `email` | `password` | `url` | `tel` | `number`'],
      ['autocomplete', 'string', 'off', ''],
      [
        'mask',
        'object',
        '',
        'See the Masking section below for more information',
      ],
    ],
  },
  Toggle: {
    required: [],
    props: [
      [
        'radio',
        'boolean',
        '',
        '',
      ],
      [
        'checkbox',
        'boolean',
        '',
        '',
      ],
      [
        'radio-button',
        'boolean',
        '',
        '',
      ],
      ['equal-width', 'boolean', '', 'Will make each radio-button equal width'],
      ['small', 'boolean', '', 'Will make radio-buttons small size'],
      ['toggles', 'array', '', 'An array of objects. Each object must at least have a value and label attribute. Any other attributes will be transferred directly to the individual toggle'],
    ],
  },
};

export const elements = {
  Affix: {
    title: 'Affix props',
    props: [
      ['aria-label', 'string', '', 'Defines a string value that labels the affix element'],
      ['clear', 'boolean', '', 'Displays a clear icon'],
      ['search', 'boolean', '', 'Displays a search icon'],
      ['label', 'string', '', 'Displays a string'],
    ],
  },
  Alert: {
    required: [
      [
        'variant',
        "'negative' | 'positive' | 'warning' | 'info'",
        'undefined',
        'Variant of the alert',
      ],
    ],
    props: [
      ['show', 'boolean', 'false', 'Controls when the alert shows'],
      ['role', 'string', 'alert', 'ARIA live region "role" attribute value'],
    ],
  },
  Attention: {
    required: [
      ['placement', "'top' | 'right' | 'bottom' | 'left'", '', 'Placement according to the target element. Arrow would be on the opposite side of this position'],
      ['target-selector', 'string', '', 'Selector of element that the Attention component is rendered relatively to'],
    ],
    props: [
      ['no-arrow', 'boolean', 'false', 'Render Attention element without an arrow'],
      ['can-close', 'boolean', 'false', 'Render Attention element with a close button'],
      ['tooltip', 'boolean', 'false', 'Render tooltip'],
      ['callout', 'boolean', 'false', 'Whether Attention element is rendered as an inline callout'],
      ['popover', 'boolean', 'false', 'Whether Attention element is rendered as a popover'],
      ['highlight', 'boolean', 'false', 'Whether Attention element is rendered as a highlight'],
      ['show', 'boolean', 'false', 'Whether Attention element should be visible'],
    ],
    events: [
      ['@close', '', '', 'Triggered when user clicks the close button or presses Escape when the button is in focus.']
    ],
  },
  Badge: {
    required: [],
    props: [
      [
        'variant',
        "'neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'notification', 'price'",
        "'neutral'",
        'Variant of the badge',
      ],
      [
        'position',
        "'top-left', 'top-right', 'bottom-right', 'bottom-left'",
        "undefined",
        'Used for absolute positioning of the badge within a container',
      ],
    ],
  },
  Box: {
    required: [],
    props: [
      ['bleed', 'boolean', 'false', 'Will make a box full-width on sm-size'],
      ['bordered', 'boolean', 'false', 'Adds a lovely border'],
      [
        'info',
        'boolean',
        'false',
        'Will style the box with colors for indicating that it has informative content',
      ],
      [
        'neutral',
        'boolean',
        'false',
        'Will style the box in a neutral fashion',
      ],
    ],
  },
  Breadcrumbs: {
    required: [],
    props: [
      [
        'aria-label',
        'string',
        'Her er du',
        'Defines a string value that labels the current element.',
      ],
    ],
  },
  Broadcast: {
    required: [[ 'api', 'string', '', 'API endpoint to fetch broadcasts from']],
    props: [
      [ 'interval', 'number', '300 000', 'Refetch interval. Default is set to 5 minutes'],
      [ 'url', 'string', 'window.location.href', 'Page (identified by its url) to check for registered broadcasts against'],
    ],
  },
  Button: {
    required: [],
    props: [
      [
        'type',
        '"button"|"submit"|"reset"',
        'button',
        'Button type, only applied when href is not set.',
      ],
      [
        'variant',
        '"primary" | "secondary" | "negative" | "utility" | "link" | "pill"',
        'secondary',
        '',
      ],
      ['quiet', 'boolean', 'false', ''],
      ['small', 'boolean', 'false', ''],
      ['loading', 'boolean', 'false', ''],
      [
        'href',
        'string',
        '',
        'Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation.',
      ],
      [
        'target',
        'string',
        '',
        'Anchor target, see `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a`.',
      ],
      ['rel', 'string', '', 'The relationship of the linked URL.'],
      [
        'fullWidth',
        'boolean',
        '',
        "Sets the button's width to its parent's width. Useful especially on mobile when button should take full width.",
      ],
    ],
  },
  Card: {
    required: [],
    props: [
      ['selected', 'boolean', '', 'If the card is selected'],
      ['clickable', 'boolean', '', 'Applies styling to indicate click-ability'],
      ['flat', 'boolean', '', 'Removes box shadow around card'],
    ]
  },
  Expandable: {
    required: [],
    props: [
      ['expanded', 'boolean', 'false', "Controls component's expanded state"],
      [
        'bleed',
        'boolean',
        '',
        'Will make the expandable full-width on sm-size',
      ],
      ['info', 'boolean', 'false', 'TStyles the box with a color'],
      ['box', 'boolean', 'false', 'Will make the expandable a Box'],
      ['animated', 'boolean', 'false', 'Will animate the expansion/collapse'],
      [
        'no-chevron',
        'boolean',
        'false',
        'Whether to hide the chevron on the button part of the component',
      ],
      [
        'title',
        'string',
        '',
        'Component title. Used to display the title value which is always present regardless of whether the component is open or closed.',
      ],
      [
        'heading-level',
        'number',
        '',
        'Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element',
      ],
      [
        'button-class',
        'string',
        '',
        'Additional CSS classes to include on the button part of the component',
      ],
      [
        'content-class',
        'string',
        '',
        'Additional CSS classes to include on the content part of the component',
      ],
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['v-model', 'boolean', '', 'Controls the expansion/collapse'],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
    ],
  },
  TextField: {
    required: [],
    props: [
      [
        'type',
        '"number"<br />|"text"<br />|"search"<br />|"email"<br />|"password"<br />|"url"<br />|"tel"',
        '',
        'The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).',
      ],
      ['disabled', 'boolean', '', 'Whether the input is disabled.'],
      [
        'invalid',
        'boolean',
        '',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.',
      ],
      ['help-text', 'string', '', 'The content to display as the help text.'],
      ['label', 'string', '', 'The content to display as the label.'],
      [
        'max',
        'number',
        '',
        'Standard `input` max attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).',
      ],
      [
        'min',
        'number',
        '',
        'Standard `input` min attribute, to be used with `type="number"`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).',
      ],
      [
        'max-Length',
        'number',
        '',
        'The maximum number of characters supported by the input. See MDN.',
      ],
      [
        'min-Length',
        'number',
        '',
        'The minimum number of characters supported by the input. See MDN.',
      ],
      [
        'name',
        'string',
        '',
        'The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).',
      ],
      [
        'pattern',
        'string',
        '',
        'Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).',
      ],
      [
        'placeholder',
        'string',
        '',
        'Text hint that occupies the text input when it is empty.',
      ],
      [
        'readOnly',
        'boolean',
        '',
        'Whether the input can be selected but not changed by the user.',
      ],
      [
        'required',
        'boolean',
        '',
        'Whether user input is required on the input before form submission.',
      ],
      ['value', 'string', '', 'The current value (controlled).'],
    ],
  },
  Toast: {
    required: [],
    props: [
      ['type', "'success' | 'warning' | 'error'", "'success'", 'Type of toast'],
      ['text', 'string', 'undefined', 'Applies styling to indicate click-ability'],
      ['duration', 'number', '5000', 'Auto removal of toast'],
      ['canclose', 'boolean', 'false', 'Adds close button. WARNING! For accessibility reasons, toasts should not be interactive and canclose should always be false. If the toast absolutely must be dismissible, set this to true.'],
    ]
  },
};

export const android = {
  Button: {
    required: [
      [
        'text', 
        'String', 
        '', 
        'The text to be displayed on the button'
      ],
      [
        'onClick',
        '() -> Unit',
        '',
        'Lambda to be invoked when clicked',
      ],
      [
        'buttonStyle',
        'WarpButtonStyle.Primary <br />WarpButtonStyle.Secondary <br />WarpButtonStyle.Tertiary <br />WarpButtonStyle.Quiet <br />WarpButtonStyle.Critical <br />WarpButtonStyle.CriticalQuiet <br />WarpButtonStyle.Utility <br />WarpButtonStyle.UtilityQuiet <br />WarpButtonStyle.UtilityOverlay',
        'WarpButtonStyle.Primary',
        'Controls the appearance of the button',
      ]
    ],
    props: [
      [
        'enabled',
        'Boolean',
        'true',
        'Sets the button in disabled mode',
      ],
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the button',
      ],
      [
        'maxLines',
        'Integer',
        '1',
        'Limits the lines of the text on the button',
      ],
      [
        'loading',
        'Boolean',
        'false',
        'Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type',
      ],
    ],
  },

  TextField: {
    required: [
      [
        'value',
        'String',
        '',
        'The text displayed currently in the textfield',
      ],
      [
        'onValueChange',
        '(String) -> Unit',
        '',
        'Lambda to be invoked when input value changes',
      ],
      [
        'label', 
        'String', 
        '', 
        'The content to display as the label above the textfield'
      ],

    ],
    props: [
      [
        'modifier',
        'Modifier',
        'Modifier',
        'Sets the modifier for the textfield',
      ],
      [
        'enabled',
        'Boolean',
        'true',
        'Sets the textfield in disabled mode',
      ],
      [
        'readOnly',
        'Boolean',
        'false',
        'Sets the textfield in read-only mode',
      ],
      [
        'optionalLabel', 
        'String', 
        '', 
        'The optional content to display next to the label above the textfield'
      ],
      [
        'placeholderText',
        'String',
        '',
        'Text hint that occupies the textfield when it is empty',
      ],
      [
        'helpText', 
        'String', 
        '', 
        'The content to display as the help text below the textfield'
      ],
      [
        'leadingIcon',
        '@Composable () -> Unit?',
        'null',
        'Sets the composable in front of the input value',
      ],
      [
        'trailingIcon',
        '@Composable () -> Unit?',
        'null',
        'Sets the composable behind the input value',
      ],
      [
        'isError',
        'Boolean',
        'false',
        'Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error',
      ],
      [
        'visualTransformation', 
        'VisualTransformation', 
        'VisualTransformation.None', 
        'Interface used for changing visual output of the input field '
      ],
      [
        'keyboardOptions', 
        'KeyboardOptions', 
        'KeyboardOptions.Default', 
        'The keyboard configuration options '
      ],
      [
        'keyboardActions', 
        'KeyboardActions', 
        'KeyboardActions.Default', 
        'The KeyboardActions that specify actions that will be triggered in response to triggering IME action on the software keyboard'
      ],
      [
        'singleLine', 
        'Boolean', 
        'true', 
        'Sets the textfield to a single line'
      ],
      [
        'maxLines', 
        'Int', 
        'Int.MAX_VALUE', 
        'Sets the maximum amount of lines allowed'
      ],
      [
        'interactionSourceing', 
        'MutableInteractionSource', 
        'MutableInteractionSource', 
        'MutableInteractionSource represents a stream of Interactions corresponding to events emitted by a component'
      ],
    ],
  }
};
