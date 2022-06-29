<template>
  <div class="quote">
    <div class="author">{{ author }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ["author", "text"],
};
</script>

<style scoped>
.quote {
  padding: 15px;
  width: 60vw;
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
}

.author {
  width: 100%;
}

.text  {
  width: 100%;
}
</style>
