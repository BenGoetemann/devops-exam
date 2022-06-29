<template>
  <div class="bg-gray-100 h-screen w-full">
    <main class="bg-gray-100 flex flex-col justify-center items-center py-20">
      <nav>
        <NuxtLink :to="{ path: '/create-quote' }"
          ><Button text="Create Quote"
        /></NuxtLink>
      </nav>
      <Nuxt />
      <NuxtLink :to="{ path: '/create-quote' }"
        ><Button class="mt-20" text="Create Quote"
      /></NuxtLink>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
