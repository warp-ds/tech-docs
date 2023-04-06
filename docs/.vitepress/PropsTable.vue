<script setup>
import { processMarkdown } from './ApiTableUtil.js';

defineProps({ props: Array });
</script>

<template>
  <table class="docs-table">
    <thead>
      <tr>
        <th>prop</th>
        <th>type</th>
        <th>default</th>
        <th>notes</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in props" :key="row[0]">
        <td v-for="(e, i) in row" :key="e" :class="{ 'text-12': i === 3 }" v-html="processMarkdown(e)" />
      </tr>
    </tbody>
  </table>
</template>

