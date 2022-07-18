<template>
  <div><app-navigation :categorys="categorys" /></div>
</template>

<script setup>
import AppNavigation from './components/navigation/index.vue'
import { onMounted, computed } from 'vue'
import { getCategory } from '@/api/category'
import usePromise from '@/composables/usePromise'

// fetch categorys logic
const { results, createPromise } = usePromise(getCategory)
const categorys = computed(() => results.value?.categorys || [])
onMounted(async () => createPromise())
</script>

<style lang="scss" scoped></style>
