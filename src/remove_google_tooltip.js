import $ from 'jquery';
export default function(){
  var $google_infowindow = this.trans_contents.find('#google-infowindow')
  while($google_infowindow.length){
    $google_infowindow.prev().remove()
    $google_infowindow.next().remove()
    $google_infowindow.remove()
    $google_infowindow = this.trans_contents.find('#google-infowindow')
  }
}