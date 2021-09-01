<template>
  <div ref="scaleWrap" class="scale-wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, defineProps, withDefaults, onMounted, onUnmounted } from 'vue'
import useDebounce from '@/hooks/useDebounce'

const props = withDefaults(defineProps<{
  designWidth: number
  designHeight: number
}>(), {
  designWidth: 1920,
  designHeight: 1080,
})

const scaleWrap = ref<HTMLElement | null>(null)
const scale = ref<number>(1)
const realRect = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
})
const getScale = () => {
  if (scaleWrap.value) {
    realRect.width = scaleWrap.value.offsetWidth
    realRect.height = scaleWrap.value.offsetHeight
  }
  const w = realRect.width / props.designWidth
  const h = realRect.height / props.designHeight
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: scale(v-bind('scale')) translate3d(0, 0, 0);
  // 解决过度闪动
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all 0.3s ease-in-out;
}
</style>
