<template>
  <ul
    class="sticky top-0 left-0 z-10 flex overflow-hidden overflow-x-auto bg-white p-1"
  >
    <li
      class="shrink-0 px-1.5 py-0.5 text-xs text-zinc-600 duration-200"
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
