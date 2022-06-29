<template>
  <div>
    <main class="flex flex-col justify-center items-center mt-20">
      <nav>
        <NuxtLink
          :to="{
            path: '/create-quote',
          }"
          >Create Quote</NuxtLink
        >
      </nav>
      <h1>CALMCOCO.COM</h1>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
