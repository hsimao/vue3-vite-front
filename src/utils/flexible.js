import { PC_DIVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

export function isMobile(pcWidth = PC_DIVICE_WIDTH) {
  return width.value < pcWidth
}

/*
 * 動態修改 rem 基準值, 最大 40px
 * 依據裝置寬度進行換算, 把計算出來的值放進 html 的 font-size
 */
export const initRem = (customSize) => {
  const MAX_FONT_SIZE = 40

  // 監聽 html document 解析完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')

    // 如果有接收到 customSize 參數, 直接套用不另外計算
    if (customSize && typeof customSize === 'number') {
      html.style.fontSize = customSize
      return
    }

    // 依據裝置寬度計算 fontSize, 最大不得超過 MAX_FONT_SIZE
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    html.style.fontSize = `${fontSize}px`
  })
}
