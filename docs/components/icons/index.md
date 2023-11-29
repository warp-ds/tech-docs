<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Icons

Warp's icon set is designed to help users understand actions, information and draw attention to elements.

<components-status react='released' vue='released' elements='released' />

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

## Typescript support

Starting from @warp-ds/icons@1.3.0, We are fully typescript compliant. You'll need to switch to module & moduleResolution as `NodeNext`. You can read more about it [here](https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-nodenext)


## Setup

Since warp components are internationalised, you'd need to either set `NMP_LANGUAGE` for server-side rendering of the component, or set html document lang with a two-letter-code, eg: `<html lang="en">`. The server-side variable is read as `process.env.NMP_LANGUAGE` so you could either define this in your package.json script, or use `.env` files to leverage [dotenv](https://github.com/motdotla/dotenv).

## Examples

<theme-switcher />


Click any icon tile to open usage modal:
<icon-example />