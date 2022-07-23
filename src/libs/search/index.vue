<template>
  <div
    ref="searchContainerRef"
    class="group relative rounded-xl border-white p-0.5 duration-500 hover:bg-red-100/40"
  >
    <div>
      <!-- search icon -->
      <m-svg-icon
        name="search"
        color="#707070"
        class="absolute top-[50%] left-2 h-1.5 w-1.5 translate-y-[-50%]"
      />

      <!-- input -->
      <input
        class="block h-[44px] w-full rounded-xl border border-zinc-100 bg-zinc-100 pl-4 text-sm font-semibold tracking-wide text-zinc-900 caret-zinc-400 outline-0 duration-500 focus:border-red-300 group-hover:border-zinc-200 group-hover:bg-white"
        type="text"
        placeholder="搜尋"
        v-model="inputValue"
        @keyup.enter="onSearch"
        @focus="onFocus"
        @blur="onBlur"
      />

      <!-- delete icon -->
      <m-svg-icon
        v-show="inputValue"
        name="input-delete"
        class="absolute top-[50%] right-9 h-1.5 w-1.5 translate-y-[-50%] cursor-pointer"
        @click="onClearClick"
      />

      <!-- 分隔線 -->
      <div
        class="absolute right-[62px] top-[50%] h-1.5 w-[1px] translate-y-[-50%] bg-zinc-200 opacity-0 duration-500 group-hover:opacity-100"
      />

      <!-- 搜尋按鈕 -->
      <m-button
        class="absolute right-1 top-[50%] translate-y-[-50%] rounded-full opacity-0 duration-500 group-hover:opacity-100"
        icon="search"
        iconColor="white"
        @click="onSearch"
      />
    </div>

    <!-- 下拉區塊 -->
    <transition name="slide">
      <div
        v-if="$slots.dropdown"
        v-show="isFocus"
        class="absolute left-0 top-[56px] z-20 max-h-[368px] w-full overflow-auto rounded border border-zinc-200 bg-white p-2 text-base duration-200 hover:shadow-2xl"
      >
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script>
const EMIT_UPDATE_MODELVALUE = 'update:modelValue'
const EMIT_SEARCH = 'search'
const EMIT_CLEAR = 'clear'
const EMIT_INPUT = 'input'
const EMIT_FOCUS = 'focus'
const EMIT_BLUR = 'blur'
</script>

<script setup>
import { ref, watch } from 'vue'
import { useVModel, onClickOutside } from '@vueuse/core'
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emits = defineEmits([
  EMIT_UPDATE_MODELVALUE,
  EMIT_SEARCH,
  EMIT_CLEAR,
  EMIT_INPUT,
  EMIT_FOCUS,
  EMIT_BLUR
])

const inputValue = useVModel(props)
const onSearch = () => emits('EMIT_SEARCH', inputValue.value)
const onClearClick = () => {
  inputValue.value = ''
  emits(EMIT_CLEAR, '')
}
watch(inputValue, (val) => {
  emits(EMIT_INPUT, val)
})

const isFocus = ref(false)
const toggleFocus = (status) => (isFocus.value = status)
const onFocus = () => {
  toggleFocus(true)
  emits(EMIT_FOCUS)
}

const onBlur = () => emits(EMIT_BLUR)

const searchContainerRef = ref(null)
onClickOutside(searchContainerRef, () => toggleFocus(false))
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
