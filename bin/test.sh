#!/bin/bash

echo "Build package"
cd lib
rm ~/kiwilan-vite-plugin-laravel-steward-0.0.*.tgz -f
pnpm build
npm pack --pack-destination ~
cd ..

echo "Add package to test"
cd test && pnpm remove @kiwilan/vite-plugin-laravel-steward
pnpm add @kiwilan/vite-plugin-laravel-steward@file:~/kiwilan-vite-plugin-laravel-steward-0.0.136.tgz
cd ..
pnpm dev
