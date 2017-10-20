/**
 * Created by yifei.tang on 2017/10/19.
 */
const superAgent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

let sourceFile = fs.readFileSync(path.join(__dirname, 'public', 'md', 'interview_questions.md')).toString();

let regUrl = /\[(.+?)\]\((.+?)\)/g;
let regHtml = /^http/;

let maps={};
let result = 1;

while (result){
    let tmp = regUrl.exec(sourceFile);
    if (tmp !== null) {
        maps[tmp[1].trim()] = tmp[2];
    } else {
        result = 0;
    }
}

let htmlPath = path.join(__dirname, 'public', 'html');
let others = [];

for (name in maps) {
    ((name) => {
        if (regHtml.test(maps[name])) {
            superAgent.get(maps[name]).end((err, res) => {
                if (err) {
                    console.error(err);
                } else {
                    fs.writeFile(`${name}.html`, res.text, (err) => {
                        if (err) {
                            console.error(`创建文件  ${name}.html  失败`);
                        } else {
                            console.log(`创建文件  ${name}.html 成功`);
                            fs.rename(path.join(__dirname, `${name}.html`), path.join(htmlPath, `${name}.html`), (err) => {
                                if (err) {
                                    console.error(`移动文件  ${name}.html  失败`);
                                }else {
                                    console.log(`移动文件  ${name}.html  成功`);
                                }
                            });
                        }

                    });
                }

            });
        } else {
            others.push([name, maps[name]]);
        }
    })(name);

}

console.log(others);
