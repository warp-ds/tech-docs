<script setup>
  import React from './react.md';
  import Vue from './vue.md';
</script>

# Slider

A slider is an input where the user selects a value from within a given range. The precise value, however, is not necessarily considered important.

<components-status react='released' vue='released' />

## Examples

<theme-switcher />

<slider-example />

## Usage

<component-design-guidelines name="Warp - Components / Slider" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23902&mode=design" />

### Accessibility

To be accessible, an `aria-label` prop should be provided to the slider. If the slider is labeled by a separate element, use the `labelledby` prop with the id of the labeling element instead.

### Events

The slider accepts an `onChange` prop which is triggered whenever the value is changed by the user. Note that this value updates as the user is dragging.

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
   <react />
  </template>
  <template #vue>
    <vue />
  </template>
</tabs-content>
