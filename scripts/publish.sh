#!/usr/bin/bash

npm run build
cp ../package.json ../dist
cp ../README.md ../dist
npm publish dist

