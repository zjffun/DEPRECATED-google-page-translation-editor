import $ from 'jquery';
export default function($trans){
  var $google_infowindow = $('#gpte-trans').contents().find('#google-infowindow')
  while($google_infowindow.length){
    $google_infowindow.prev().remove()
    $google_infowindow.next().remove()
    $google_infowindow.remove()
    $google_infowindow = $('#gpte-trans').contents().find('#google-infowindow')
  }
}