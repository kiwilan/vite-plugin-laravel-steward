# vite-plugin-laravel-steward

[![vite-plugin-laravel-steward](https://img.shields.io/npm/v/@kiwilan/vite-plugin-laravel-steward.svg?style=flat-square&color=CB3837&logo=npm&logoColor=ffffff&label=vite-plugin-laravel-steward)](https://www.npmjs.com/package/@kiwilan/vite-plugin-laravel-steward)
[![publish](https://img.shields.io/github/workflow/status/kiwilan/vite-plugin-laravel-steward/publish?style=flat-square&color=CB3837&logo=github&logoColor=ffffff&label=Publish)](https://github.com/kiwilan/vite-plugin-laravel-steward/actions)

A Vite plugin for [Laravel Steward](https://github.com/kiwilan/laravel-steward).

## Installation

```bash
npm install --save-dev vite-plugin-laravel-steward
# OR
pnpm add vite-plugin-laravel-steward -D
```

## Usage

```js
import { defineConfig } from 'vite'
import steward from 'vite-plugin-laravel-steward'

export default defineConfig({
  plugins: [
    steward({
      // Options
    })
  ]
})
```
