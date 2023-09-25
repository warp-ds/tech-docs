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

<component-design-guidelines name="Warp - Components / Choice List" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=259-14517&mode=design" />

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
</tabs-content>