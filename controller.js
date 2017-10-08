const fs = require('fs');
const path = require('path');

function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, dir) {
    let files = fs.readdirSync(dir, (err) => {
        console.log(err);
    });

    let js_files = files.filter((f) => {
       return f.endsWith('.js');
    });

    for (let f of js_files) {
        let mapping = require(path.join(dir, f));
        addMapping(router, mapping);
    }
}

let router = require('koa-router')();
addControllers(router, path.join(__dirname, 'routes'));

module.exports = () => {
    let router = require('koa-router')();

    addControllers(router, path.join(__dirname, 'routes'));
    return router.routes();
};