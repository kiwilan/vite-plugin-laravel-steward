import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'vite-plugin-laravel-steward',
  entryPoints: {
    index: 'src/index.ts',
    // tiptap: 'src/modules/tiptap/index.ts',
  },
  format: ['cjs'],
  outDir: 'lib/dist',
  dts: true,
  minify: true,
})
