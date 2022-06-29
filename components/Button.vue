<template>
  <div @click="clickEvent()" class="w-44 h-10 bg-red-400 rounded-xl flex justify-center items-center cursor-pointer">
    <p class="font-bold text-white">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    clickEvent() {
      this.$emit("clickEvent")
    }
  }
};
</script>

<style>
</style>
