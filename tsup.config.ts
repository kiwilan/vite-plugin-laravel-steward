import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'vite-plugin-laravel-steward',
  entry: {
    'index': 'src/index.ts',
    'style': 'src/style.ts',
    'tiptap/index': 'src/tiptap.ts',
  },
  format: ['cjs', 'iife'],
  outDir: 'lib/dist',
  dts: true,
  minify: false,
  treeshake: true,
  splitting: true,
})
