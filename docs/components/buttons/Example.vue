<script setup>
    import { wButton } from '@warp-ds/vue';
</script>

<template>
    <div class="space-x-8 space-y-16 text-center">
        <w-button primary>Primary</w-button>
        <w-button primary loading>Loading</w-button>
        <w-button utility>Utility</w-button>
        <w-button>Secondary</w-button>
        <w-button secondary quiet>Secondary Quiet</w-button>
        <w-button primary negative>Negative</w-button>
        <w-button negative quiet>Negative Quiet</w-button>
    </div>
</template>
