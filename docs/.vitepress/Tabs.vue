<script setup>
import { ref } from 'vue';

const props = defineProps({
  initialTab: String,
  tabs: Array
});
const activeTab = ref(props.initialTab);
const switchTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <div class="tab">
    <header class="tab-header">
      <ul class="tab-heads">
        <li
          class="tab-head"
          v-for="tab in tabs"
          :key="tab"
          :class="{
            'tab-head--active': activeTab === tab
          }"
          @click="switchTab(tab);"
        >
          <slot :name="`tab-head-${tab}`"></slot>
        </li>
      </ul>
    </header>
    <main class="tab-body">
      <div class="tab-panel">
      <slot :name="`tab-panel-${activeTab}`"></slot></div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  margin-top: 24px;
}

.tab-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.tab-heads {
  display: flex;
  margin: 0;
  padding-left: 8px;
  list-style: none;
}

.tab-head {
  cursor: pointer;
  margin-top: 8px;
  padding-right: 18px;
  position: relative;

  &--active {
    text-decoration: underline;
    color: var(--vp-c-text-1);
  }
}
</style>
