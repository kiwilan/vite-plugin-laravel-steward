const fs = require('fs')

const DEFAULT_OPTIONS = {
  outputDir: './public/vendor/js',
}

const colorMode = (options = {}) => {
  return {
    name: 'vite-color-mode',
    async buildStart() {
      const opts = Object.assign({}, DEFAULT_OPTIONS, options)

      const pathColorMode = 'vendor/kiwilan/laravel-steward/resources/js/color-mode.js'
      const path = process.cwd()
      const fullPath = `${path}/${pathColorMode}`

      await fs.promises.mkdir(opts.outputDir, { recursive: true }).catch(console.error)

      fs.copyFile(fullPath, `${opts.outputDir}/color-mode.js`, (err) => {
        if (err)
          throw err
      })
    },
  }
}

export default colorMode
