import { createApp } from 'vue'
import 'normalize.css'
import AppGrid from '@/layout/components/AppGrid.vue'
import ScreenAdapter from '@/layout/components/ScreenAdapter.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('AppGrid',AppGrid)
app.component('ScreenAdapter',ScreenAdapter)
app.use(router)
app.mount('#app')
