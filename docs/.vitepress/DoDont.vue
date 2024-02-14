<template>
  <section class="do-dont-grid">
    <slot></slot>
  </section>
</template>

<style>
  .do-dont-grid{
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto;
    grid-gap: 24px;
    margin-top: 24px;
  }
</style>
