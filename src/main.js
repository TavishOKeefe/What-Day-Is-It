import { Weekday } from './date';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#main-form').submit(function(event){
    event.preventDefault();

    let inputYear = parseInt($('#year').val());
    let inputMonth = parseInt($('#month').val());
    let inputDate = parseInt($('#day').val());

    let dayOfTheWeek = new Weekday(inputYear, inputMonth, inputDate);

    if (inputMonth < 1 || inputMonth > 12){
      $('#result').html("Your month is invalid");
    } else if (inputDate > 31 || inputDate < 1){
      $('#result').html("Your day is invalid");
    } else {
      $('#result').text(dayOfTheWeek.dayCalculation());
    }


  })
})
