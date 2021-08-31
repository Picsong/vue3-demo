<template>
  <div class="scale-wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, withDefaults, onMounted, onUnmounted } from 'vue'
import useDebounce from '@/hooks/useDebounce.ts'

const props = withDefaults(defineProps<{
  width: number
  height: number
}>(), {
  width: 1920,
  height: 1080,
})

const scale = ref<number>(1)

const getScale = () => {
  const w = window.innerWidth / props.width
  const h = window.innerHeight / props.height
  return w < h ? w : h
}

const setScale = useDebounce(function () {
  scale.value = getScale()
})

onMounted(() => {
  setScale()
  window.addEventListener('resize', setScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', setScale)
})

</script>

<style lang="scss" scoped>
.scale-wrap {
  transition: 0.3s;
  transform: scale(v-bind('scale'));
}
</style>
