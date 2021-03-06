'use strict';

const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const hbs = require('handlebars');

const app = new Koa();

app.use(views(path.join(__dirname, 'views'),
    {
        extension: 'hbs',
        map : {
            hbs: 'handlebars'
        },
        options: {
            helpers: {

            },
            partials: {
                head: './partials/head'
            }
        }
    }
));

app.use(serve(path.join(__dirname)));

app.use(bodyParser());
app.use(require('./controller')());

app.use(async (ctx, next) => {

   ctx.body = '<h1>404 Not Found</h1>'
});

app.listen(process.env.PORT || 5000);
console.log('app started on port 5000...');