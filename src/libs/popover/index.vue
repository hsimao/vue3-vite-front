<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <div ref="referenceRef">
      <!-- 具名插槽: 觸發彈層的區塊 -->
      <slot name="reference" />
    </div>

    <transition name="slide">
      <div
        ref="contentRef"
        v-show="isVisible"
        class="absolute z-20 rounded-md border bg-white p-1"
        :style="contentStyle"
      >
        <!-- 匿名插槽: 彈出層內容 -->
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
// 左上
const TOP_LEFT = 'top-left'
// 右上
const TOP_RIGHT = 'top-right'
// 左下
const BOTTOM_LEFT = 'bottom-left'
// 右下
const BOTTOM_RIGHT = 'bottom-right'

const placementEnum = [TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT]
</script>

<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  placement: {
    type: String,
    default: BOTTOM_LEFT,
    validator(val) {
      const result = placementEnum.includes(val)
      if (!result) {
        throw new Error(
          `placement 必須是 ${placementEnum.join('、 ', '')} 中的其中一個`
        )
      }
      return result
    }
  }
})

const isVisible = ref(false)
const onMouseenter = () => {
  isVisible.value = true
}
const onMouseleave = () => {
  isVisible.value = false
}

// 計算尺寸
const referenceRef = ref(null)
const contentRef = ref(null)
const useElementSize = (target) => {
  if (!target) return {}
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}

// 彈層樣式
const contentStyle = ref({
  top: 0,
  left: 0
})

// 依據 placement 計算彈層位置
const handleCalcContentPosition = () => {
  const { width: contentWidth, height: contentHeight } = useElementSize(
    contentRef.value
  )
  const { width: referenceWidth, height: referenceHeight } = useElementSize(
    referenceRef.value
  )

  switch (props.placement) {
    // 左上
    case TOP_LEFT:
      contentStyle.value.top = 0
      contentStyle.value.left = -contentWidth + 'px'
      break
    // 右上
    case TOP_RIGHT:
      contentStyle.value.top = 0
      contentStyle.value.left = referenceWidth + 'px'
      break
    // 左下
    case BOTTOM_LEFT:
      contentStyle.value.top = referenceHeight + 'px'
      contentStyle.value.left = -contentWidth + 'px'
      break
    // 右下
    case BOTTOM_RIGHT:
      contentStyle.value.top = referenceHeight + 'px'
      contentStyle.value.left = referenceWidth + 'px'
      break
  }
}
// 當可展示彈層時再進行計算 content 樣式位置
watch(isVisible, async (val) => {
  if (!val) return
  await nextTick()
  handleCalcContentPosition()
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
