import $ from 'jquery';
export default function(){
  // 得在一个源下才行，要用nodejs了。。
  var pre_tag = [];
  this.ori_contents.find('pre').each(function(){
    pre_tag.push($(this).html());
  })
  this.trans_contents.find('pre').each(function(index, element){
    $(element).html(pre_tag[index]);
  })
}