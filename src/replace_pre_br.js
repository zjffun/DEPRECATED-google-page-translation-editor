export default function(){
  $('pre', this.trans_contents).each(function(){

    var allChildNodes = function(node, type){
      // 1.创建全部节点的数组
      var allCN = [];

      // 2.递归获取全部节点
      var getAllChildNodes = function(node, type, allCN){
        // 获取当前元素所有的子节点nodes
        var nodes = node.childNodes;
        // 获取nodes的子节点
        for (var i = 0; i < nodes.length; i++) {
            var child = nodes[i];
            // 判断是否为指定类型节点
            if(child.nodeType == type){
                allCN.push(child);
            }
            getAllChildNodes(child, type, allCN);
        } 
      }
      getAllChildNodes(node, type, allCN);
      // 3.返回全部节点的数组
      return allCN;
    }
    var keys = Object.keys || function(obj) {
        obj = Object(obj)
        var arr = []   
        for (var a in obj) arr.push(a)
        return arr
    }
    var replace_map = {
      '\n': "<br/>",
      ' ': "&ensp;",
      '\t': "&ensp;&ensp;"
    }
    var allTextNodes = allChildNodes(this, 3);
    /*
      text节点无innerHTML这个属性！！！
      如果直接修改text节点的属性（data,nodeValue,textContent），或者使用js原生的修改text节点的内容的方法都会将HTML的预留字符变成转义字符直接显示成文本了，解决方法有：
      1. 使用正则表达式找出pre的innerHTML字符串中的全部text节点的字符串进行修改
      2. 给text外面包裹一个标签，改包裹标签的innerHTML，把包裹标签的内容移动到外面，删除包裹标签
      3. 使用jquery的replaceWith方法，这个就非常严谨了
      replaceWith: function( value ) {
        var isFunc = jQuery.isFunction( value );

        // Make sure that the elements are removed from the DOM before they are inserted
        // this can help fix replacing a parent with child elements
        if ( !isFunc && typeof value !== "string" ) {
          value = jQuery( value ).not( this ).detach();
        }

        return this.domManip( [ value ], true, function( elem ) {
          var next = this.nextSibling,
            parent = this.parentNode;

          if ( parent ) {
            jQuery( this ).remove();
            parent.insertBefore( elem, next );
          }
        });
      },
    */
    allTextNodes.forEach(function(textNode){
      $(textNode).replaceWith(()=>{
        return textNode.data.replace(RegExp('[' + keys(replace_map).join('') + ']', 'g'), function(match){
          // console.log(match, replace_map[match])
          return replace_map[match]
        })
      })
    });
  })
}