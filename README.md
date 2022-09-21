# vite-plugin-laravel-steward

A Vite plugin for Laravel Steward.

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
