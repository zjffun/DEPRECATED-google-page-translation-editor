import $ from 'jquery';
export default function($trans, is_edit){
  var $contents = $trans.contents();
  if (is_edit) {
    // 全部不可编辑
    $contents.find('*').removeAttr('contenteditable');
    // 恢复原来的状态
    $contents.find('[gptp-source-contenteditable=true]')
      .removeAttr('gptp-source-contenteditable')
      .attr('contenteditable', 'true');
    $contents.find('[gptp-source-contenteditable=false]')
      .removeAttr('gptp-source-contenteditable')
      .attr('contenteditable', 'false');
    // 去除可编辑flag
    $contents.find('#gptp-is-edit').remove();
    return;
  }

  // 保存原来的状态
  $contents.find('[contenteditable=true]')
    .attr('gptp-source-contenteditable', 'true');
  $contents.find('[contenteditable=false]')
    .attr('gptp-source-contenteditable', 'false');
  // 全部可编辑
  $contents.find('*').attr('contenteditable', 'true');
  // 可编辑flag
  $contents.find('body').append('<div id="gptp-is-edit"></div>');

}