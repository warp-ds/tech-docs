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
  <div class="tablist" role="tablist">
    <button 
      v-for="tab in tabs"
      :key="tab" role="tab"
      :id="`tab-${tab}`"
      :href="`#panel-${tab}`"
      :class="{
        'tab': true,
        'tab-head--active': activeTab === tab
      }"
      :aria-selected="`${activeTab === tab}`"
      @click="switchTab(tab);"
    >
      <slot :name="`tab-head-${tab}`"></slot>
    </button>
  </div>
  <div class="tab-body">
    <section role="tabpanel" :id="`panel-${activeTab}`" :aria-labelledby="`tab-${activeTab}`" class="tab-panel">
      <slot :name="`tab-panel-${activeTab}`"></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.tablist {
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  margin: 24px 0 0;
  padding-left: 0px;
  list-style: none;
}
.tab {
  cursor: pointer;
  margin: 8px 4px 0 0;
  padding-right: 18px;
  position: relative;
}
.tab:focus-visible {
  border-radius: 2px;
  outline: 0.2em solid royalblue;
}

.tab[aria-selected="true"] {
  text-decoration: underline;
  color: var(--vp-c-text-1);
}
</style>
