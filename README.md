
# Reaction-NodeJS-MongoDB-App

Training developing a React, NosdeJS and MongoDB Full-Stack Training

## Getting Started

Lorem Ipsum, Lorem Ipsum,Lorem Ipsum Lorem Ipsum

### Prerequisites

Install them from command line:

```
(1) npm init -y
(2) npm i --save express
(3) npm i --save mongodb
(4) npm i --save react react-dom (react)
-----------------------------------------------
(5) npm i -D webpack webpack-cli (webpack is bundler & -cli is the command utilities)
-----------------------------------------------
(6) npm i -D babel-loader @babel/cli @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties (latest es6/7/8 features and other utilities)
-----------------------------------------------
(7) npm i -D nodemon (restart the server and watch for changes)
-----------------------------------------------
(8) npm i -D eslint babel-eslint eslint-plugin-react  (linting importance)
-----------------------------------------------
(9) npm i prop-types  (react package separated on its own)
-----------------------------------------------
```

### Dig into project

```
(10) replace "@babel/cli": "^7.6.4" by "@babel/node": "^7.x" as we're not using the command line to deploy yet.
11) mkdir src (source of the application) src/index.js (starting point)
12) mkdir public (frontend) public/index.html (starting point)
13) mkdir api (backend) api/index.js (starting point)
```

### How to run the server (scripts)

```
(14) "start": "nodemon --exec babel-node serve.js --ignore public/" instead of normal node use babel-node and  --ignore public flag to ignore this folder as changes are handle by src directory.
15)  "dev": "webpack -wd" transform the code files into a bundle file for the browser -wd flag run watch mode
```

### Setting Babel

```
16)  create a file webpack.config.js
     - entry: './src/index.js', //. entry file under src directory.
     - output: { //. this bundle all the entry files into a bundle.js in public directory.
     - path: path.resolve('public'), //. placing in the directory
     - filename: 'bundles.js' //. compiled js
     - entry: './src/index.js', //. entry file under src directory.
```
