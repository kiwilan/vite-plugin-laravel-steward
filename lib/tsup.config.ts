import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'vite-plugin-laravel-steward',
  entry: {
    'index': 'src/index.ts',
    // 'style/index': 'src/style.ts',
    'tiptap/index': 'src/tiptap.ts',
  },
  format: ['cjs', 'iife'],
  dts: true,
  minify: false,
  treeshake: true,
  splitting: true,
})
