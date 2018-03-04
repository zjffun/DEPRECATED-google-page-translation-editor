import $ from 'jquery';
import reset_style_and_uncheck from './reset_style_and_uncheck';
export default function($ori, $trans){
  var gpte = this;
  this.trans_contents.find('[gpte_not_trans]').each(function(){
    $(this).replaceWith(
      reset_style_and_uncheck(gpte.ori_contents
        .find('[gpte_not_trans="' + $(this).attr('gpte_not_trans') + '"]'))
      .clone()
    ) 
  })
  this.ori_contents.unbind('click', this.data.correct_not_trans.ori_click);
  this.trans_contents.unbind('click', this.data.correct_not_trans.trans_click);
}