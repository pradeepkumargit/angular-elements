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