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
      [
        'show',
        'boolean',
        'undefined',
        `Controls when the alert shows`,
      ],
      [
        'role',
        'string',
        'alert',
        `ARIA live region "role" attribute value`,
      ],
      [
        'className',
        'string',
        'undefined',
        `Additional classes to include`,
      ],
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
      [
        'bleed',
        'boolean',
        'false',
        'Will make a box full-width on sm-size',
      ],
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
      [
        'style',
        'CSSProperties',
        '',
        'CSS styles to inline on the component',
      ],
    ],
  },
  Button: {
    required: [],
    props: [
      ['className', 'string', '', 'Additional classes to include'],
      [
        'style',
        'CSSProperties',
        '',
        'CSS styles to inline on the component',
      ],
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
      [
        'helpText',
        'ReactNode',
        '',
        'The content to display as the help text.',
      ],
      [
        'id',
        'string',
        '',
        `The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).`,
      ],
      [
        'label',
        'ReactNode',
        '',
        'The content to display as the label.',
      ],
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
      [
        'helpText',
        'ReactNode',
        '',
        'The content to display as the help text.',
      ],
      [
        'id',
        'string',
        '',
        `The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).`,
      ],
      [
        'label',
        'ReactNode',
        '',
        'The content to display as the label.',
      ],
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
      [
        'label',
        'ReactNode',
        '',
        'The content to display as the label.',
      ],
      ['optional', 'boolean', '', 'Whether to show optional text.'],
      [
        'hint',
        'ReactNode',
        '',
        'The content to display as the help text.',
      ],
      [
        'always',
        'boolean',
        '',
        'Whether to always show hint.',
      ],
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
      ['children', 'ReactNode', '', 'The `option` elements to populate the select with.'],
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
};

export const vue = {
  Alert: {
    required: [],
    props: [
      [
        'v-model',
        'boolean',
        'undefined',
        `Controls when the alert shows`,
      ],
      ['title', 'string', 'undefined', `The title for the alert`],
      ['role', 'string', 'alert', `The aria role for the alert`],
      [
        'negative',
        'boolean',
        'undefined',
        `Creates a negative alert`,
      ],
      [
        'positive',
        'boolean',
        'undefined',
        `Creates a positive alert`,
      ],
      ['warning', 'boolean', 'undefined', `Creates a warning alert`],
      ['info', 'boolean', 'undefined', `Creates an info alert`],
    ],
  },
  Box: {
    required: [],
    props: [
      ['as', 'string', 'div', 'The DOM element to emit'],
      [
        'bleed',
        'boolean',
        'false',
        'Will make a box full-width on sm-size',
      ],
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
      ['aria-label', 'string', 'Her er du', 'Defines a string value that labels the current element.'],
    ],
  },
  Pill: {
    required: [],
    props: [
      ['label', 'string', 'undefined', `The pill's label`],
      [
        'canClose',
        'boolean',
        'false',
        'If the pill should be removeable',
      ],
      [
        'suggestion',
        'boolean',
        'false',
        `If the pill should have suggestion-styling`,
      ],
    ],
    events: [['close', 'the close button is pressed']],
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
      [
        'vertical',
        'boolean',
        '',
        'Changes the orientation to vertical',
      ],
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
      ['as', 'string', 'div', 'The DOM element to emit'],
      ['title', 'string', '', 'The title for the expandable'],
      [
        'bleed',
        'boolean',
        '',
        'Will make the expandable full-width on sm-size',
      ],
      ['box', 'boolean', '', 'Will make the expandable a Box'],
      [
        'animated',
        'boolean',
        '',
        'Will animate the expansion/collapse',
      ][
        ('v-model', 'boolean', '', 'Controls the expansion/collapse')
      ],
      ['chevron', 'boolean', 'true', 'Controls chevron visibility'],
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
      [
        'hint',
        'string',
        '',
        'The hint to show when this result is triggered',
      ],
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
      [
        'v-model',
        'boolean',
        '',
        'True when all descendants are valid',
      ],
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
      [
        'as',
        'string',
        'form',
        'The DOM element to emit for the wrapper',
      ],
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
        `Variant of the alert`,
      ],
    ],
    props: [
      ['show', 'boolean', 'false', `Controls when the alert shows`],
      [
        'role',
        'string',
        'alert',
        `ARIA live region "role" attribute value`,
      ],
    ],
  },
  Box: {
    required: [],
    props: [
      [
        'bleed',
        'boolean',
        'false',
        'Will make a box full-width on sm-size',
      ],
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
      ['aria-label', 'string', 'Her er du', 'Defines a string value that labels the current element.'],
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
      [
        'help-text',
        'string',
        '',
        'The content to display as the help text.',
      ],
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
