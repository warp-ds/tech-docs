<script setup>
  import * as icons from '@warp-ds/icons/vue';

  const mappedIconsBySize = Object.keys(icons).reduce((acc, current) => {
    const matches = current.match(/\d+/g);          
      
    if(!acc[ matches[0]]) {
      acc[matches[0]] = {[current]: icons[current]}
    } else {
      acc[matches[0]] = {...acc[matches[0]], ...{[current]: icons[current]}}
    }
    return acc;
      
  }, {});
  
</script>

<template>
  <section v-for="(size) in Object.keys(mappedIconsBySize)" class="s-bg-primary-subtle rounded-8 p-24 mb-24">
    <h2>{{size}}</h2>
    <main class="max-w-screen-xl mx-auto px-32">
      <div  class="grid gap-24 grid-cols-minmax-100px">
        <div v-for="(icon, name) in mappedIconsBySize[size]" :key="name">
          <div class="text-center"><div class="mx-auto mb-8 s-bg rounded-4 h-56 flex items-center justify-center flex-col">
            <component v-bind:is="icon" class="s-text"></component>
          </div>
          <div class="text-12">{{ name }}</div>
        </div>
      </div>
    </div>
    </main>
  </section>
</template>