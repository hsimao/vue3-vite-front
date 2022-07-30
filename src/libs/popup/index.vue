<template>
  <div>
    <teleport to="body">
      <!-- 遮罩 -->
      <transition name="fade">
        <div
          v-if="isVisable"
          class="fixed top-0 left-0 z-40 h-screen w-screen bg-zinc-900/80 dark:bg-zinc-800"
          @click="isVisable = false"
        />
      </transition>
      <!-- 內容 -->
      <transition name="popup-down-up">
        <div
          v-if="isVisable"
          v-bind="$attrs"
          class="fixed bottom-0 z-50 w-screen bg-white"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useScrollLock, useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

// 透過 useVModel 接收 props, 返回一個響應數據, 當修改值時會自動觸發 emit 事件
const isVisable = useVModel(props)

// lock scroll logic
const isLocked = useScrollLock(document.body)
watch(
  isVisable,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

// 準備進入, 離開完成
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}

// 準備進入, 離開完成
.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
