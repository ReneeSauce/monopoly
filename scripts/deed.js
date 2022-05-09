/*


*/

module.exports = class Deed {
  constructor(group, price, rents) {
    this.owner = 'bank'
    this.group = group
    this.price = price
    this.houses = 0
    this.rent = rents
    this.mortgage = false
  }
}