<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Breadcrumbs

Breadcrumbs show the navigation structure for the current location.

<components-status react='released' vue='released' elements='released' />

## Example

<theme-switcher />

<breadcrumbs-example />

## Usage
### Content

Breadcrumbs expect their component children to be the link "crumbs" that make up
the navigation structure. The component will interject a separator between the
crumbs.

### Accessibility

Breadcrumbs should have a label that identifies the structure as a breadcrumb
trail to screen readers. Until internationalization is added to Warp components, by default `aria-label` is set to <em>"Her er du"</em> (Norwegian).

It is recommended that the crumb for the current page has the
`aria-current="page"` attribute set. Usually this is the last crumb in the
trail.

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
