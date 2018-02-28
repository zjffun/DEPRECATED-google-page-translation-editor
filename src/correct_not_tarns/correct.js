import $ from 'jquery';
import reset_toolbar from '../reset_toolbar';
import reset_style_and_uncheck from './reset_style_and_uncheck';
export default function($ori, $trans){
  $trans.contents().find('[gpte_not_trans]').each(function(){

    $(this).replaceWith(
      reset_style_and_uncheck($ori.contents()
        .find('[gpte_not_trans="' + $(this).attr('gpte_not_trans') + '"]'))
      .clone()
    ) 
  })
  reset_toolbar();
}