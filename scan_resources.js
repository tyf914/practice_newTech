/**
 * Created by yifei.tang on 2017/10/19.
 */
const superAgent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

let sourceFile = fs.readFileSync(path.join(__dirname, 'public', 'md', 'interview_questions.md')).toString();

let regExp = /[*](\(*\))/;