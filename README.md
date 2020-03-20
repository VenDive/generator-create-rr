React Redux Generator
===================
[![npm version](https://badge.fury.io/js/generator-create-rr.svg)](https://badge.fury.io/js/generator-create-rr)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/VenDive/generator-create-rr/issues)
[![HitCount](http://hits.dwyl.io/VenDive/generator-create-rr.svg)](http://hits.dwyl.io/VenDive/generator-create-rr)
[![downloads][downloads-image]][downloads-url]

[downloads-image]: https://img.shields.io/npm/dt/generator-create-rr.svg?style=flat
[downloads-url]: https://npmjs.org/package/generator-create-rr

# Welcome to React Redux Generator

This is Yeoman generator for app of React Redux with basic scaffolding and structure of files and UI libraries options.

## UI Libraries

 - Ant Design
 - Material UI

# Installation

Install Yeoman and generator using npm
`
npm install -g yo generator-create-rr
`

# Creating a Project

Create as many as project using react redux generator
`
yo create-rr
`
It will Ask few Questions like below

 - Project name:
 - Application version
 - Which UI library wants to use
 - etc

## Starting Project
Once project is created it will have few commands predefined.

to run scripts you can use yarn or npm both
```javascript

npm  run  start // To Start Project

npm  run  build // To make a Build

npm  run  test // Unit test

npm  run  coverage  // Unit test coverage

npm  run  lint // Lint issues at once

npm  run  lintfix // fix fixable issue by lint auto

npm  run  build-css // Generate css from scss

npm  run  watch-css // Generate css and watch changes from scss

npm run eject // Caution: will eject all config files.if you want to exclude react-scripts  

```

# Webpack Extend
Project is created using rewired version of react-scripts which gives webpack.config.extend.js files where you can extend the Webpack settings without ejecting it.
