# Welcome to React Redux Generator

This is Yeoman generator for app of React Redux with basic scaffolding and structure of files and UI libraries options.

## UI Libraries

 - Ant Design
 - Material UI
 - Sementic UI
 - React Bootstrap

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

npm  run  start

npm  run  build

npm  run  test

npm  run  coverage

npm  run  lint

npm  run  lintfix

npm  run  build-css

npm  run  watch-css

npm run eject // Caution: will eject all config files.if you want to exclude react-scripts  

```

# Webpack Extend
Project is created using rewired version of react-scripts which gives webpack.config.extend.js files where you can extend the Webpack settings without ejecting it.
