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
    console.log(dayOfTheWeek);

    $('#result').text(dayOfTheWeek.dayCalculation());
  })
})
