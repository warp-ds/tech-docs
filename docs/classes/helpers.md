> Helper Classes

# Useful Warp helper classes

## page container
The `.page-container` helper class job is to normalize page behavior across the pages/sites, most pages should be set up with this.

- Sets a max-width for the page ( This is dictated by the banner formats )
- Left aligns the page if there is room for banners on both sides
- Centers the page when there is room for banners on both sides.
- Sets up spacing between content and banners ( Also calculated from banner sizes )

Header/Footer also use the same helper class to follow the same pattern.

<container>
  <div class="flex justify-center">
    <img src="/classes/page-container.png" class="object-cover" alt="example of what page-container does as an overlay on top of finn.no" />
  </div>
</container>

```html
<main class="page-container">
  ...
</main>
```