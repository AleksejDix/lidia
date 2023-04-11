import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@aleksejdix/accordion',
      fileName: 'accordion'
    },
    rollupOptions: {
      external: ['vue', 'pinia', '@aleksejdix/focus', '@aleksejdix/disclosure'],
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
