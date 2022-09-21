import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'vite-plugin-laravel-steward',
  entryPoints: {
    index: 'src/index.ts',
    // tiptap: 'lib/tiptap.ts',
    // editor: 'lib/editor.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
})
