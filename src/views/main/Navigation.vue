<template>
  <navigation-mobile v-if="isMobile()" />
  <navigation-pc v-else />
</template>

<script setup>
import { NavigationMobile, NavigationPc } from '@/features/category'
import { isMobile } from '@/utils/flexible'
</script>
