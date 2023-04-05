<script setup>
import * as apiTable from '../api-table.js'
import PropsTable from './PropsTable.vue'
import OtherTable from './OtherTable.vue'
import { computed } from 'vue'

const props = defineProps({
  vue: Boolean,
  react: Boolean,
  component: String,
  headerLevel: {
    type: Number,
    default: 4
  }
})

const data = computed(() => apiTable[props.vue ? 'vue' : 'react'][props.component])
</script>

<template>
  <div class="space-children">
    <div v-if="data.required?.length">
      <component :is="`h${headerLevel}`">Required props</component>
      <other-table :headers="['name', 'type', 'default', 'notes']" :data="data.required" />
    </div>
    <div v-if="data.props?.length">
      <component :is="`h${headerLevel}`">Optional Props</component>
      <props-table v-bind="data" />
    </div>
    <div v-if="data.slots?.length">
      <component :is="`h${headerLevel}`">Slots</component>
      <other-table :headers="['name', 'use']" :data="data.slots" />
    </div>
    <div v-if="data.events?.length">
      <component :is="`h${headerLevel}`">Events</component>
      <other-table :headers="['name', 'when']" :data="data.events" />
    </div>
    <other-table v-else-if="data.titles" :headers="data.titles" :data="data.rows" />
  </div>
</template>

<style scoped>
h5 {
  font-size: 14px;
  margin-top: 16px;
}
</style>

<style>
.space-children>*~* {
  margin-top: 32px;
}
.vp-doc .docs-table {
  width: 100%;
  display: table;
}
@media (max-width: 640px) {
  .vp-doc .docs-table {
    display: block;
  }
}
/* we emit p tags because of markdown, for now we just nuke the margin instead of clean
ing up the tag */
.vp-doc .docs-table p {
  margin: 0;
}
.docs-table th,
.docs-table td,
.docs-table tr {
  border: none;
}
.docs-table thead {
  border-bottom: 1px solid var(--vp-c-divider-light);
}
.docs-table thead th {
  font-size: 12px;
  padding: 8px 24px;
}
.docs-table thead tr {
  text-transform: uppercase;
  text-align: left;
  color: var(--vp-c-text-2);
}
.docs-table th {
  background: none !important;
}
.docs-table tr {
  font-size: 14px;
}
.docs-table tbody {
  vertical-align: top;
}
.docs-table tbody td {
  padding: 16px 24px;
  vertical-align: baseline;
}
.annotation {
  font-size: 10px;
  margin-top: 4px;
}
.docs-table tbody tr td:first-of-type {
  font-weight: bold;
}
.text-12,
.text-12 * {
  font-size: 12px !important;
}
</style>
