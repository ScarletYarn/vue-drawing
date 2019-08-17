import paper from 'paper'
import Pen from './Pen'
import History from './History'

class VueDrawing {
  constructor (id) {
    this.project = new paper.Project(id)
    this.history = new History()
    this.pen = new Pen()
    this.activeTool = this.pen
    this.style = {
      strokeWidth: 1,
      strokeColor: '#000'
    }
    this.use(this.pen)
  }

  use (tool) {
    if (this.activeTool.switch) this.activeTool.switch()
    tool.context = this
    tool.tool.activate()
    this.activeTool = tool
  }

  restoreTool () {
    this.use(this.pen)
  }

  clean () {
    this.project.activeLayer.removeChildren()
    this.history.clean()
  }
}

export default VueDrawing
