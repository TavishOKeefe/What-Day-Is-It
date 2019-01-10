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

  it('should calculate how many days have past in the year', function(){
    let newDay = new Weekday (2000, 5, 20);
    expect(newDay.daysPastInYear()).toEqual(140);
  });

  it('should check how many days have gone by since 1, 1, 0', function(){
    let newDay = new Weekday (0, 5, 20);
    expect(newDay.daysGoneWayBy()).toEqual(139);
  });

  it('should check if input is monday', function(){
    let newDay = new Weekday (1999, 1, 4);
    expect(newDay.dayCalculation()).toEqual("Monday");
  });

  it('should check if input is thursday', function(){
    let newDay = new Weekday (2019, 1, 3);
    expect(newDay.dayCalculation()).toEqual("Thursday");
  });

  it('should check if day is invalid in april', function(){
    let newDay = new Weekday (2019, 4, 31);
    expect(newDay.invalidDate()).toEqual(true);
  });

  it('should check how many days are in between current date and past date', function(){
    let newDay = new Weekday (1946, 4, 31);
    expect(newDay.timePassed()).toEqual(26552);
  });

  it('should check how many days are in between current date and future date', function(){
    let newDay = new Weekday (2087, 4, 31);
    expect(newDay.timePassed()).toEqual(24947);
  });

  it('should check how many days are in between current date and past date after 1970', function(){
    let newDay = new Weekday (1975, 4, 31);
    expect(newDay.timePassed()).toEqual(15960);
  });

  it('should check if day is valid in  february', function(){
    let newDay = new Weekday (2019, 2, 29);
    expect(newDay.invalidDateInFebruary()).toEqual(true);
  });

  it('should check if day is valid in leap year february', function(){
    let newDay = new Weekday (2020, 2, 30);
    expect(newDay.invalidDateInFebruary()).toEqual(true);
  });

});
