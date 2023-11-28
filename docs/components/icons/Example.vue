<script setup>
import decamelize from "decamelize";
import * as icons from "@warp-ds/icons/vue";
import * as reactIcons from "@warp-ds/icons/react";
import { wModal } from "@warp-ds/vue";
import { ref } from "vue";

const showModal = ref(false);
let modalData = ref({
  iconName: "",
  react: "",
  reactSyntax: "",
  vue: "",
  vueSyntax: "",
  elements: "",
  elementsIcon: "",
});

const mappedIconsBySize = Object.keys(icons).reduce((acc, current) => {
  const matches = current.match(/\d+$/g);

  acc[matches[0]] = acc[matches[0]]
    ? { ...acc[matches[0]], ...{ [current]: icons[current] } }
    : { [current]: icons[current] };

  return acc;
}, {});

const getIconName = (icon) => icon.replace(/Icon|\d+/g, "");

const setIconData = (fullName, event) => {
  const reactIconName = Object.keys(reactIcons)
    .find((icon) => icon === fullName)
    .replace("Icon", "");

  const outputString = decamelize(reactIconName, { separator: "-" }).replace(
    /([a-zA-Z])(\d+)/,
    "$1-$2"
  );

  modalData = {
    iconName: fullName,
    react: `import ${fullName} from '@warp-ds/icons/react/${outputString}';`,
    reactSyntax: `<${fullName} />`,
    vue: `import ${fullName} from '@warp-ds/icons/vue/${outputString}';`,
    vueSyntax: `<icon-${outputString} />`,
    elements: `import from '@warp-ds/icons/elements/${outputString}';`,
    elementsSyntax: `<w-icon-${outputString}></w-icon-${outputString}>`,
  };
};

const reset = () => {
  modalData = {
    iconName: "",
    react: "",
    reactSyntax: "",
    vue: "",
    vueSyntax: "",
    elements: "",
    elementsSyntax: "",
  };
};
</script>

<template>
  <section
    v-for="size in Object.keys(mappedIconsBySize)"
    :key="size"
    style="background-color: var(--vp-c-bg-alt)"
    class="rounded-8 p-24 mb-24"
  >
    <h2 style="color: var(--vp-c-text-1)">{{ size }}</h2>
    <w-modal
      v-if="modalData"
      title="Icon usage"
      :right="{ 'aria-label': 'Close' }"
      @dismiss="
        showModal = false;
        reset();
      "
      v-model="showModal"
      @right="
        showModal = false;
        reset();
      "
    >
      <div>
        <h1 class="h4 mb-16">
          You can use the following import for icon: {{ modalData.iconName }}
        </h1>
        <p>
          Usage for React:
          <div class="border rounded-8 my-8 p-8">{{ modalData.react }}</div>
          <div class="border rounded-8 my-8 p-8">{{ modalData.reactSyntax}}</div>
        </p>
        <p>
          Usage for Vue:
          <div class="border rounded-8 my-8 p-8">{{ modalData.vue }}</div>
          <div class="border rounded-8 my-8 p-8">{{ modalData.vueSyntax}}</div>
        </p>
        <p>
          Usage for Elements:
          <div class="border rounded-8 my-8 p-8">{{ modalData.elements }}</div>
          <div class="border rounded-8 my-8 p-8">{{ modalData.elementsSyntax}}</div>
        </p>
      </div>
    </w-modal>
    <main class="max-w-screen-xl mx-auto px-32">
      <div class="grid gap-24 grid-cols-minmax-100px">
        <div
          @click="
            showModal = true;
            setIconData(fullName, event);
          "
          v-for="(icon, fullName) in mappedIconsBySize[size]"
          :key="fullName"
        >
          <div class="text-center">
            <div
              class="mx-auto mb-8 s-bg rounded-4 h-56 flex items-center justify-center flex-col"
            >
              <component :is="icon" class="s-icon"></component>
            </div>
            <p class="text-12" style="color: var(--vp-c-text-1)">
              {{ getIconName(fullName) }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
