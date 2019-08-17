import paper from 'paper'

class Pen {
  constructor () {
    this.tool = new paper.Tool()
    let path
    let self = this
    this.tool.onMouseDown = function (event) {
      self.context.project.activate()
      path = new paper.Path()
      path.style = self.context.style
      path.add(event.point)
    }

    this.tool.onMouseDrag = function (event) {
      path.add(event.point)
    }

    this.tool.onMouseUp = function () {
      self.context.history.add(path)
    }
  }
}

export default Pen
