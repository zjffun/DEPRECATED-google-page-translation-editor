var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = require('url');
var mkdirp = require('mkdirp');

const TRANS_URL_PREFIX = 'https://translate.googleusercontent.com/translate_c?depth=1&hl=zh-CN&ie=UTF8&prev=_t&rurl=translate.google.com.hk&sl=en&sp=nmt4&tl=zh-CN&u='

var app = express();

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/page', express.static(__dirname + '/page'));
app.use('/test', express.static(__dirname + '/test'));

app.get('/',function(req, res, next){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(fs.readFileSync(__dirname + '/test/index.html'));
})

app.get('/get_page',function(req, res, next){
  var url_str = req.query.url;
  var page_dir = req.query.page_dir;

  // 预处理
  /*有url模块用不着的。。
  //eg:'http://www.test.com:8080/test?test=test'.match(/(?:\:\/\/)(.*?(?=[\:\/\?]|$))/)[1]
  var domain_name = url_str.match(/(?:\:\/\/)(.*?(?=[\:\/\?]|$))/)[1];
  */
  var trans_url_str = TRANS_URL_PREFIX + url_str;
  var url_info = url.parse(url_str);
  var path = page_dir + '/' + url_info.hostname + '/';
  /*无法递归创建文件夹
  fs.existsSync(path) || fs.mkdirSync(path);
  */
  mkdirp(path, function (error) {
    if (error) {
      res.send({'error': '创建文件夹失败'});
      return;
    }
  });
  // 获取原页面
  request(url_str, function (error, response, html) {
    if (error) {
      res.send({'error': '获取原页面失败'});
      return;
    }
    $ = cheerio.load(html);
    $('script,img').each(function(){
      var src = $(this).attr('src')
      src && 
      (!/^https?\:\/\//.test(src)) && 
      ($(this).attr('src', url.resolve(url_str, src)))
    });
    $('link').each(function(){
      var href = $(this).attr('href')
      href && 
      (!/^https?\:\/\//.test(href)) && 
      ($(this).attr('href', url.resolve(url_str, href)))
    });
    fs.writeFile(path + 'index.html', $.html(),  function(error) {
      if (error) {
        res.send({'error': '写入文件失败'});
        return;
      }
    });
    // 获取翻译后（很难下载到本地，先不下载了，直接放上原来的。。）
    res.send({ori_url: path + 'index.html', trans_path:  path + 'index.html'});
    /*禁止使用iframe加载。。
    res.send({ori_url: path + 'index.html', trans_path: trans_url_str});*/
    /*全是动态生成的页面，要么分析JS找到如何生成iframe，要么就得用PhantomJs。。
    request(trans_url_str, function (error, response, html) {
      if (error) {
        console.log(trans_url_str, error);
        res.send({'error': '获取google翻译的页面失败，可能是因为没有科学上网被GFW拦截。。点击查看样例查看已经加载过的样例页面'});
        return;
      }
      $ = cheerio.load(html);
      var trans_iframe_src = $("iframe[src^='https://translate.googleusercontent.com/translate_p?']").attr('src');
      request(trans_iframe_src, function (error, response, html) {
        if (error) {
          res.send({'error': '获取google翻译的页面失败，可能是因为没有科学上网被GFW拦截。。点击查看样例查看已经加载过的样例页面'});
          return;
        }
        $ = cheerio.load(html);
        $('script,img').each(function(){
          var src = $(this).attr('src')
          src && 
          (!/^https?\:\/\//.test(src)) && 
          ($(this).attr('src', url.resolve(url_str, src)))
        });
        $('link').each(function(){
          var href = $(this).attr('href')
          href && 
          (!/^https?\:\/\//.test(href)) && 
          ($(this).attr('href', url.resolve(url_str, href)))
        });
        fs.writeFile(path + 'index_trans.html', $.html(),  function(error) {
          if (error) {
            res.send({'error': '写入文件失败'});
            return;
          }
        });
        res.send({ori_url: path + 'index.html', trans_path: path + 'index_trans.html'});
      })
    })*/
  })
  
})

app.listen(8848);






