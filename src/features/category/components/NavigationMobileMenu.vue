<template>
  <div class="flex h-[80vh] flex-col py-2">
    <h2 class="mb-2 px-1 text-xl font-bold text-zinc-900 dark:text-zinc-200">
      所有分類
    </h2>
    <ul class="overflow-y-scroll">
      <li
        v-for="(item, index) in categoryStore.categorys"
        :key="item.id"
        @click="$emit('onItemClick', index)"
        class="px-1 py-1.5 text-lg text-zinc-900 duration-100 active:bg-zinc-100 dark:text-zinc-300 dark:active:bg-zinc-900"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCategory } from '../storeCategory'
const categoryStore = useCategory()

defineEmits(['onItemClick'])
</script>

<style lang="scss" scoped></style>
