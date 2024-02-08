<script setup>
  import Elements from './elements.md';
  import iOS from './ios.md';
</script>

# Toast

Toasts display small snippets of information to the user and then disappear after a set time. The Warp toast appears at the bottom of the screen but will normally be triggered by a user interaction somewhere else on the page.

<components-status elements='released' ios='released' />

## Example

<toast-example />

## Usage

<component-design-guidelines name="Warp - Components / Toast" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23910&mode=design" />

### Accessibility

For accessibility reasons, toasts should never contain interactive elements as interactive elements should always occur in the same location as the action that triggered it. Because of this limitation, we consider the use of toasts to be somewhat of an antipattern and recommend that another approach be found wherever possible. The Warp team will be investigating potentially better approaches for specific use cases in near future. That being said, you are free to use toast so long as you avoid using interactive elements such as links or a close button.

<component-questions />

## Frameworks

<tabs-content>
  <template #elements>
    <elements />
  </template>
  <template #iOS>
    <iOS />
  </template>
</tabs-content>
