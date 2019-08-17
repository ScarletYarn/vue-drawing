import paper from 'paper'

class Eraser {
  constructor () {
    this.tool = new paper.Tool()
    let path
    let self = this
    this.tool.onMouseDown = function (event) {
      self.context.project.activate()
      path = new paper.Path()
      path.style = {
        strokeColor: new paper.Color('#fff'),
        strokeWidth: self.context.style.strokeWidth
      }
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

export default Eraser
