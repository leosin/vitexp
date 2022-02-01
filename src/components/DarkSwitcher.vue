<template>
  <button class="btn" @click="toggleDark">
    <icon-carbon-moon v-if="isDark" />
    <icon-carbon-sun v-else />
  </button>
</template>

<script setup>
import IconCarbonMoon from '~icons/carbon/moon';
import IconCarbonSun from '~icons/carbon/sun';

// 切换暗黑模式
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped></style>
