<template>
  <div class="container mt-8">
    <h1 class="leading-8">Page not Found</h1>
    <h3 class="">页面没有找到哦！</h3>
    <div class="mt-8" to="" @click="$router.back(-1)">返回上一页</div>
  </div>
</template>

<script setup>
useHead({
  title: '页面没有找到！',
  meta: [{ name: 'description', content: '抱歉！您要访问的页面没有找到！' }],
});
</script>
<style></style>

<route lang="yaml">
name: PageNotFound
meta:
  layout: 404
</route>
