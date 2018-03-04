import $ from 'jquery';
import {default as select} from './correct_not_tarns/select';
import {default as correct} from './correct_not_tarns/correct';
import {default as clear} from './correct_not_tarns/clear';
export default function(type){
  switch(type){
    case 'select': 
      select.call(this);
    break;
    case 'correct': 
      correct.call(this);
    break;
    case 'clear': 
      clear.call(this);
    break;
  }
}