<template>
  <m-popover placement="bottom-left">
    <!-- 具名插槽: 觸發彈層的區塊 -->
    <template #reference>
      <m-svg-icon
        :name="svgIconName"
        class="h-4 w-4 cursor-pointer rounded-sm p-1 outline-none duration-200 hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
        extendClass="fill-zinc-900 dark:fill-zinc-300"
      />
    </template>

    <!-- 匿名插槽: 彈出層內容 -->
    <div class="w-[140px] overflow-hidden">
      <div
        v-for="theme in themeList"
        :key="theme.id"
        class="flex cursor-pointer items-center rounded p-1 hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        @click="onItemClick(theme)"
      >
        <m-svg-icon
          :name="theme.icon"
          class="mr-1 h-1.5 w-1.5"
          extendClass="fill-zinc-900 dark:fill-zinc-300"
        />
        <span class="text-sm text-zinc-900 dark:text-zinc-300">{{
          theme.name
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '../constants'
import { useTheme } from '../storeTheme'
import { computed } from 'vue'

const themeStore = useTheme()

const themeList = [
  {
    id: 0,
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '極簡白'
  },
  {
    id: 0,
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '極夜黑'
  },
  {
    id: 0,
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟隨系統'
  }
]

const svgIconName = computed(() => {
  const findTheme = themeList.find((item) => item.type === themeStore.themeType)
  return findTheme?.icon
})

const onItemClick = (theme) => {
  themeStore.changeThemeType(theme.type)
}
</script>

<style lang="scss" scoped></style>
