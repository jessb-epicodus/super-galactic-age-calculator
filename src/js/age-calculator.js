export default class Age {

  constructor(earthYrs) {
    this.earthYrs = earthYrs;
  }

  getMercuryYrs () {
    return Math.round(this.earthYrs / .24);
  }
  
  getVenusYrs () {
    return Math.round(this.earthYrs / .62);
  }

  getMarsYrs () {
    return Math.round(this.earthYrs / 1.88);
  }

  getJupiterYrs () {
    return Math.round(this.earthYrs / 11.86);
  }
}