import $ from 'jquery';
export default function($o){
  $o.attr('style', function(){
      return $(this).attr('ori_style');
    })
    .removeAttr('gpte_not_trans ori_style');
  return $o;
}