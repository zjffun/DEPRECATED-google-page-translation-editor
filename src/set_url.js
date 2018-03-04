import $ from 'jquery';
export default function(url, page_dir, get_page_url){
  $.get(get_page_url, { page_dir: page_dir, url: url }, function(data){
    alert(data.error);
    this.options.$ori.attr('src', data.ori_url);
    this.options.$trans.attr('src', data.trans_url);
  },'json');
}