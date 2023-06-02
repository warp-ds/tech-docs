<script setup>
  import Vue from './vue.md';
  import React from './react.md';
</script>

# TextArea

A multiline text input component.

<components-status react='released' vue='released' />

## Example

<theme-switcher />

<textarea-example />

## Usage

### Accessibility

If a visible label isn't specified, an `aria-label` must be provided to the TextArea for accessibility. If the field is labeled by a separate element, an `aria-labelledby` prop must be provided using the id of the labeling element instead.

## Frameworks

<tabs-content> 
  <template #react>
   <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #elements>
  </template>
</tabs-content>