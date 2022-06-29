<template>
  <div class="bg-white p-6 my-3 w-96 rounded-md shadow-lg">
    <div class="w-full"><p class="text-sm mb-3">{{ author }}</p></div>
    <div class="w-full"><p class="text-lg">{{ text }}</p></div>
    <div class="w-full"><p class="text-sm mt-3">{{ date }}</p></div>
  </div>
</template>

<script>
export default {
  props: ["author", "text", "date"],
};
</script>

<style scoped>
</style>
