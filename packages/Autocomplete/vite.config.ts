import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@aleksejdix/autocomplete',
      fileName: 'autocomplete'
    },
    rollupOptions: {
      external: ['vue', '@aleksejdix/focus', '@vueuse/core'],
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
