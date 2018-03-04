import $ from 'jquery';
import { scrollsync, closeScrollsync } from 'jquery-scrollsync';
//jquery-smartscroll
$.fn.scrollsync = scrollsync;
$.fn.closeScrollsync = closeScrollsync;
export default function(is_binding_scroll){
  if (is_binding_scroll === undefined ? this.options.is_binding_scroll : is_binding_scroll) {
    this.data.binding_scroll.closeScrollsync();
    this.options.is_binding_scroll = false;
    return;
  }
  var $windows = $([this.options.$ori[0].contentWindow, this.options.$trans[0].contentWindow]);
  this.data.binding_scroll = $windows.scrollsync();
  this.options.is_binding_scroll = true;
}
