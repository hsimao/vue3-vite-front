import { defineStore } from 'pinia'
import { THEME_LIGHT } from './constants'

export const useTheme = defineStore('theme', {
  state: () => ({
    themeType: THEME_LIGHT
  }),
  actions: {
    changeThemeType(newTheme) {
      this.themeType = newTheme
    }
  },
  persist: true
})
