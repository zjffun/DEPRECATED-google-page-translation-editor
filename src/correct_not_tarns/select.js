import $ from 'jquery';
import reset_style_and_uncheck from './reset_style_and_uncheck';
export default function(){
  var gpte = this;
  this.data.correct_not_trans = {};
  var no_trans_id = 1;
  this.ori_contents.click(this.data.correct_not_trans.ori_click = function(e){
    var $target = $(e.target);
    if ($target.attr('gpte_not_trans') === undefined) {
      save_style_and_check($target, 
        'background: #FFAEC9; border:1px solid #ED1C24;', 
        no_trans_id++)
      set_trans(gpte, $target);
    }else{
      // 修改trans界面target对应的节点要用到target的gpte_not_trans属性
      reset_style_and_uncheck(this.trans_contents
        .find('[gpte_not_trans="' + $target.attr('gpte_not_trans') + '"]'));
      reset_style_and_uncheck($target);
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  });
  function set_trans(gpte, $target){
    var select = '';
    select += $target.attr('id') ? '[id="' + $target.attr('id') + '"]' : '';
    select += $target.attr('class') ? '[class="' + $target.attr('class') + '"]' : '';
    select += $target.attr('role') ? '[role="' + $target.attr('role') + '"]' : '';
    select += $target.attr('data') ? '[data="' + $target.attr('data') + '"]' : '';
    var $selected = gpte.trans_contents.find(select)
    if ($selected.length === 1) {
      save_style_and_check($selected, 
        'background: #FFF200; border:1px solid #FF7F27;', 
        $target.attr('gpte_not_trans'))

    }else{
      alert('未找到匹配项，请手动匹配');
      gpte.trans_contents.one('click', gpte.data.correct_not_trans.trans_click = function(e){
        save_style_and_check($(e.target), 
          'background: #FFF200; border:1px solid #FF7F27;', 
          $target.attr('gpte_not_trans')
          )
        e.preventDefault();
        e.stopImmediatePropagation();
      })
    }
  }
  function save_style_and_check($o, new_style, id){
    $o.attr('ori_style', function(){
      return $(this).attr('style') || '';
    }).attr('style', new_style)
      .attr('gpte_not_trans', id);
  }
}