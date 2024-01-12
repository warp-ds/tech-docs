<template>
<div class="component" ref="el" />
</template>

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import { Pagination } from '@warp-ds/react'

const el = ref()

let paginationData = ref({
    currentPage: 0,
});
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(Pagination, { currentPage: paginationData.value.currentPage,
            numPages: 3,
            lastPage: 3,
            createHref: (page) => `?page=${page}`,
            onChange: (page) => paginationData.value.currentPage++ }, null))
})
</script>

