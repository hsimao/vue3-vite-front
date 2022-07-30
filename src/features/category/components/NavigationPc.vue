<template>
  <div class="sticky top-0 left-0 z-10 w-full bg-white">
    <ul
      class="relative mx-auto flex w-[800px] flex-wrap justify-center overflow-x-auto overflow-y-hidden px-[10px] py-1 text-xs text-zinc-600 duration-300"
      :class="[isOpenCategory ? 'h-[206px]' : 'h-[56px]']"
    >
      <!-- 展示箭頭 -->
      <div
        class="cursor-pinter absolute right-1 bottom-1 z-20 cursor-pointer rounded p-1 duration-200 hover:bg-zinc-200"
        @click="toggleCategory"
      >
        <m-svg-icon
          :name="isOpenCategory ? 'fold' : 'unfold'"
          class="h-1 w-1"
          extendClass="fill-zinc-900"
        />
      </div>

      <!-- item -->
      <li
        v-for="item in categoryStore.categorys"
        :key="item.id"
        class="z-10 mr-1 mb-1 h-4 shrink-0 cursor-pointer rounded px-1.5 py-0 text-base font-bold leading-4 text-zinc-900 duration-200 hover:bg-zinc-200"
        :class="{
          'bg-zinc-200 text-zinc-900': currentCategory.id === item.id
        }"
        @click="onItemClick(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCategory } from '../storeCategory'
const categoryStore = useCategory()

categoryStore.fetchCategory()

const isOpenCategory = ref(false)
const toggleCategory = () => {
  isOpenCategory.value = !isOpenCategory.value
}

const currentCategory = ref(categoryStore.categorys[0])
const onItemClick = (category) => (currentCategory.value = category)
</script>

<style lang="scss" scoped></style>
