


class Player {
  constructor (opts = {}) {
    this.name = opts.name || 'Mystery Player'
    this.id = opts.tokenAddress || Math.floor(Math.random() * 1e10)
  }
}

module.exports = Player