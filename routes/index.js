let fn_index = async (ctx, next) => {
    await ctx.render('homepage');
};

module.exports = {
    'GET /': fn_index
};