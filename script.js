const axios = require('axios');
const cheerio = require('cheerio');
var fs = require('fs');

url = 'http://codeforces.com/contest/1256/problem/C'

let getTestCaseFromProblemHtml = (dir, html) => {

  fs.copyFileSync(`${dir}/../template.cpp`, `${dir}/sol.cpp`);
  data = [];
  const $ = cheerio.load(html);
  $('div.input pre').each((i, elem) => {
    data[i] = {
      ...data[i],
      input: $(elem).text()
    };
  });
  $('div.output pre').each((i, elem) => {
    data[i] = ({
      ...data[i],
      output: $(elem).text()
    });
  });
  console.log(data);
  data.forEach((test, i) => {
    fs.writeFile(`${dir}/in${i}.txt`, test.input, function(err) {
      if(err) {
          console.log(err);
      }
      console.log(`The file ${dir}/in${i}.txt was saved!`);
    }); 
    fs.writeFile(`${dir}/out${i}.txt`, test.output, function(err) {
      if(err) {
          console.log(err);
      }
      console.log(`The file ${dir}/out${i}.txt was saved!`);
    }); 
  })
  console.log(data);
}

function getTestCaseFromProblemUrl(url) {
  var dir = `./${url.substring(url.lastIndexOf('/')+1)}`;

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
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
