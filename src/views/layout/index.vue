<template>
  <div class="h-screen">
    <app-header class="h-header" />
    <app-main class="h-main" />
    <floating />
  </div>
</template>

<script setup>
import appHeader from './components/app-header/index.vue'
import appMain from './components/app-main.vue'
import floating from './components/floating.vue'
</script>

<style lang="scss" scoped></style>
