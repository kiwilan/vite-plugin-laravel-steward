#!/bin/bash

rm ~/kiwilan-vite-plugin-laravel-steward-0.0.*.tgz
pnpm build
npm pack --pack-destination ~

# In project, add
# `"@kiwilan/vite-plugin-laravel-steward": "file:~/kiwilan-vite-plugin-laravel-steward-0.0.136.tgz",`
# ```
# pnpm add @kiwilan/vite-plugin-laravel-steward@file:~/kiwilan-vite-plugin-laravel-steward-0.0.136.tgz
# ```
