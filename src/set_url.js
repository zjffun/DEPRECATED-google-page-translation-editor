import $ from 'jquery';
export default function($ori, $trans, url){
  $ori.attr('src', url);
  // 这里得合成谷歌翻译的url，然后加载去掉工具条的iframe
  $trans.attr('src', url);
}