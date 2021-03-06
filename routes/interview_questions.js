/**
 * Created by yifei.tang on 2017/10/19.
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

let fn_interview_questions_show = async(ctx, next) => {
    let sourceMdFile = fs.readFileSync(path.join(process.cwd(), 'public', 'md', 'interview_questions.md')).toString();

    await ctx.render('interview_questions', {
        markedFile: mark.render(sourceMdFile),
        title: '前端面试题整理'
    });

}

module.exports = {
    'GET /interview_questions': fn_interview_questions_show
}