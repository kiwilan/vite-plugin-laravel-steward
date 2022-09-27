#!/bin/bash

rm ~/kiwilan-vite-plugin-laravel-steward-0.0.*.tgz
cd lib
pnpm build
npm pack --pack-destination ~
cd ..
