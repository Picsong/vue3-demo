<template>
  <AppGrid :grid-attr="gridAttr">
    <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr1">
      <RouterLink to="/chart">header</RouterLink>
    </AppGrid>
    <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr3">left</AppGrid>
    <AppGrid :grid-attr="gridItemAttr">
      <!--  grid九宫格 -->
      <AppGrid :grid-attr="gridAttr2">
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">1</AppGrid>
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">2</AppGrid>
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">3</AppGrid>
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">4</AppGrid>
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">5</AppGrid>
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">6</AppGrid>
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">7</AppGrid>
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">8</AppGrid>
        <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr9">9</AppGrid>
      </AppGrid>
    </AppGrid>
    <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr4">right</AppGrid>
    <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr2">footer</AppGrid>
  </AppGrid>
</template>

<script lang="ts">
import { defineComponent, CSSProperties } from 'vue'

import AppGrid from '../../layout/components/AppGrid.vue'

export default defineComponent({
  name: 'GridPage',
  components: {
    AppGrid,
  },
  data() {
    let gridAttr: CSSProperties = {
      width: '100%',
      height: '100%',
      gridTemplateColumns: '200px 1fr 200px',
      gridTemplateRows: '100px 1fr 100px',
      gridTemplateAreas: `
        'header header header'
        'left content right'
        'footer footer footer'`,
    }
    let gridAttr2: CSSProperties = {
      // grid九宫格
      display: 'inline-grid',
      gridTemplateColumns: '100px 100px 100px',
      gridTemplateRows: '100px 100px 100px',
      gap: '1px',
      backgroundColor: '#f40',
      border: '1px solid #f40',
    }
    let gridItemAttr: CSSProperties = {
      color: '#888',
      backgroundColor: '#333',
      placeItems: 'center',
    }
    let gridItemAttr1: CSSProperties = {
      // gridColumn: 'span 3',
      gridArea: 'header',
      backgroundColor: '#444',
    }
    let gridItemAttr2: CSSProperties = {
      // gridColumn: 'span 3',
      gridArea: 'footer',
      backgroundColor: '#555',
    }
    let gridItemAttr3: CSSProperties = {
      backgroundColor: '#666',
    }
    let gridItemAttr4: CSSProperties = {
      backgroundColor: '#777',
    }
    // grid九宫格
    let gridItemAttr9: CSSProperties = {
      backgroundColor: '#999',
      color:'#333',
    }
    return {
      gridAttr,
      gridAttr2,
      gridItemAttr,
      gridItemAttr1,
      gridItemAttr2,
      gridItemAttr3,
      gridItemAttr4,
      gridItemAttr9,
    }
  },
})
</script>

<style scoped>

</style>
