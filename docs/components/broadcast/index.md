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

<component-design-guidelines name="Warp - Components / Button" link="https://www.figma.com/file/8P1JQsd82b93gQ6K3igO2p/Warp---Components?type=design&node-id=303-19039&mode=design&t=zUBVst8JZi0AR66n-0" />

<component-questions />

## Frameworks

<tabs-content>
  <template #elements>
    <elements />
  </template>
</tabs-content>
