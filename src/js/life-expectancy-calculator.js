export default class LifeExpectancy {

  constructor(earthYrs) {
    this.earthYrs = earthYrs;
  }

  getMercuryRemainigYrs () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return (Math.round((72.6 - livedYrs) / .24) + " year(s) remaining");
    } else {
      return (Math.round((livedYrs - 72.6) / .24) + " year(s) past expected");
    }
  }

  getVenusRemainigYrs () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return (Math.round((72.6 - livedYrs) / .62) + " year(s) remaining");
    } else {
      return (Math.round((livedYrs - 72.6) / .62) + " year(s) past expected");
    }
  }

  getMarsRemainigYrs () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return (Math.round((72.6 - livedYrs) / 1.88) + " year(s) remaining");
    } else {
      return (Math.round((livedYrs - 72.6) / 1.88) + " year(s) past expected");
    }
  }

  getJupiterRemainigYrs () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return (Math.round((72.6 - livedYrs) / 11.86) + " year(s) remaining");
    } else {
      return (Math.round((livedYrs - 72.6) / 11.86) + " year(s) past expected");
    }
  }
}