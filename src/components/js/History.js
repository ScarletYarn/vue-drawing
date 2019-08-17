class History {
  constructor () {
    this.container = []
  }

  add (path) {
    this.container.push(path)
  }

  clean () {
    this.container = []
  }
}

export default History
