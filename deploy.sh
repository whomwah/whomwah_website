#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

rm -rf ../whomwah.github.com/
cp -R dist/ ../whomwah.github.com/
# copy
