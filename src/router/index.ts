import {createRouter, createWebHistory} from 'vue-router'
// import GridPage from "../pages/grid/index.vue";
// import Layout from "../layout/index.vue";
const Layout = () => import('../layout/index.vue')
const GridPage = () => import('../pages/grid/index.vue')
const ChartPage = () => import('../pages/chart/index.vue')

const routes = [
    {path: '/', component: Layout},
    {path: '/grid',name:'GridPage', component: GridPage},
    {path: '/chart',name:'ChartPage', component: ChartPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
