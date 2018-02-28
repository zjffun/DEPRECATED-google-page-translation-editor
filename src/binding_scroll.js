import $ from 'jquery';
import { scrollsync } from 'jquery-scrollsync';
//jquery-smartscroll
$.fn.scrollsync = scrollsync;
export default function($ori, $trans, type = 'xy'){
  var $windows = $([$ori[0].contentWindow, $trans[0].contentWindow]);
  console.log($windows);
  $windows.scrollsync();
}
