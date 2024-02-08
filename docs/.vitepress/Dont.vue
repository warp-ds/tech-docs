<script setup>

const props = defineProps({
  imgurl: String,
  imgalt: String,
});

</script>

<template>
  <section class="dont-wrapper">
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" alt="white cross on a red background">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#BE3830"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.43945 8.56065L9.87879 12L6.43945 15.4393L8.56077 17.5606L12.0001 14.1213L15.4395 17.5606L17.5608 15.4393L14.1214 12L17.5608 8.56065L15.4395 6.43933L12.0001 9.87867L8.56077 6.43933L6.43945 8.56065Z" fill="white"/>
        </svg>
        <span>Don't</span>
      </h3>
      <div v-if="imgurl" class="dont-figure">
        <img class="dont-img" :src="imgurl" :alt="imgalt">
      </div>
      <div class="dont-caption">
        <slot></slot>
      </div>
    </section>
</template>
<style>
.dont-wrapper{
  grid-column-start: 2;
  grid-column-end: 3;
}
.dont-wrapper h3{
  Display: flex;
  align-items: center;
  gap:8px;
  padding: 0;
  margin: 0;
  margin-bottom:16px;
  font-size:16px;
  font-weight: bold;
}
.dont-figure{
  display: flex;
  align-items: center;
  justify-content: center;
  border-top:8px solid #BE3830;
  border-radius:5px;
  aspect-ratio: 4 / 3;
  overflow:hidden;
  background-color: #ccc;
  margin-bottom: 16px;
}
.dont-figure img{
  max-width:80%
}
</style>