<template>
  <AppGrid :grid-attr="gridAttr">
    <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr1">
      <RouterLink to="/chart">header</RouterLink>
    </AppGrid>
    <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr3">left</AppGrid>
    <AppGrid :grid-attr="gridItemAttr" @click="showMap">
      <Map />
    </AppGrid>
    <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr4">right</AppGrid>
    <AppGrid :is-grid-item="true" :grid-attr="gridItemAttr2">footer</AppGrid>
  </AppGrid>
</template>

<script lang="ts">
import { defineComponent, CSSProperties } from 'vue'
import Map from '@/pages/map/index.vue'

export default defineComponent({
  name: 'Layout',
  components:{ Map },
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
    let gridItemAttr: CSSProperties = {
      color: '#888',
      backgroundColor: '#333',
      cursor:'pointer',
      placeItems: 'center',
      position:'relative',
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

    return {
      gridAttr,
      gridItemAttr,
      gridItemAttr1,
      gridItemAttr2,
      gridItemAttr3,
      gridItemAttr4,
    }
  },
  methods:{
    showMap(){
      this.$router.push({
        name:'MapPage',
      })
    },
  },
})
</script>

<style scoped>

</style>
