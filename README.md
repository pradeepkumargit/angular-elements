# Angular Elements

## Steps to create and use Angular Elements
1. creat one Hello World Component
2. Update app.module.ts files 

  a.import createCustomElement
```js
   import { createCustomElement } from '@angular/elements';
```
  b. Add Entry component in NgModule
```js
   entryComponents:[HelloWorldComponent]
```
  c. Add constructor in App Module
```js
    constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector: injector});
    customElements.define('app-hello-world', custom);
   }
```
  d. Manual bootstrapping your application using ngDoBootstrap
```js
     ngDoBootstrap() {}
```
3. Install dependencies for build script of Angular Elements

```bash
npm install fs-extra concat

```
4. Build your angular application using below command:

```js
ng build --prod --output-hashing=none

```
5. In your root application, create build script file, angular-element-build.js

```js
const fs = require('fs-extra');
const concat  = require('concat');

(async function build() {
    const files = [
        './dist/angular-app-using-angular-elements/runtime.js',
        './dist/angular-app-using-angular-elements/polyfills.js',
        './dist/angular-app-using-angular-elements/scripts.js',
        './dist/angular-app-using-angular-elements/main.js',
    ]
    await fs.ensureDir('angular-elements')
    await concat(files,'angular-elements/hello-world-angular-element.js')
})()
```

6. In package json add below script

```js
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "build:angular-elements": "ng build --prod --output-hashing=none && node angular-elements-build.js"
  },

```
7. Now run below command in your gitbase.

```js
npm run build:angular-elements
```
Above command will create a angular-elements folder and hello-world-angular-element.js file inside in angular-elements folder

8. Add index.html file with below code
```html
<html>
    <title>Hello World Angular Elements</title>
    <link rel="stylesheet" href="styles.css">
<body>
    <app-hello-world></app-hello-world>
    <script src="./hello-world-angular-element.js"></script>
</body>
</html>
```
9. Install live Server using below command

```js
npm install -g live-server

```
10. Navigate to your angular-element folder and run below command
```js
npx live-server
```
your browser will open new broser window on  below url and you can see Hello World Component us running as Angular element in your application.

http://localhost:8080/



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
