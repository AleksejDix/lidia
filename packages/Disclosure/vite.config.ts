import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@aleksejdix/disclosure',
      fileName: 'disclosure'
    },
    rollupOptions: {
      external: ['vue', 'pinia', '@aleksejdix/focus', 'uuid', '@aleksejdix/accordion'],
      output: {
        globals: {
          vue: 'Vue'
        }
      },
      plugins: [
        visualizer({
          filename: 'report.html',
          open: true
        }) as PluginOption
      ]
    }
  }
})
