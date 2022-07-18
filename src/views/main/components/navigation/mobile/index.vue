<template>
  <div class="sticky top-0 left-0 z-10 bg-white"></div>
  <ul class="relative flex overflow-hidden overflow-x-auto p-1">
    <!-- 漢堡按鈕 -->
    <li
      class="fixed top-0 right-[-1px] z-20 flex h-4 items-center bg-white px-1 shadow-l-white"
    >
      <m-svg-icon name="hamburger" class="h-1.5 w-1.5" />
    </li>

    <!-- 選單 -->
    <li
      class="shrink-0 px-1.5 py-0.5 text-xs text-zinc-600 duration-200 last:mr-4"
      v-for="category in categorys"
      :key="category.id"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  categorys: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped></style>
