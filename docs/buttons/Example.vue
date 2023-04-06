<script setup>
    import { wButton } from '@warp-ds/vue';
</script>

<template>
    <div class="space-x-8">
        <w-button primary>Click me</w-button>
        <w-button>Click me</w-button>
        <w-button secondary quiet>Click me</w-button>
        <w-button secondary quiet small>Click me</w-button>
        <w-button primary negative>Click me</w-button>
        <w-button primary loading>Click me</w-button>
    </div>
</template>
