<script setup>
  import { wCard, wDeadToggle, wClickable } from '@warp-ds/vue';
  import { ref } from 'vue';

  const selected = ref(false)
  const foo = ref('')

</script>

<template>
  <h3>Usage of w-clickable in Card</h3>
  <div class="component flex gap-10">
    <w-card :selected="selected">
      <img class="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" />
      <p class="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
      <div class="p-16">
        <p class="text-12">DNB Eiendom</p>
        <p><w-clickable @click="selected = !selected" class="text-left">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</w-clickable></p>
        <p class="text-14  mb-4">Bøgata 25C, 0655 Oslo</p>
        <p class="font-bold my-8">52 m<span style="font-size: 10px; vertical-align: super;">2</span> Totalpris: 4 869 039 kr</p>
        <p class="text-14  mb-0">Eier (Selveier) <span class="">•</span> Leilighet <span class="">•</span> 2 soverom</p>
      </div>
    </w-card>
  </div>
  <h3>Usage of dead toggles</h3>
  <div class="component flex gap-10">
    <w-card flat class="py-4 px-12 flex items-center" :selected="foo === 'foo'">
      <w-dead-toggle radio v-model="foo" value="foo" />
      <div class="ml-12">
        <h4 class="mb-0"><w-clickable radio v-model="foo" value="foo">Purchase foo</w-clickable></h4>
        <p class="mb-0 text-14">470 kr/mnd</p>
      </div>
    </w-card>
    <w-card flat class="py-8 px-12 flex items-center" :selected="foo === 'bar'">
      <w-dead-toggle radio v-model="foo" value="bar" />
      <div class="ml-12">
        <h4 class="mb-0"><w-clickable radio v-model="foo" value="bar">Purchase bar</w-clickable></h4>
        <p class="mb-0 text-14">520 kr/mnd</p>
      </div>
    </w-card>
  </div>

</template>
