<template>
  <mobile-navigation v-if="isMobile()" />
  <pc-navigation v-else />
</template>

<script setup>
import { isMobile } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
import pcNavigation from './pc/index.vue'
</script>

<style lang="scss" scoped></style>
