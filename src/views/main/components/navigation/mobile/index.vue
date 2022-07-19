<template>
  <div class="sticky top-0 left-0 z-10 bg-white"></div>
  <ul ref="ulRef" class="relative flex overflow-hidden overflow-x-auto p-1">
    <!-- active 滑塊 -->
    <li
      ref="activeSliderRef"
      :style="sliderStyle"
      class="absolute z-[-1] h-[22px] rounded-lg bg-zinc-900 duration-200"
    />

    <!-- 漢堡按鈕 -->
    <li
      class="fixed top-0 right-[-1px] z-20 flex h-4 items-center bg-white px-1 shadow-l-white"
    >
      <m-svg-icon name="hamburger" class="h-1.5 w-1.5" />
    </li>

    <!-- 選單 -->
    <li
      v-for="(category, index) in categorys"
      :key="category.id"
      class="shrink-0 px-1.5 py-0.5 text-xs text-zinc-600 duration-200 last:mr-4"
      :class="{ 'text-zinc-100': currentActiveIndex === index }"
      :ref="setItemRef"
      @click="updateActive(index)"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'

defineProps({
  categorys: {
    type: Array,
    default: () => []
  }
})

const ulRef = ref(null)
let itemRefs = []
const currentActiveIndex = ref(0)
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})

// 透過 useScroll 取得 ulTarget 滾動距離
const { x: ulScrollLeft } = useScroll(ulRef)

const setItemRef = (el) => {
  if (el) itemRefs.push(el)
}

const updateActive = (index) => (currentActiveIndex.value = index)

const getRectByIndex = (index) => {
  const targetItem = itemRefs[index]
  if (!targetItem) return
  return targetItem?.getBoundingClientRect()
}

const updateSliderStyleByIndex = (index) => {
  const { left, width } = getRectByIndex(index)

  // 偏移位置 = ul left 滾動位置 + 當前元素的 left - ul padding 距離
  const offset = ulScrollLeft.value + left - 10
  sliderStyle.value = {
    transform: `translateX(${offset}px)`,
    width: `${width}px`
  }
}

watch(currentActiveIndex, (index) => {
  updateSliderStyleByIndex(index)
})

// 數據改變之後 dom 變化之前重置 setItemRef, 避免數據改變 itemRefs 又一直執行 push 疊加導致重複
onBeforeUpdate(() => (itemRefs = []))
</script>

<style lang="scss" scoped></style>
