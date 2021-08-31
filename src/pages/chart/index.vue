<template>
  <ScreenAdapter :width="1920" :height="1080">
    <div class="scale-wrap" @click="enterFullScreen" @dblclick="exitFullScreen">内容</div>
  </ScreenAdapter>
</template>

<script lang="ts" setup>
import ScreenAdapter from '@/layout/components/ScreenAdapter.vue'

const enterFullScreen = () => {
  document.documentElement.requestFullscreen()
}

const exitFullScreen = () => {
  document.exitFullscreen()
}

</script>

<style lang="scss" scoped>
.scale-wrap {
  background-color: #171c3c;
  color: #eee;
  cursor: pointer;
}
</style>
