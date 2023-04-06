<script setup>
import { processMarkdown } from './ApiTableUtil.js';

defineProps({ data: Array, headers: Array });
</script>

<template>
  <table class="docs-table">
    <thead>
      <tr>
        <th v-for="h in headers">{{ h }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td v-for="r in row" v-html="processMarkdown(r)" />
      </tr>
    </tbody>
  </table>
</template>
