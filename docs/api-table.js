export const react = {
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
        'true',
        'Set the button to be a secondary, flat style button. Can be combined with `quiet` and `small`.',
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
  Input: {
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
      //
      [
        'aria-label',
        'string',
        '',
        'Defines a string value that labels the affix element.',
      ],
      ['clear', 'boolean', '', 'Displays a clear icon.'],
      ['search', 'boolean', '', 'Displays a search icon.'],
      ['label', 'string', '', 'Displays a string.'],
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
      ['style', 'CSSProperties', '', 'Additional styles to the contianer. [More info aboout CSSProperties](https://legacy.reactjs.org/docs/dom-elements.html#style)'],
      ['aria-label', 'number', '', 'Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,'],
      ['aria-labelledby', 'string', '', 'Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.'],
      ['initialFocusRef', 'RefObject<any>	', '', `A reference to the element that should be focused. By default it'll be the first interactive element. [More info](https://legacy.reactjs.org/docs/refs-and-the-dom.html)`],
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
      ['openSRLabel', 'boolean', 'false', 'Label read by screen readers when targeting the pill.'],
      ['closeSRLabel', 'boolean', 'false', 'Label read by screen readers when targeting the close button.'],
      ['suggestion', 'boolean', 'false', 'Whether the pill should be rendered as a suggestion.'],
      ['className', 'string', 'undefined', 'Additional classes applied to the button element of the pill as long as canClose is set to false.'],
    ],
    events: [
        ['onClick', 'Action to be called when the pill is clicked.'],
        ['onClose', 'Action to be called when the close button is clicked.'],
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
    ],
    variants: [
      ['primary', 'negative, quiet, small, loading'],
      ['secondary', 'quiet, small, loading'],
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
        'Useable on toggles, will make the emitted legend element into a heading for accessibility.',
      ],
    ],
  },
  Input: {
    required: [],
    props: [
      ['type', 'string', 'text', ''],
      ['autocomplete', 'string', 'off', ''],
      [
        'mask',
        'object',
        '',
        'See the Masking section below for more information',
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
      ['contentId', 'string', '', 'This id is useful if you need to programatically scroll content in the modal.'],
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
      [
        'aria-label',
        'string',
        '',
        'Defines a string value that labels the affix element.',
      ],
      ['clear', 'boolean', '', 'Displays a clear icon.'],
      ['search', 'boolean', '', 'Displays a search icon.'],
      ['label', 'string', '', 'Displays a string.'],
    ],
  },
};
