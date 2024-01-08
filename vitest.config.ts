import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    resolve:{
        alias:{
          '@': path.resolve(__dirname, './src'),
          '~': path.resolve(__dirname, './src'),
        }
      },
    plugins: [
        vue(),
    ],
    test: {
        include: ['tests/**/*.test.ts'],
        environment: 'happy-dom'
    }
})
