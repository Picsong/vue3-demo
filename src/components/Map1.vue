<template>
  <div ref="cdMap"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import gzData from '../assets/cd-map.json'
import { defineProps, ref, onMounted } from 'vue'

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

onMounted(() => {
  echarts.registerMap('成都', gzData as any)
  if (cdMap.value) {
    chartInstance.value = echarts.init(cdMap.value)
    chartInstance.value.setOption(props.option)
  }
})
</script>

<style scoped>

</style>
