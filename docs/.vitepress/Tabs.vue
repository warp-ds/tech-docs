<script setup>
import { ref, getCurrentInstance } from 'vue';

const props = defineProps({
  initialTab: String,
  tabs: Array,
  isDisabled: Function
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
        'tab-head--active': activeTab === tab,
        'tab-head--disabled': props.isDisabled(tab),
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
  display: flex;
  margin: 48px 0 0;
  padding-left: 0px;
  list-style: none;
}

.tab {
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
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
  text-underline-offset: 4px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tab-head--disabled {
  font-weight: 400;
  opacity: .6;
  pointer-events: none;
}
</style>
