import $ from 'jquery';
import scrollsync from '../node_modules/jquery-scrollsync/src/scrollsync';
//jquery-smartscroll
$.fn.scrollsync = scrollsync;
export default function($ori, $trans, type = 'xy'){
  var $windows = $([$ori[0].contentWindow, $trans[0].contentWindow]);
  console.log($windows);
  $windows.scrollsync();
}
