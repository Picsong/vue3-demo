<template>
  <div :style="{display:isGridItem?'':'grid',...gridAttr}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, CSSProperties } from 'vue'

export default defineComponent({
  name: 'Grid',
  props: {
    gridAttr: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    isGridItem: Boolean,
  },
})
</script>
