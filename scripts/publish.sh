#!/usr/bin/bash

rm -r ./dist
npm run build
cp package.json README.md ./dist
npm publish

