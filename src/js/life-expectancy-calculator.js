export default class LifeExpectancy {

  constructor(earthYrs) {
    this.earthYrs = 72;
    this.mercuryYrs = earthYrs / .24
    this.venusYrs = earthYrs / .62
    this.marsYrs = earthYrs / 1.88
    this.jupiterYrs = earthYrs / 11.86
  }

  getLifeExpectency () {
    let livedYrs = this.mercuryYrs;
    if (livedYrs > 0) {
      return (Math.round(livedYrs) + " year(s) remaining");
    } else {
      return (Math.round(livedYrs) + " year(s) past expected");
    }
  }
}