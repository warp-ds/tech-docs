<script setup>
    import { wButton } from '@warp-ds/vue';
</script>

<script>

export default {
    data() {
        return {
            toggleTheme: "finn-no",
        };
    },
    methods: {
        toggle(theme) {
            window.theme = theme;
            this.toggleTheme = theme;
        },
    },
};

</script>

<template>

<div class="ui buttons big">
  <button
    class="ui button toggle"
    @click="toggle('finn-no',$event)"
  >Finn no</button>
  <button
    class="ui button toggle"
    @click="toggle('blocket-se',$event)"
  >Blocket</button>
</div>  
<div class="space-x-8">
    <w-button primary>Click me</w-button>
    <w-button>Click me</w-button>
    <w-button quiet="true">Click me</w-button>
    <w-button quiet small="true">Click me</w-button>
    <w-button variant="negative">Click me</w-button>
    <w-button variant="primary" loading="true">Click me</w-button>
  </div>
</template>
