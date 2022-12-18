#!/bin/bash

rm -f ~/kiwilan-vite-plugin-laravel-steward-*.tgz
cd lib
pnpm build
npm pack --pack-destination ~
cd ..
