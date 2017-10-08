let fn_index = async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `<p>index page</p>`;
};

let fn_signin = async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `<p>signin page</p>`;
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};