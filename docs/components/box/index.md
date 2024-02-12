<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
  import Android from './android.md';
</script>

# Box

Box is a layout component used for separating content areas on a page.

<components-status react='released' vue='released' elements='released' android='released'/>

## Example

<theme-switcher />

<box-example />

## Usage

<component-design-guidelines name="Warp - Components / Box" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=250-13356&mode=design" />

<component-questions />

### Accessibility

Use the ARIA `role` attribute to provide semantic meaning to a Box element.
If no role property is supplied, it will default to `role="region"`.
To remove the default role attribute, supply an empty role (`role=""`).
Consider using more suitable roles for your specific Box, as described on
[MDN WAI-ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types).

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
</tabs-content>
