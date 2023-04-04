<script setup>
    import '@warp-ds/vue';
</script>

<script>

export default {
  data() {
    return {
      toggleTheme: 'finn-no',
    };
  },
  methods: {
    toggle(theme) {
        console.log({theme})
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
    <w-button variant="primary">Hello Fabric</w-button>
    <w-button>Hello Fabric</w-button>
    <w-button quiet="true">Hello Fabric</w-button>
    <w-button quiet small="true">Hello Fabric</w-button>
    <w-button variant="negative">Negative button</w-button>
    <w-button variant="negative" small="true">Negative button small</w-button>
  </div>
</template>
