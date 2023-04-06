<script setup>
  import { ref } from 'vue';

  const toggleTheme = ref('finn-no');
  const toggle = (event) => {
    window.theme = event.target.value;
    toggleTheme.value = event.target.value;
  };
</script>

<template>
  <div class="select">
    <select name="themes" id="themes" @change="toggle($event)">
      <option value="finn-no">Finn</option>
      <option value="blocket-se">Blocket</option>
      <option value="tori-fi">Tori</option>
    </select>
  </div>  
</template>

<style lang="scss" scoped>
  .select {
    height: 30px;
    margin-top: 24px;
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative;

    select,
    &::after {
      grid-area: select;
    }
    width: 300px;
    padding: 4px 8px;

    &::after {
      content: "";
      justify-self: end;
      width: 8px;
      height: 8px;
      background-color: var(--vp-code-block-bg);
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  }

  .select:focus-within  {
    border: 2px solid var(--vp-c-brand);
  }

</style>