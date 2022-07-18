<template>
  <div>mobile navigation</div>
  loading: {{ loading }}
  <div v-if="loading">Loading...</div>
  <ul v-else>
    <li v-for="category in categoryList" :key="category.id">
      {{ category.name }}
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { getCategory } from '@/api/category'
import usePromise from '@/composables/usePromise'

const { results, loading, createPromise } = usePromise(getCategory)

const categoryList = computed(() => {
  return results.value?.data?.data?.categorys || []
})

onMounted(async () => {
  createPromise()
})
</script>

<style lang="scss" scoped></style>
