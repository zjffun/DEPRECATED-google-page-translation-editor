import $ from 'jquery';
export default function($ori, $trans, url, page_dir, get_page_url){
  $.get(get_page_url, { page_dir: page_dir, url: url }, function(data){
    alert(data.error);
    $ori.attr('src', data.ori_url);
    $trans.attr('src', data.trans_url);
  },'json');
}