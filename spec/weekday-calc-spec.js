import { Weekday } from './../src/date';

describe('Weekday', function(){

  it('should test if we can create a date object', function(){
    let newDay = new Weekday(2000, 5, 20);
    expect(newDay.year).toEqual(2000);
  });

  it('should check if input date is a leap year', function(){
    let newDay = new Weekday(2000, 5, 20);
    expect(newDay.leapYear()).toEqual(true);
  });

  it('should calculate how many days are in the year', function(){
    let newDay = new Weekday (2000, 5, 20);
    expect(newDay.daysPastInYear()).toEqual(141);
  });

  it('should check how many days have gone by since 1, 1, 0', function(){
    let newDay = new Weekday (500, 5, 20);
    expect(newDay.daysGoneWayBy()).toEqual(182761);
  });

});
