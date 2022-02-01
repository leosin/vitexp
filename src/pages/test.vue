<template>
  <section class="">
    <h1>PC-Test</h1>
    <ul class="ml-4">
      <li v-for="(item, index) in result" :key="index" class="flex">
        <span class="mr-6 w-18">ID：{{ item.id }}</span>
        <span>标题：{{ item.title }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { request } from '~/modules/require.js';

//一些不懂的地方？

const result = ref(0); //1.这里ref后面括号里面必须要有值是吧？
// const result = reactive({}) 2.什么情况下才需要用reactive呢？

request('/todos')
  .then((res) => {
    result.value = res; //3.这句怎么解释
    console.log(res);
    console.log(result.value);
  })
  .catch((err) => {
    console.log(err);
  });

// For SEO
useHead({
  title: '测试页',
  meta: [{ name: 'description', content: '网站描述' }],
});
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: Test
meta:
  layout: default
</route>
