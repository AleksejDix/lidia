import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@aleksejdix/disclosure',
      fileName: 'disclosure'
    },
    rollupOptions: {
      external: ['vue', 'pinia', '@aleksejdix/focus', '@aleksejdix/accordion'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})