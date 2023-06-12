<script setup>
  import Cognitive from './cognitive.md';
  import Visual from './visual.md';
  import Keyboard from './keyboard.md';
  import Screenreader from './screenreader.md';
</script>

# Success criteria

The following success criteria will help you create graphs that effectively communicate insights and are accessible for everyone. Some criteria are most relevant for designers, while others are more relevant for developers.

The criteria are put into four categories:
- **Cognitive**: Is the graph understandable for everyone?
- **Visual**: Are the visual elements possible to perceive for everyone?
- **Keyboard**: Can interactive charts be operated using keyboard navigation?
- **Screen reader**: Is all the information accessible for people using a screen reader?

<tabs-content>
  <template #cognitive>
   <cognitive />
  </template>
  <template #visual>
    <visual />
  </template>
  <template #keyboard_navigation>
    <keyboard />
  </template>
  <template #screen_reader>
    <screenreader />
  </template>
</tabs-content>
