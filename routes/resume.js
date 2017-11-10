const fs = require('fs');
const path = require('path');

let fn_resume_show = async (ctx, next) => {
    await ctx.render('resume', { title: '我的简历' });
};

let fn_oresume_show = async (ctx, next) => {
    let sourcePdf = fs.readFileSync(path.join(process.cwd(), 'public', 'pdf', 'original_resume.pdf'));
    ctx.response.type = 'application/pdf';
    ctx.body = sourcePdf;
};

module.exports = {
    'GET /resume': fn_resume_show,
    'GET /oresume': fn_oresume_show
};