<script setup>
const props = defineProps({
  not: Boolean,
  imgurl: String,
  imgalt: String,
});
</script>

<template>
  <section class="do-wrapper" :class="{'do-not': not}">
    <h3>
      <svg v-if="not" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <title>White cross on a red background</title>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#BE3830"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.43945 8.56065L9.87879 12L6.43945 15.4393L8.56077 17.5606L12.0001 14.1213L15.4395 17.5606L17.5608 15.4393L14.1214 12L17.5608 8.56065L15.4395 6.43933L12.0001 9.87867L8.56077 6.43933L6.43945 8.56065Z" fill="white"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <title>White checkmark on a green background</title>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#0E9946"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0608 8.56065L16.9395 6.43933L9.75011 13.6287L7.06077 10.9393L4.93945 13.0607L9.75011 17.8713L19.0608 8.56065Z" fill="white"/>
      </svg>
      Do{{not?'n\'t':''}}
    </h3>
    <div v-if="imgurl" class="do-figure">
      <img :src="imgurl" :alt="imgalt">
    </div>
    <div class="do-caption">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss">
.do-wrapper {
  grid-column-start: 1;
  grid-column-end: 2;

  & > h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: bold;
  }
  .do-figure {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 8px solid #0E9946;
    border-radius: 5px;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background-color: #ccc;
    margin-bottom: 16px;

    img {
      max-width: 80%
    }
  }

  &.do-not {
    grid-column-start: 2;
    grid-column-end: 3;

    .do-figure {
      border-top-color: #BE3830;
    }
  }
}
</style>
