import { PC_DIVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

export function isMobile(pcWidth = PC_DIVICE_WIDTH) {
  return width.value < pcWidth
}
