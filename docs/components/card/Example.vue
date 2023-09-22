<script setup>
  import { wCard, wDeadToggle, wClickable } from '@warp-ds/vue';
  import { ref } from 'vue';

  const selected = ref(false)
  const foo = ref('')

  const checkModel = ref(false)
  const radioModel = ref('')

</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Default</h3>
      <div class="flex gap-10">
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
        <w-card :selected="selected">
          <img class="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x402" />
          <p class="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div class="p-16">
            <p class="text-12 ">DNB Eiendom</p>
            <p><w-clickable @click="selected = !selected" class="text-left">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</w-clickable></p>
            <p class="text-14  mb-4">Bøgata 25C, 0655 Oslo</p>
            <p class="font-bold my-8">52 m<span style="font-size: 10px; vertical-align: super;">2</span> Totalpris: 4 869 039 kr</p>
            <p class="text-14  mb-0">Eier (Selveier) <span class="">•</span> Leilighet <span class="">•</span> 2 soverom</p>
          </div>
        </w-card>
        <w-card :selected="selected">
          <img class="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x404" />
          <p class="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div class="p-16">
            <p class="text-12 ">DNB Eiendom</p>
            <p><w-clickable @click="selected = !selected" class="text-left">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</w-clickable></p>
            <p class="text-14  mb-4">Bøgata 25C, 0655 Oslo</p>
            <p class="font-bold my-8">52 m<span style="font-size: 10px; vertical-align: super;">2</span> Totalpris: 4 869 039 kr</p>
            <p class="text-14  mb-0">Eier (Selveier) <span class="">•</span> Leilighet <span class="">•</span> 2 soverom</p>
          </div>
        </w-card>
      </div>
    </div>
    <div>
      <h3 class="h4">Toggles in cards</h3>
      <w-card :selected="checkModel" class="w-max mb-8">
        <div class="p-24 flex">
          <w-dead-toggle checkbox v-model="checkModel" :value="true" />
          <w-clickable checkbox :value="true" v-model="checkModel" label-class="ml-12 text-16">Check in a card</w-clickable>
        </div>
      </w-card>
      <div class="flex gap-10">
        <w-card :selected="radioModel === 'foo'" class="w-max">
          <div class="p-24 flex">
            <w-dead-toggle radio v-model="radioModel" value="foo" />
            <w-clickable radio value="foo" v-model="radioModel" label-class="ml-12" name="radio-group">Radio in a card - A</w-clickable>
          </div>
        </w-card>
        <w-card :selected="radioModel === 'bar'" class="w-max">
          <div class="p-24 flex">
            <w-dead-toggle radio v-model="radioModel" value="bar" />
            <w-clickable radio value="bar" v-model="radioModel" label-class="ml-12" name="radio-group">Radio in a card - B</w-clickable>
          </div>
        </w-card>
      </div>
    </div>
    <div>
      <h3 class="h4">Dead toggles</h3>
      <div class="flex gap-10">
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
    </div>
  </div>
</template>
