<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
  import Android from './android.md';
  import iOS from './ios.md';
</script>

# Button

Buttons are used to perform actions, with different visuals for different needs.

<components-status react='released' vue='released' elements='released' android='released' ios='developing' />

## Example
<theme-switcher />

<button-example />

## Usage

### Accessibility

If the button doesn't have visible text content, such as when used with only an
icon, an `aria-label` prop must be provided for accessibility.

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