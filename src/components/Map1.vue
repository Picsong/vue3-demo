<template>
  <div ref="cdMap"></div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import gzData from '../assets/cd-map.json'
import useResize from '@/hooks/useResize'

const props = defineProps({
  option: {
    type: Object,
    default: () => ({
      tooltip: {
        trigger: 'item',
      },
      title: {
        text: '成都地图',
        textStyle: {
          color: '#557FB6',
          lineHeight: 30,
        },
        x: 'center',
      },
      geo: {
        map: '成都',
        label: {},
        roam: true,
        itemStyle: {},
      },
      series: [{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
          brushType: 'stroke',
        },
        // symbolSize(val, params) {
        //   return 8;
        // },
        data: [],
      }],
    }),
  },
})
const cdMap = ref<HTMLElement | null>(null)
const chartInstance = ref<echarts.EChartsType | null>(null)
useResize(() => {
  if (chartInstance.value) {
    chartInstance.value.resize()
    // setTimeout(()=>{
    // },100)
  }
}, 500)
onMounted(() => {
  echarts.registerMap('成都', gzData as any)
  if (cdMap.value) {
    chartInstance.value = echarts.init(cdMap.value, null, {
      renderer: 'svg',
      devicePixelRatio: 2,
    })
    chartInstance.value.setOption(props.option)
  }
})
</script>

<style scoped>

</style>
