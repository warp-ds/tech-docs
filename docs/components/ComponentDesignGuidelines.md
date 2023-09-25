<script setup>
const props = defineProps({
  name: String,
  link: String,
});
</script>
### Design Guidelines
See Figma: <a :href="link" target="_blank">{{ name }}</a>
