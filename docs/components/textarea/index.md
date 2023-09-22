<script setup>
  import Vue from './vue.md';
  import React from './react.md';
</script>

# Text Area

A multiline text input component.

<components-status react='released' vue='released' />

## Example

<theme-switcher />

<textarea-example />

## Usage

<component-design-guidelines name="Warp - Components / Button" link="https://www.figma.com/file/8P1JQsd82b93gQ6K3igO2p/Warp---Components?type=design&node-id=303-19039&mode=design&t=zUBVst8JZi0AR66n-0" />

### Accessibility

If a visible label isn't specified, an `aria-label` must be provided to the Text Area for accessibility.
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
</tabs-content>