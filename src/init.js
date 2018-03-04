import $ from 'jquery';
export default function(options){
  if($.type(options) != 'object'){
    console.error('错误：参数不是object！')
  }
  if(options.$ori == undefined){
    console.error('错误：未传入ori！')
  }
  if(options.$trans == undefined){
    console.error('错误：未传入object！')
  }
  var defaults = {
    is_edit: false,
    is_binding_scroll: false
  }
  
  // 使用jQuery.extend 覆盖插件默认参数
  this.options = $.extend({}, defaults, options);

  // 保存的数据
  this.data = {};

  Object.defineProperty(this, 'ori_contents', {
    get: function(){
      console.log($(this.options.$ori[0].contentDocument))
      return $(this.options.$ori[0].contentDocument)
    }
  });
  Object.defineProperty(this, 'trans_contents', {
    get: function(){
      return $(this.options.$trans[0].contentDocument)
    }
  });
  return this;
}