const axios = require('axios');
const cheerio = require('cheerio');
var fs = require('fs');

const CF_CODE = (process.env.CF_CONTEST).match(/(\d+)/)[0];
const TARGET_DIR = __dirname + `/Parsed/` + `${CF_CODE}`;


url = 'http://codeforces.com/contest/1256/problem/C'

let getTestCaseFromProblemHtml = (dir, html) => {

  fs.copyFileSync(`${dir}/../template.cpp`, `${TARGET_DIR}/${dir}/sol.cpp`);
  data = [];
  const $ = cheerio.load(html); 
  $('div.input').each((i, elem) => {
    data[i] = {
      ...data[i],
      input: $(elem).text().substring('Input'.length),
    };
  });
  $('div.output').each((i, elem) => {
    data[i] = ({
      ...data[i],
      output: $(elem).text().substring('Output'.length),
    });
  });
  console.log(data);
  data.forEach((test, i) => {
    fs.writeFile(`${TARGET_DIR}/${dir}/in${i}.txt`, test.input, function(err) {
      if(err) {
          console.log(err);
      }
      console.log(`The file ${TARGET_DIR}/${dir}/in${i}.txt was saved!`);
    }); 
    fs.writeFile(`${TARGET_DIR}/${dir}/out${i}.txt`, test.output, function(err) {
      if(err) {
          console.log(err);
      }
      console.log(`The file ${TARGET_DIR}/${dir}/out${i}.txt was saved!`);
    }); 
  })
  console.log(data);
}

function getTestCaseFromProblemUrl(url) {
  var dir = `./${url.substring(url.lastIndexOf('/')+1)}`;
  var xdir = `${TARGET_DIR}` + `/` + `${dir}`;
  if (!fs.existsSync(xdir)){
      fs.mkdirSync(xdir, {recursive: true});
  }

  axios.get(url)
    .then(response => {
      // console.log(response);
      getTestCaseFromProblemHtml(dir, response.data);
    }
    )
    .catch(err => console.log(err));
}

// getTestCaseFromProblemUrl(url);

contest_url = 'http://codeforces.com/contest/1256';

// ''
let getTotalProblemsFromContestHtml = (html) => {
  data = [];
  const $ = cheerio.load(html);
  console.log('parsing');
  $('tr td.id a').each((i, elem) => {
    problem_url = 'https://codeforces.com/' + $(elem).attr('href')
    console.log(problem_url);
    getTestCaseFromProblemUrl(problem_url);
  });
}

axios.get(process.env.CF_CONTEST)
    .then(response => {
      // console.log(response);
      getTotalProblemsFromContestHtml(response.data);
    });
