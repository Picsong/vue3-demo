<template>
  <ScreenAdapter>
    <div class="scale-wrap" @click="enterFullScreen" @dblclick="exitFullScreen">内容</div>
  </ScreenAdapter>
</template>

<script lang="ts" setup>

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
