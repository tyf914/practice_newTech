/**
 * Created by yifei.tang on 2017/10/19.
 */
const fs = require('fs');
const path = require('path');
const mark = require('markdown-it')();

let fn_interview_questions_show = async(ctx, next) => {
    let sourceMdFile = fs.readFileSync(path.join(process.cwd(), 'public', 'md', 'interview_questions.md')).toString();

    await ctx.render('interview_questions', {
        markedFile: mark.render(sourceMdFile),
        title: '前端面试题整理'
    });

}

let fn_Vue_study_notes_show = async(ctx, next) => {
    let sourceMdFile = fs.readFileSync(path.join(process.cwd(), 'public', 'md', 'Vue_study_notes.md')).toString();

    await ctx.render('Vue_study_notes', {
        markedFile: mark.render(sourceMdFile),
        title: 'Vue学习笔记'
    });

}

module.exports = {
    'GET /interview_questions': fn_interview_questions_show,
    'GET /Vue_study_notes': fn_Vue_study_notes_show
}