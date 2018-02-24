var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = require('url');
var mkdirp = require('mkdirp');

var app = express();

app.get('/',function(req, res, next){
  console.log(req)
  res.send('hello node');
})

app.get('/set_url',function(req, res, next){
  var url_str = 'https://www.npmjs.com'//req.query.url;
  var page_path = 'page'//req.query.page_path;
  /*有url模块用不着的。。
  //eg:'http://www.test.com:8080/test?test=test'.match(/(?:\:\/\/)(.*?(?=[\:\/\?]|$))/)[1]
  var domain_name = url_str.match(/(?:\:\/\/)(.*?(?=[\:\/\?]|$))/)[1];
  */
  var url_info = url.parse(url_str);
  var path = page_path + '/' + url_info.hostname + '/';
  /*无法递归创建文件夹
  fs.existsSync(path) || fs.mkdirSync(path);
  */
  mkdirp(path, function (err) {
    err && console.error(err)
  });
  request(url_str, function (error, response, html) {
    $ = cheerio.load(html);
    $('script,img,link').each(function(){
      var src = $(this).attr('src')
      src && 
      (!/^https?\:\/\//.test(src)) && 
      ($(this).attr('src', url.resolve(url_str, src)))
    });
    fs.writeFile(path + 'index.html', $.html(),  function(err) {
      if (err) {
        return console.error(err);
      }
    });
    res.send('ok');
  })
})

app.listen(8848);
