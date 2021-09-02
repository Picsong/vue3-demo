<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="[]">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  mounted() {
    console.log('App加载')
  },
})

</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

.base-style--four-border {
  background: linear-gradient(rgb(89, 134, 223), rgb(89, 134, 223)) left top/2px 20px no-repeat,
  linear-gradient(rgb(89, 134, 223), rgb(89, 134, 223)) left top/20px 2px no-repeat,
  linear-gradient(rgb(89, 134, 223), rgb(89, 134, 223)) right top/20px 2px no-repeat,
  linear-gradient(rgb(89, 134, 223), rgb(89, 134, 223)) right top/2px 20px no-repeat,
  linear-gradient(rgb(89, 134, 223), rgb(89, 134, 223)) right bottom/2px 20px no-repeat,
  linear-gradient(rgb(89, 134, 223), rgb(89, 134, 223)) right bottom/20px 2px no-repeat,
  linear-gradient(rgb(89, 134, 223), rgb(89, 134, 223)) left bottom/20px 2px no-repeat,
  linear-gradient(rgb(89, 134, 223), rgb(89, 134, 223)) left bottom/2px 20px no-repeat !important;
  /*
  left top/之后的是size
  也可以单独写出来
  background-size: 2px 20px, 20px 2px, 20px 2px, 2px 20px, 2px 20px, 20px 2px, 20px 2px, 2px 20px;
  */
}

</style>
