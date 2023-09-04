#!/usr/bin/bash

rm -r ./dist
npm run build
cp package.json dist
cp README.md dist
npm publish dist

