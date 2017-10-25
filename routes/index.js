let fn_index = async (ctx, next) => {
    await ctx.render('homepage', {title: '汤一飞的技术练习网站'});
};

module.exports = {
    'GET /': fn_index
};