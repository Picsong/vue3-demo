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
      text: '日清结算监控',
      subtext: '待结算总金额：8776567万元',
      subtextStyle: {
        align: 'center',
      },
      textStyle: {
        color: '#557FB6',
        lineHeight: 30,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#333',
        },
      },
    },
    yAxis: {
      type: 'category',
      data: ['已消耗未日清', '已日清未结算', '已结算未开票', '已开票未核对'],
    },
    series: [
      {
        type: 'bar',
        data: [18203, 23489, 29034, 104970],
      },
    ],
  },
})
const chartRef = ref<HTMLElement | null>(null)
const chartInstance = ref<echarts.EChartsType | null>(null)

useResize(()=>{
  if(chartInstance.value){
    chartInstance.value.resize()
  }
},500)

onMounted(() => {
  if (chartRef.value) {
    chartInstance.value = echarts.init(chartRef.value)
    chartInstance.value.setOption(props.option)
  }
})

</script>

<style scoped>

</style>
