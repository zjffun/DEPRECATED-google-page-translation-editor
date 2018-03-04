import $ from 'jquery';
export default function(is_edit){
  if (is_edit === undefined ? this.options.is_edit : is_edit) {
    // 全部不可编辑
    this.trans_contents.find('*').removeAttr('contenteditable');
    // 恢复原来的状态
    this.trans_contents.find('[gptp-source-contenteditable=true]')
      .removeAttr('gptp-source-contenteditable')
      .attr('contenteditable', 'true');
    this.trans_contents.find('[gptp-source-contenteditable=false]')
      .removeAttr('gptp-source-contenteditable')
      .attr('contenteditable', 'false');
    // 去除可编辑flag
    this.trans_contents.find('#gptp-is-edit').remove();
    this.options.is_edit = false;
    return;
  }

  // 保存原来的状态
  this.trans_contents.find('[contenteditable=true]')
    .attr('gptp-source-contenteditable', 'true');
  this.trans_contents.find('[contenteditable=false]')
    .attr('gptp-source-contenteditable', 'false');
  // 全部可编辑
  this.trans_contents.find('*').attr('contenteditable', 'true');
  // 可编辑flag
  this.trans_contents.find('body').append('<div id="gptp-is-edit"></div>');
  this.options.is_edit = true;
}