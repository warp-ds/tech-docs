<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Elements from './elements.md';
  import Android from './android.md';
  import iOS from './ios.md';
</script>

# TextField

A single-line text input component.

<components-status react='released' vue='released' elements='released' android='released' ios='developing' />

## Example

<theme-switcher />

<textfield-example />

## Usage

### Accessibility

If a visible label isn't specified, an `aria-label` must be provided to the TextField for accessibility. If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

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
  <template #android>
    <android />
  </template>
  <template #ios>
    <ios />
  </template>
</tabs-content>