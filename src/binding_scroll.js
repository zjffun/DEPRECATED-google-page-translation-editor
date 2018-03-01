import $ from 'jquery';
import { scrollsync, closeScrollsync } from 'jquery-scrollsync';
//jquery-smartscroll
$.fn.scrollsync = scrollsync;
$.fn.closeScrollsync = closeScrollsync;
export default function($ori, $trans, is_scroll){
  if (is_scroll) {
    this.windows_scrollsync.closeScrollsync();
    return;
  }
  var $windows = $([$ori[0].contentWindow, $trans[0].contentWindow]);
  this.windows_scrollsync = $windows.scrollsync();
}
