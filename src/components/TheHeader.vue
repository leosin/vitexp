<template>
  <header class="bg-white dark:(bg-dark-900)">
    <section
      class="
        container
        px-4
        flex
        justify-between
        items-center
        dark:(bg-dark-800
        )
      "
    >
      <div class="logo">VitExp</div>
      <nav class="flex space-x-6 children:(text-20px py-4)">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link :to="{ name: 'Test' }">Test</router-link>
        <DarkSwitcher />
      </nav>
    </section>
  </header>
</template>

<script setup></script>
<style lang="scss" scoped></style>
