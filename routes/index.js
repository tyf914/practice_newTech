let fn_index = async (ctx, next) => {
    await ctx.render('homepage', {title: '汤一飞的技术练习网站'});
};

let fn_test = async (ctx, next) => {
    await ctx.render('test', {title: '测试'});
};

module.exports = {
    'GET /': fn_index,
    'GET /test': fn_test
};