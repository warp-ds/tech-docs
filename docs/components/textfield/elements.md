## Textfield Attributes
<api-table type=elements component="TextField" />

## Validation
Text fields can communicate to the user whether the current value is invalid. Implement your
own validation logic in your app and set the error prop to display it as invalid. <i>error</i> is
often paired with <i>help-text</i> to provide feedback to the user about the error.

```html
<w-textfield label="Email" invalid help-text="Ugyldig e-post"></w-textfield>
```

## Visual Options

### Placeholder
Placeholder text can be used to describe the expected value or formatting for the w-textfield.
Placeholder text will only appear when the w-textfield is empty, and should not be used as a
substitute for labeling the element with a visible label.
```html
<w-textfield label="E-post" placeholder="puse@finn.no"></w-textfield>
```

### Disabled
Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS
be users who don't understand why an element is disabled, or users who can't even see that
it is disabled because of poor lighting conditions or other reasons. Please consider more
informative alternatives before choosing to use disabled on an element.

```html
<div class="flex flex-col space-y-32">
  <w-textfield label="E-post" disabled value="puse@finn.no"></w-textfield>
  <w-textfield label="E-post" disabled></w-textfield>
</div>
```

### Affix
If you wish to use an affix you must first use the w-affix element in conjunction with
w-textfield. Include the affix as a child of w-textfield and set the appropiate attributes.
You must specify which slot to set the affix into (either prefix or suffix).

> Suffix

```html
<w-textfield label="Price" placeholder="1 000 000">
  <w-affix slot="suffix" label="kr"></w-affix>
</w-textfield>
```

> Prefix

```html
<w-textfield label="Price" placeholder="1 000 000">
  <w-affix slot="prefix" label="kr"></w-affix>
</w-textfield>
```

> You can also use both a prefix and suffix

```html
<w-textfield label="Price" placeholder="1 000 000">
  <w-affix slot="prefix" label="kr"></w-affix>
  <w-affix slot="suffix" search></w-affix>
</w-textfield>
```
<api-table type=elements component="Affix" />

### Read only
The read-only boolean attribute makes the w-textfield's text content immutable. Unlike
disabled the w-textfield remains focusable and the contents can still be copied. See the MDN
docs for more information.

```html
<div class="flex flex-col space-y-32">
  <w-textfield label="E-post" read-only value="puse@finn.no"></w-textfield>
  <w-textfield label="E-post" read-only></w-textfield>
</div>
```