/**
 * Created by yifei.tang on 2017/11/13.
 */
const fs = require('fs');
const path = require('path');
const hljs = require('highlight.js');
const mark = require('markdown-it')({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) {}
        }

        return '<pre class="hljs"><code>' + mark.utils.escapeHtml(str) + '</code></pre>';
    }
});

let fn_study_notes = async (ctx, next) => {
    await ctx.render('study_notes_home', {title: '学习笔记首页'});
};

let fn_study_notes_Vue_show = async(ctx, next) => {
    let sourceMdFile = fs.readFileSync(path.join(process.cwd(), 'public', 'md', 'Vue_study_notes.md')).toString();

    await ctx.render('study_notes_vue', {
        markedFile: mark.render(sourceMdFile),
        title: 'Vue学习笔记'
    });

}

module.exports = {
    'GET /study_notes/home': fn_study_notes,
    'GET /study_notes/Vue': fn_study_notes_Vue_show
};