export default class LifeExpectancy {

  constructor(earthYrs) {
    this.earthYrs = earthYrs;
  }

  getMercuryRemainigYrs () {
    let livedYrs = this.earthYrs;
    let remaingYrs = []
    if (livedYrs <= 72) {
      return Math.round((72.6 - livedYrs) / .24);
    } else if (livedYrs > 72) {
      return Math.round((livedYrs - 72.6) /.24);
    }
    
  }

  getVenusRemainigYrs () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return Math.round((72.6 - livedYrs) / .62);
    } else if (livedYrs > 72) {
      return Math.round((livedYrs - 72.6) /.62);
    }
  }

  getMarsRemainigYrs () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return Math.round((72.6 - livedYrs) / 1.88);
    } else if (livedYrs > 72) {
      return Math.round((livedYrs - 72.6) /1.88);
    }

  }

  getJupiterRemainigYrs () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return Math.round((72.6 - livedYrs) / 11.86);
    } else if (livedYrs > 72) {
      return Math.round((livedYrs - 72.6) /11.86);
    }
  }
}