import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('../layout/index.vue')
const MapPage = () => import('../pages/map/index.vue')
const GridPage = () => import('../pages/grid/index.vue')
const ChartPage = () => import('../pages/chart/index.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', component: Layout },
  { path: '/map', name: 'MapPage', component: MapPage },
  { path: '/grid', name: 'GridPage', component: GridPage },
  { path: '/chart', name: 'ChartPage', component: ChartPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
