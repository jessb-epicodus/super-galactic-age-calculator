export default class LifeExpectancy {

  constructor(earthYrs) {
    this.earthYrs = earthYrs;
  }

  // getLifeExpectancy () {
  //   let livedYrs = this.earthYrs;
  //   if (livedYrs <= 72) {
  //     return Math.round(72.6 - livedYrs)
  //   } else if (livedYrs > 72) {
  //     return Math.round(livedYrs - 72.6)
  //   }
  // }
  getMercuryRemainigYrs () {
    let livedYrs = this.earthYrs;
    if (livedYrs <= 72) {
      return Math.round((72.6 - livedYrs) / .24)
    } else if (livedYrs > 72) {
      return Math.round((livedYrs - 72.6) /.24)
    }
  }
}
