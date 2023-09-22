<script setup>
  import Vue from './vue.md';
  import React from './react.md';
</script>

# Modal

Modals (or dialogs) display important information that users need to acknowledge. They are overlays that prevent users from interacting with the rest of the application until a specific action is taken. They can be disruptive because they require merchants to take an action before they can continue interacting with the rest of the site. It should be used thoughtfully and sparingly.

<components-status react='released' vue='released' />

## Example

<theme-switcher />

<modal-example />

## Usage

<component-design-guidelines name="Warp - Components / Button" link="https://www.figma.com/file/8P1JQsd82b93gQ6K3igO2p/Warp---Components?type=design&node-id=303-19039&mode=design&t=zUBVst8JZi0AR66n-0" />

### Accessibility
Modal needs either aria-label or aria-labelledby to be accessible to screen readers.

All dialogs must have a title. Titles appear in bold at the top of the dialog and use a few words to convey the outcome of what will happen if a user continues with an action. Use the property title for this.

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