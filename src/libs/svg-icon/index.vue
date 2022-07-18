<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :class="extendClass" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  // 注入 svg fill
  color: {
    type: String
  },
  // 接收 tailwind class 來自訂 svg 樣式
  extendClass: {
    type: String
  }
})

// 對應 vite-plugin-svg-icons 配置的 symbolId 格式
const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped></style>
