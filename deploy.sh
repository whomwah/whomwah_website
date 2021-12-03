#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'deploy'
git push -f github:whomwah/whomwah_website.git master:gh-pages

cd -
