<script setup>
useHead({
  title: '栅格系统',
  meta: [{ name: 'description', content: '网站描述' }],
});

const y = 0;
</script>
<template>
  <section>
    <div
      class="
        container
        text-center
        space-y-4
        children:(flex children:bg-gray-800 children:px-2)
      "
    >
      <main v-for="(m, a) in 13" :key="a">
        <div v-for="(n, b) in y++" :key="b" :class="'w-1/' + a">
          <span class="bg-gray-700 px-2 block">{{ y - 1 }}</span>
        </div>
      </main>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

<route lang="yaml">
name: Grids
meta:
  layout: default
</route>
