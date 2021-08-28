<template>
  <div @click="link2grid">123</div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const link2grid = () => {
  console.log(route)
  router.push({
    path: '/grid',
  })
}
</script>

<style scoped>

</style>
