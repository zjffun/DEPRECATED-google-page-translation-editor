import $ from 'jquery';
import reset_toolbar from '../reset_toolbar';
import reset_style_and_uncheck from './reset_style_and_uncheck';
export default function($ori, $trans){
  reset_style_and_uncheck($ori.contents().find('[gpte_not_trans]'));
  reset_style_and_uncheck($trans.contents().find('[gpte_not_trans]'));
  reset_toolbar();
}