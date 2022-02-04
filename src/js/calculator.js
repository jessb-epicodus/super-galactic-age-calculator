// create a class that does the following:
// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
//  Determines how many years a user has left to live on each planet. 
// If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy

export default class Age {

  constructor(years) {
    this.years = years;
  }

  getMercuryYrs () {
    return Math.round(this.years *.24);
  }
}