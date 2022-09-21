import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'steward',
  entryPoints: {
    vite: 'src/vite.ts',
    tiptap: 'lib/tiptap.ts',
    // editor: 'lib/editor.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
})
