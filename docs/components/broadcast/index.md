<script setup>
  import Elements from './elements.md';
</script>

# Broadcast
Broadcast automatically fetches broadcast messages for the current (or a given) url.

Uses toast apis under the hood.

__N.B.__ Broadcast should only be included once per page to avoid duplicate broadcast messages being displayed. The preferred method for including broadcast will soon be a podlet provided by the communication team. In the meantime this component can be used directly.

## Attributes
__interval__ — Refetch interval - default: 300 000 (5 minutes)

__api__ - API endpoint to fetch broadcasts from. Use https://dev.finn.no/broadcasts on dev and https://finn.no/broadcasts on prod. - Required

__url__ — Page (identified by its url) to check for registered broadcasts against - default window.location.href

<tabs-content>
  <template #elements>
    <elements />
  </template>
</tabs-content>
