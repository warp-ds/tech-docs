<script setup>
import { computed } from 'vue';

// props: 'released' | 'developing' | 'planned' | 'unsupported'
const props = defineProps({
  react: {
    type: String,
    default: 'unsupported',
  },
  vue: {
    type: String,
    default: 'unsupported',
  },
  elements: {
    type: String,
    default: 'unsupported',
  },
});

const components = {
  react: "React",
  vue: "Vue",
  elements: "Elements",
};

const status = {
  released: "Released",
  developing: "Developing",
  planned: "Planned",
  unsupported: "Unsupported",
}

const reactStatusText = computed( () => status[props.react] );
const vueStatusText = computed( () => status[props.vue] );
const elementsStatusText = computed( () => status[props.elements] );

const getStatus = ( key ) => {
  if ( key === 'react' ) return reactStatusText.value;
  else if ( key === 'vue' ) return vueStatusText.value;
  else if ( key === 'elements' ) return elementsStatusText.value;
  return 'No status'
}
</script>

<template>
  <div class="wrapper">
    <div v-for="(component, key) in components" :key="key" class="item">
      <div :class="['circle', `circle-${props[key]}`]"></div>
      <div>
        <h4 class="title">{{ component }}</h4>
        <span>{{ getStatus(key) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  margin-top: 24px;
}

.item {
  display: flex;
  margin-right: 64px;
  margin-top: 12px;
}

.title {
  margin: 0;
}

.circle {
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  margin-right: 12px;
  margin-top: 8px;
  width: 12px;
}

.circle-released {
  background-color: #67eeb8
}

.circle-planned {
  background-color: #66e0ff
}

.circle-developing {
  background-color:  #fae76b;
}

.circle-unsupported {
  background-color: #f99
}
</style>
