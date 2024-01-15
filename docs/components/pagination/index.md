<script setup>
import React from './react.md';
</script>

# Pagination

Pagination is used on various listing pages. It's typically found at the end of search result pages, My Ads, Favorite lists, or anywhere a long list of items are divided up and presented to users over multiple pages. Since pagination is a fairly basic and familiar feature, it's reasonable to expect that users would benefit from a consistent design and behaviour. Consistency reduces cognitive load, which in turn leads to less frustrated and more happy users.

<components-status react='released' />

## Example

<theme-switcher />

<pagination-example />

### Accessibility

The current page is indicated by aria-current="page". There is a screen reader only Heading that reads `Pages` in each locale. The buttons are anchor tags marked with role="button".

The component is fully accessible.

## Frameworks

<react />