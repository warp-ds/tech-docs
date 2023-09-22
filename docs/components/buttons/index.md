<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Button

Buttons are used to perform actions, with different visuals for different needs.

<components-status react='released' vue='released' elements='released' />

## Example
<theme-switcher />

<button-example />

## Usage

<component-design-guidelines name="Warp - Components / Button" link="https://www.figma.com/file/8P1JQsd82b93gQ6K3igO2p/Warp---Components?type=design&node-id=303-19039&mode=design&t=zUBVst8JZi0AR66n-0" />

### Accessibility
If the button doesn't have visible text content, such as when used with only an
icon, an `aria-label` prop must be provided for accessibility.

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