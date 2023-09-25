<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Elements from './elements.md';
</script>

# Text Field

A single-line text input component.

<components-status react='released' vue='released' elements='released' />

## Example

<theme-switcher />

<textfield-example />

## Usage

<component-design-guidelines name="Warp - Components / Text Area" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23909&mode=design" />

### Accessibility

If a visible label isn't specified, an `aria-label` must be provided to the Text Field for accessibility.
If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
   <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #elements>
    <elements />
  </template>
</tabs-content>