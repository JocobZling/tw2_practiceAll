'use strict'
const url = 'http://api.tianapi.com/keji/?key=4baa5d21a11c6d79b4eb16c574d7d9a1&num=10'
var request = require('sync-request');
var cheerio = require('cheerio');
var fs = require('fs');
var iconv = require('iconv-lite');

var res = request('GET', url);
let newslist = JSON.parse(res.getBody().toString()).newslist;
console.log(newslist);
for (let item of newslist) {
    let contentRes = request('GET', item.url);
    let html = iconv.decode(contentRes.getBody(), "GBK");
    //console.log(html);
    let $ = cheerio.load(html);
    let s = $('#img-content').html();
    fs.writeFileSync('news.html', iconv.encode(html, "gbk"));
    console.log(item.url);
    return;
}
