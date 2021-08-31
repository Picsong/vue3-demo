export default function useDebounce(callback, ms, immediate) {
  let timer: number | null = null
  return function (...args) {
    clearTimeout(timer)

    if (immediate) {
      immediate = false
      callback.apply(this, args)
    }

    timer = setTimeout(() => {
      callback.apply(this, args)
      timer = null
    }, ms || 500)
  }
}
