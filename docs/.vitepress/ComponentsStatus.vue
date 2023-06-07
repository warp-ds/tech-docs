<script setup>
import { computed } from 'vue';

const props = defineProps({
  react: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  },
  vue: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  },
  elements: {
    type: String,
    default: 'unsupported',
    validator: (value) => ['released', 'developing', 'planned', 'unsupported'].includes(value)
  },
});

const frameworkStatus = computed(() => [
  { name: 'React', status: props.react },
  { name: 'Vue', status: props.vue },
  { name: 'Elements', status: props.elements },
]);

</script>

<template>
  <div class="wrapper">
    <div v-for="framework in frameworkStatus" :key="framework.name" class="item">
      <div :class="`circle circle-${framework.status}`"></div>
      <div>
        <h4 class="title">{{ framework.name }}</h4>
        <span class="status">{{ framework.status }}</span>
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

.status {
  text-transform: capitalize;
}
</style>
