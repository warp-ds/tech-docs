<script setup>

const props = defineProps({
  imgurl: String,
  imgalt: String,
});

</script>

<template>
    <section class="do-wrapper">
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" alt="white checkmark on a green background">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#0E9946"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0608 8.56065L16.9395 6.43933L9.75011 13.6287L7.06077 10.9393L4.93945 13.0607L9.75011 17.8713L19.0608 8.56065Z" fill="white"/>
        </svg>
        <span>Do</span>
      </h3>
        <div v-if="imgurl" class="do-figure">
          <img class="do-img" :src="imgurl" :alt="imgalt">
        </div>
        <div class="do-caption">
          <slot></slot>
        </div>
      </section>
</template>
<style>
.do-wrapper{
  grid-column-start: 1;
  grid-column-end: 2;
}
.do-wrapper h3{
  Display: flex;
  align-items: center;
  gap:8px;
  padding: 0;
  margin: 0;
  margin-bottom:16px;
  font-size:16px;
  font-weight: bold;
}
.do-figure{
  display: flex;
  align-items: center;
  justify-content: center;
  border-top:8px solid #0E9946;
  border-radius:5px;
  aspect-ratio: 4 / 3;
  overflow:hidden;
  background-color: #ccc;
  margin-bottom: 16px
}
.do-figure img{
  max-width:80%
}
</style>