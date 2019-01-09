class Weekday {
  constructor(year, month, date){
    this.year = year,
    this.month = month,
    this.date = date
  }

  leapYear() {

    if ((this.year % 100 === 0) && (this.year % 400 === 0)) {
      return true;
    } else if (this.year % 100 === 0) {
      return false;
    } else if(this.year % 4 === 0) {
      return true;
    }
  }

  daysPastInYear() {

    let daysInYear = 0;

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



  //
  //
  // dayCalculation() {
  //   const anchorDate = new Date(1900, 1, 1);
  //   let userDate = new Date(this.year, this.month, this.date);
  //   let result = [];
  //
  //   // if (anchorDate % userDate.date ===  0) {
  //   //   result.push("monday");
  //   // } else if (anchorDate % userDate.date ===  1) {
  //   //   result.push("tuesday");
  //   // } else if (anchorDate % userDate.date ===  2) {
  //   //   result.push("wednesday");
  //   // } else if (anchorDate % userDate.date ===  3) {
  //   //   result.push("thursday");
  //   // } else if (anchorDate % userDate.date ===  4) {
  //   //   result.push("friday");
  //   // } else if (anchorDate % userDate.date ===  5) {
  //   //   result.push("saturday");
  //   // } else (anchorDate % userDate.date ===  6) {
  //   //   result.push("sunday");
  //  }
  //   return result;
  // }
  //







}

export { Weekday };
