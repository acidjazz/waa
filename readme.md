<p align="center">
  <img src="https://github.com/acidjazz/waa/blob/master/static/icons/android-chrome-512x512.png" width="300" alt="jared stanley"/>
</p>

> We Are Apartments

[![GitHub issues](https://img.shields.io/github/issues/acidjazz/waa.svg)](https://github.com/acidjazz/waa/issues)
[![CircleCI](https://img.shields.io/circleci/project/github/acidjazz/waa.svg)](https://circleci.com/gh/acidjazz/waa/)
[![aeonian status](https://img.shields.io/badge/%C3%A6onian-deployed-green.svg)](https://github.com/acidjazz/aeonian)
<a href="https://github.com/nuxt/nuxt.js/"><img src="https://img.shields.io/badge/nuxt.js-v2.8.1-800080.svg?style=flat-square" alt=""/></a>

## Branch Status

master | staging
--- | ---
[![CircleCI](https://circleci.com/gh/acidjazz/waa/tree/master.svg?style=shield)](https://circleci.com/gh/acidjazz/waa/tree/master) | [![CircleCI](https://circleci.com/gh/acidjazz/waa/tree/staging.svg?style=shield)](https://circleci.com/gh/acidjazz/waa/tree/staging)

## Local Build Setup
* Clone this repository 
```bash
git clone git@github.com:acidjazz/waa.git
```
* Install dependencies
```bash
yarn install
```
* Generate routes and lever job listings
```bash
yarn cash
```
* Serve your dev environment with [HMR](https://webpack.github.io/docs/hot-module-replacement.html) at http://localhost:3000
```bash
yarn dev
```

## Deployment
Continuous Deployment is setup using the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) workflow with [aeonian](https://github.com/acidjazz/aeonian) via [Circle-CI](https://circleci.com/gh/acidjazz/waa)



