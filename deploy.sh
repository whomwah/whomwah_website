#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

cp -R dist/ ../whomwah.github.com/
# copy
