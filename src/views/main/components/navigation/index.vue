<template>
  <mobile-navigation
    v-if="isMobile()"
    :categorys="categoryStore.getCategorys"
  />
  <pc-navigation v-else />
</template>

<script setup>
import { isMobile } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
import pcNavigation from './pc/index.vue'
import { useCategory } from '@/store/category'

const categoryStore = useCategory()
categoryStore.fetchCategory()
</script>

<style lang="scss" scoped></style>
