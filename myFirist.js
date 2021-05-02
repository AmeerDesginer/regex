
let s = "Using regular expression to split lines with different line https://ddd.ydgdd.com/fegf/ggg/sffs.mp4 endings/ends of line/line breaks"

s.match(/yes.*day/);
// Returns null

s.match(/(https|http)[^]*mp4/)
// Returns urls

// console.log(s.match(/(https|http)[^]*mp4/));

const fetch = require('node-fetch');
async function test(url) {
    const response = await fetch(url, {
        headers: {
            'Referer': 'www.faselhd.pro'
          },
    })
    return response.text();
}
const axios = require('axios');

  async function get_page_html(url) {
    const data = await axios.get(url);
    return data.text();
  }

  async function run() {
    var data = await fetchAsync("https://www.faselhd.pro/?p=123299");
    return data;
  }

console.log(get_page_html("https://www.faselhd.pro/?p=123299"));
