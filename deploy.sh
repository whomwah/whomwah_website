#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

rm -rf ../whomwah.github.com/assets/
cp -R dist/ ../whomwah.github.com/
