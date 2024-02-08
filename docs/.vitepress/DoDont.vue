<template>
    <section class="dodont-grid">
        <slot></slot>
    </section>
</template>
<style>
  .dodont-grid{
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto;
    grid-gap: 24px;
    margin-top: 24px;
  }
</style>