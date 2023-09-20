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

## Frameworks

<tabs-content>
  <template #react>
  </template>
  <template #vue>
  </template>
  <template #elements>
    <elements />
  </template>
</tabs-content>
