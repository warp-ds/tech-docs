<script setup>
  import React from './react.md';
</script>

# Combobox (also known as an autocomplete or autosuggest)

A combobox is the combination of an `<input type="text"/>` and a list.
The list is designed to help the user arrive at a value, but the value does not necessarily have to come from that list.
Don't think of it like a `<select/>`, but more of an input with some suggestions.
You can, however, validate that the value comes from the list, that's up to your app.

<components-status react='released' />

## Example

![Combobox](/combobox.png)

## Usage

<component-design-guidelines name="Warp - Components / Button" link="https://www.figma.com/file/8P1JQsd82b93gQ6K3igO2p/Warp---Components?type=design&node-id=303-19039&mode=design&t=zUBVst8JZi0AR66n-0" />

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
</tabs-content>