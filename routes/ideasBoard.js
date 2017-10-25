/**
 * Created by yifei.tang on 2017/10/25.
 */
let fn_ideasBoard = async (ctx, next) => {
    await ctx.render('ideasBoard', {title: '金点子'});
};

module.exports = {
    'GET /ideasBoard': fn_ideasBoard
};