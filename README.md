# vite-plugin-laravel-steward

[![npm](https://img.shields.io/npm/v/@kiwilan/vite-plugin-laravel-steward.svg?style=flat-square&color=CB3837&logo=npm&logoColor=ffffff&label=npm)](https://www.npmjs.com/package/@kiwilan/vite-plugin-laravel-steward)
[![publish](https://img.shields.io/github/workflow/status/kiwilan/vite-plugin-laravel-steward/publish?style=flat-square&logo=github&logoColor=ffffff&label=publish)](https://github.com/kiwilan/vite-plugin-laravel-steward/actions)

A Vite plugin for [Laravel Steward](https://github.com/kiwilan/laravel-steward).

## Installation

```bash
npm install --save-dev @kiwilan/vite-plugin-laravel-steward
# OR
pnpm add @kiwilan/vite-plugin-laravel-steward -D
```

## Usage

```js
import { defineConfig } from 'vite'
import { steward } from '@kiwilan/vite-plugin-laravel-steward'

export default defineConfig({
  plugins: [
    steward({
      // Options
    })
  ]
})
```

## Local test

With `link`

```bash
cd lib
npm link
cd ..
cd test
pnpm link @kiwilan/vite-plugin-laravel-steward
```

With `tgz`

```bash
# shortcut
pnpm package
cd test && pnpm remove @kiwilan/vite-plugin-laravel-steward
pnpm add @kiwilan/vite-plugin-laravel-steward@file:~/kiwilan-vite-plugin-laravel-steward-0.0.136.tgz
cd ..

# manually
rm ~/kiwilan-vite-plugin-laravel-steward-0.0.*.tgz
cd lib
pnpm build
npm pack --pack-destination ~
cd ..
cd test
pnpm add @kiwilan/vite-plugin-laravel-steward@file:~/kiwilan-vite-plugin-laravel-steward-0.0.136.tgz
```

## Docs

- <https://blog.logrocket.com/managing-full-stack-monorepo-pnpm>
