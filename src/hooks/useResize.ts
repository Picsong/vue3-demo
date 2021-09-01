import { onMounted, onUnmounted } from 'vue'
import useDebounce from './useDebounce'

export default function (callback, ms) {
  const resize = useDebounce(callback, ms)

  onMounted(() => {
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })
}


