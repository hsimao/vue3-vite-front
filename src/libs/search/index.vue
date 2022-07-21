<template>
  <div
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
      />

      <!-- delete icon -->
      <m-svg-icon
        name="input-delete"
        class="absolute top-[50%] right-9 h-1.5 w-1.5 translate-y-[-50%] cursor-pointer"
      />

      <!-- 分隔線 -->
      <div
        class="absolute right-[62px] top-[50%] h-1.5 w-[1px] translate-y-[-50%] bg-zinc-200 opacity-0 duration-500 group-hover:opacity-100"
      />

      <!-- TODO: 搜尋按鈕 (通用組件) -->
    </div>

    <!-- 下拉區塊 -->
    <transition name="slide">
      <div
        class="absolute left-0 top-[56px] z-20 max-h-[368px] w-full overflow-auto rounded border border-zinc-200 bg-white p-2 text-base duration-200 hover:shadow-2xl"
      >
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script setup></script>

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
