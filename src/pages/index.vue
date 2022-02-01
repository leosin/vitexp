<template>
  <section class="container">
    <h1>PC-home</h1>

    <div
      class="
        space-y-4
        text-center
        children:(flex
        space-x-4
        children:dark:bg-gray-800 children:bg-gray-200)
      "
    >
      <section>
        <div class="w-full"><main>1</main></div>
      </section>
      <section>
        <div v-for="main in 2" :key="main" class="w-1/2"><main>2</main></div>
      </section>
      <section>
        <div v-for="main in 3" :key="main" class="w-1/3"><main>3</main></div>
      </section>
      <section>
        <div v-for="main in 4" :key="main" class="w-1/4"><main>4</main></div>
      </section>
      <section>
        <div v-for="main in 5" :key="main" class="w-1/5"><main>5</main></div>
      </section>
      <section>
        <div v-for="main in 6" :key="main" class="w-1/6"><main>6</main></div>
      </section>
      <section>
        <div v-for="main in 8" :key="main" class="w-1/8"><main>8</main></div>
      </section>
    </div>

    <ul>
      <li v-for="item in 10" :key="item">abcdefg</li>
    </ul>
  </section>
</template>

<script setup>
useHead({
  title: '首页',
  meta: [{ name: 'description', content: '网站描述' }],
});
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: Home
meta:
  layout: default
</route>
