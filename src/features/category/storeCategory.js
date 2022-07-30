import { defineStore } from 'pinia'
import { CATEGORY_DEFAULT_DATA } from './constants'
import { getCategory } from '@/api/category'
import usePromise from '@/composables/usePromise'

export const useCategory = defineStore('category', {
  state: () => ({
    categorys: CATEGORY_DEFAULT_DATA
  }),
  actions: {
    async fetchCategory() {
      const { results, createPromise } = usePromise(getCategory)
      await createPromise()
      if (results.value) {
        this.categorys = results.value.categorys
      }
    }
  },
  persist: true
})
