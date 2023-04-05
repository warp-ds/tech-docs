<template>
  <div class="tab">
    <header class="tab-header">
      <ul class="tab-heads">
        <li
          class="tab-head"
          v-for="tab in tabs"
          :key="tab"
          :class="{
            'tab-head--active': state.activeTab === tab
          }"
          @click="switchTab(tab);"
        >
          <slot :name="`tab-head-${tab}`"></slot>
        </li>
      </ul>
    </header>
    <main class="tab-body">
      <div class="tab-panel"> 
      <slot :name="`tab-panel-${state.activeTab}`"></slot></div>
    </main>
    
  </div>
</template>

<script setup>
  import { reactive} from 'vue';

  const props = defineProps({
    initialTab: String,
    tabs: Array
  })
  const state = reactive({activeTab: props.initialTab});
  function switchTab(tab) {
    state.activeTab = tab;
  };

</script>

<style scoped> 

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
}

.tab-head--active {
  text-decoration: underline;
  color: var(--vp-c-text-1);
}

</style>
