<template>
  <button
    class="flex items-center justify-center rounded text-center text-sm duration-150"
    :class="[
      BUTTON_TYPE[type],
      BUTTON_SIZE[sizeKey].button,
      {
        'active:scale-105': isActiveAnim
      }
    ]"
    @click.stop="handleClick"
  >
    <!-- loading -->
    <m-svg-icon
      v-if="loading"
      name="loading"
      class="mr-1 h-2 w-2 animate-spin"
    />

    <!-- icon 按鈕 -->
    <m-svg-icon
      v-if="icon"
      :name="icon"
      class="m-auto"
      :class="BUTTON_SIZE[sizeKey].icon"
      :color="iconColor"
      :extendClass="iconClass"
    />

    <!-- 文字按鈕 -->
    <slot v-else />
  </button>
</template>

<script>
const EMITS_CLICK = 'click'

// type: 按鈕風格
const BUTTON_TYPE = {
  base: `text-white bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-800 
         dark:bg-zinc-900 dark:hover:bg-zinc-700 dark:active:bg-zinc-700`,
  primary: `text-white bg-primary hover:bg-hover-primary active:bg-primary 
            dark:hover:bg-zinc-700 dark:active:bg-zinc-700 dark:bg-zinc-900`,
  info: `text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200
          dark:text-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600`
}

// size: 按鈕大小, 需區分文字、icon 按鈕
const BUTTON_SIZE = {
  // 文字按鈕
  default: {
    button: 'w-8 h-4 text-base',
    icon: ''
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: ''
  },
  // icon 按鈕
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  'icon-small': {
    button: 'w-3 h-3',
    icon: 'w-1.5 h-1.5'
  }
}
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 圖標
  icon: String,
  // 顏色
  iconColor: String,
  // class (tailwind)
  iconClass: String,
  // 按鈕樣式
  type: {
    type: String,
    default: 'primary',
    validator(val) {
      const keys = Object.keys(BUTTON_TYPE)
      const valid = keys.includes(val)
      if (!valid) {
        throw new Error(`type 必須是 ${keys.join('、 ')} 中的其中一個`)
      }
      return true
    }
  },
  // 大小風格
  size: {
    type: String,
    default: 'default',
    validator(val) {
      const keys = Object.keys(BUTTON_SIZE).filter(
        (key) => !key.includes('icon')
      )
      const valid = keys.includes(val)
      if (!valid) {
        throw new Error(`size 必須是 ${keys.join('、 ')} 中的其中一個`)
      }
      return true
    }
  },
  // 點擊時, 是否需要動畫
  isActiveAnim: {
    type: Boolean,
    default: true
  },
  // loading
  loading: {
    type: Boolean,
    default: false
  }
})

const sizeKey = computed(() => (props.icon ? `icon-${props.size}` : props.size))

const emits = defineEmits([EMITS_CLICK])

const handleClick = () => {
  if (props.loading) return
  emits(EMITS_CLICK)
}
</script>

<style lang="scss" scoped></style>
