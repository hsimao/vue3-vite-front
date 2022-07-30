<template>
  <m-popover class="flex-items-center" placement="bottom-left">
    <template #reference>
      <div
        class="relative flex shrink-0 cursor-pointer items-center rounded-sm p-0.5 outline-none duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <!-- 頭像 -->
        <img
          class="h-3 w-3 rounded-sm object-cover"
          src="data:image/jpeg;base64,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"
          alt="avatar"
        />

        <!-- 下箭頭 -->
        <m-svg-icon
          name="down-arrow"
          extendClass="fill-zinc-900"
          class="ml-0.5 h-1.5 w-1.5 dark:fill-zinc-300"
        />

        <!-- vip icon -->
        <m-svg-icon
          name="vip"
          extendClass="fill-zinc-900"
          class="absolute right-[14px] bottom-0 h-1.5 w-1.5"
        />
      </div>
    </template>

    <!-- content -->
    <div class="w-[140px] overflow-hidden">
      <div
        v-for="menu in menuList"
        :key="menu.id"
        class="items-cnter flex cursor-pointer rounded p-1 hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
      >
        <m-svg-icon
          :name="menu.icon"
          extendClass="fill-zinc-900 dark:fill-zinc-300"
          class="mr-1 h-1.5 w-1.5"
        />

        <span class="text-sm text-zinc-800 dark:text-zinc-300">
          {{ menu.title }}
        </span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
const menuList = [
  {
    id: 0,
    title: '個人資料',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: 1,
    title: '升級 VIP',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: 2,
    title: '退出登入',
    icon: 'logout',
    path: ''
  }
]
</script>

<style lang="scss" scoped></style>
