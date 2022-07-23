<template>
  <div class="w-full">
    <m-search v-model="searchValue">
      <template #dropdown>
        <div>dropdown</div>
      </template>
    </m-search>
    <p>{{ searchValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchValue = ref('')
</script>

<style lang="scss" scoped></style>
