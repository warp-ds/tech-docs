<script setup>
  import Elements from './elements.md';
</script>

# Broadcast

Broadcast automatically fetches broadcast messages for the current (or a given) url.

Uses toast apis under the hood.

**N.B.** Broadcast should only be included once per page to avoid duplicate broadcast messages being displayed. The preferred method for including broadcast is to use the [broadcast-podlet](https://github.schibsted.io/finn/broadcast-podlet) provided by the communication team.

<components-status elements='released' />

## Example

See the [toast component](/components/toast/) for examples, as `broadcast` utilizes it to display messages.

## Usage

<component-design-guidelines name="Warp - Components / Broadcast" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=253-14893&mode=design" />

<component-questions />

## Frameworks

<tabs-content>
  <template #elements>
    <elements />
  </template>
</tabs-content>
