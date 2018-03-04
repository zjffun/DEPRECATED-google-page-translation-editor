import $ from 'jquery';
import reset_style_and_uncheck from './reset_style_and_uncheck';
export default function(){
  reset_style_and_uncheck(this.ori_contents.find('[gpte_not_trans]'));
  reset_style_and_uncheck(this.trans_contents.find('[gpte_not_trans]'));
  this.ori_contents.unbind('click', this.data.correct_not_trans.ori_click);
  this.trans_contents.unbind('click', this.data.correct_not_trans.trans_click);
}