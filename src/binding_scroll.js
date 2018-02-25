import $ from 'jquery';
import smartscroll from '../node_modules/jquery-smartresizeandscroll/src/smartscroll';
//jquery-smartscroll
$.fn.smartscroll = smartscroll;
export default function($ori, $trans, type = 'xy'){
  var $ori_window = $($ori[0].contentWindow);
  var $trans_window = $($trans[0].contentWindow);
  var delay = 10;
  // 不好，得改
  switch(type){
    case 'x':
      $ori_window.smartscroll(function(){
        $trans_window.scrollLeft($ori_window.scrollLeft());
      }, delay)
      $trans_window.smartscroll(function(){
        $ori_window.scrollLeft($trans_window.scrollLeft());
      }, delay)
      break;
    case 'y':
      $ori_window.smartscroll(function(){
        $trans_window.scrollTop($ori_window.scrollTop());
      }, delay)
      $trans_window.smartscroll(function(){
        $ori_window.scrollTop($trans_window.scrollTop());
      }, delay)
      break;
    case 'xy':
      $ori_window.smartscroll(function(){
        if
        $trans_window.scrollLeft($ori_window.scrollLeft());
        $trans_window.scrollTop($ori_window.scrollTop());
      }, delay)
      $trans_window.smartscroll(function(){
        $ori_window.scrollLeft($trans_window.scrollLeft());
        $ori_window.scrollTop($trans_window.scrollTop());
      }, delay)
      break;
  }
}
