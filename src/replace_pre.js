import $ from 'jquery';
export default function($ori, $trans){
  // 得在一个源下才行，要用nodejs了。。
  var pre_tag = [];
  $('pre', $ori.contents()).each(function(){
    pre_tag.push($(this).html());
  })
  $('pre', $trans.contents()).each(function(index, element){
    $(element).html(pre_html[index]);
  })
}