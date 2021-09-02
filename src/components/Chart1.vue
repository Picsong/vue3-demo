<template>
  <div ref="chartRef">
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, withDefaults, ref } from 'vue'
import * as echarts from 'echarts'
import useResize from '@/hooks/useResize'


interface IProps {
  option: any
}

const props = withDefaults(defineProps<IProps>(), {
  option: {
    title: {
      text: ' 配送工作监控',
      textStyle: {
        color: '#557FB6',
        lineHeight: 30,
      },
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      left: 10,
      bottom: 10,
      textStyle: {
        color: '#eee',
      },
    },
    // backgroundColor: '#11193B',
    color: ['#6854D7', '#272E50'],
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        label: {
          color: '#eee',
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 1048, name: '已完成配送单' },
          { value: 350, name: '未完成配送单' },
        ],
      },
    ],
  },
})
const chartRef = ref<HTMLElement | null>(null)
const chartInstance = ref<echarts.EChartsType | null>(null)

useResize(() => {
  if (chartInstance.value) {
    chartInstance.value.resize()
  }
}, 500)

onMounted(() => {
  if (chartRef.value) {
    chartInstance.value = echarts.init(chartRef.value, null, {
      renderer: 'svg',
      devicePixelRatio: 2,
    })
    chartInstance.value.setOption(props.option)
  }
})


</script>

<style scoped>

</style>
