/**
 * Created by yifei.tang on 2017/10/20.
 */
const fs = require('fs');
const path = require('path');

let fn_get_favicon = (ctx, next) => {
    ctx.response.type = 'image/x-icon';
    ctx.response.body = fs.createReadStream(path.join(process.cwd(), 'public', 'images', 'ultraman.ico'));
}

module.exports = {
    'GET /favicon.ico': fn_get_favicon
}