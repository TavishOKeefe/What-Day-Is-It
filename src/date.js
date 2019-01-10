class Weekday {
  constructor(year, month, date){
    this.year = year,
    this.month = month,
    this.date = date
  }


//function not yet called, or working.
  invalidDate(){

    let leapYear = this.leapYear();

    if (this.date > 31 || this.date < 1) {
        return "Invalid Date!";
    } else if (this.month < 1 || this.month > 12) {
        return "Invalid Month!";
    } else if ((this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) && (this.date > 30)) {
        return "Invalid Date!";
    } else if ((leapYear === true) && (this.month === 2) && (this.date > 29)) {
        return "Invalid Date!";
    } else if ((leapYear === false) && (this.month === 2) && (this.date > 28)) {
        return "Invalid Date!";
    }
  }
//End of function not yet working.

  leapYear() {
    if (this.year === 0){
      return false;
    } else if ((this.year % 100 === 0) && (this.year % 400 === 0)) {
      return true;
    } else if (this.year % 100 === 0) {
      return false;
    } else if(this.year % 4 === 0) {
      return true;
    }
  }

  daysPastInYear() {
    let daysInYear = -1;

    if (this.leapYear() === true && this.month !== 1 && this.month !== 2){
      daysInYear += 1;
    }
    if (this.month === 1){
      daysInYear += this.date;
    } else if (this.month === 2){
      daysInYear += (this.date + 31);
    } else if (this.month === 3){
      daysInYear += (this.date + 59);
    } else if (this.month === 4){
      daysInYear += (this.date + 90);
    } else if (this.month === 5){
      daysInYear += (this.date + 120);
    } else if (this.month === 6){
      daysInYear += (this.date + 151);
    } else if (this.month === 7){
      daysInYear += (this.date + 181);
    } else if (this.month === 8){
      daysInYear += (this.date + 212);
    } else if (this.month === 9){
      daysInYear += (this.date + 243);
    } else if (this.month === 10){
      daysInYear += (this.date + 273);
    } else if (this.month === 11){
      daysInYear += (this.date + 304);
    } else if (this.month === 12){
      daysInYear += (this.date + 335);
    }
    return daysInYear;
  }

  daysGoneWayBy(){
    let addLeapYears = Math.floor(this.year/4) - Math.floor(this.year/100) + Math.floor(this.year/400);

    let totalDaysPast = (this.year * 365) + addLeapYears + this.daysPastInYear();

    return totalDaysPast;
  }

  dayCalculation() {
    let number = this.daysGoneWayBy();

    if (number % 7 ===  1) {
      return "Monday";
    } else if (number % 7 ===  2) {
      return "Tuesday";
    } else if (number % 7 ===  3) {
      return "Wednesday";
    } else if (number % 7 ===  4) {
      return "Thursday";
    } else if (number % 7 ===  5) {
      return "Friday";
    } else if (number % 7 ===  6) {
      return "Saturday";
    } else if (number % 7 ===  0) {
      return "Sunday";
    }
  }
}

export { Weekday };
