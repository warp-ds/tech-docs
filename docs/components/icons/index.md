<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Icons

Warp's icon set is designed to help users understand actions, information and draw attention to elements.

<components-status react='released' vue='released' elements='released' />

## Usage

<component-design-guidelines name="Warp - Components / Icons" link="https://www.figma.com/file/yEx16ew6S0Xgd579dN4hsM/Warp---Icons?type=design&node-id=6011-1442&mode=design&t=zY5N398IPei2z89J-0" />

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

## Setup

Since warp components are internationalised, you'd need to either set `NMP_LANGUAGE` for server-side rendering of the component, or set html document lang with a two-letter-code, eg: `<html lang="en">`. The server-side variable is read as `process.env.NMP_LANGUAGE` so you could either define this in your package.json script, or use `.env` files to leverage [dotenv](https://github.com/motdotla/dotenv).

## Examples

<theme-switcher />


Click any icon tile to open usage modal:
<icon-example />