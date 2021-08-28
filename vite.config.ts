import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base:'./',
  plugins: [vue()],
  resolve:{
    alias:{
      // 两种不同写法，第一种需要安装@types/node
      '@':path.resolve(__dirname,'src'),
      '@components':'/src/components',
    },
  },
})
