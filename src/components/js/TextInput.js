import paper from 'paper'

const BASE_TEXT_SIZE = 12

class TextInput {
  constructor (box) {
    this.context = null             // be the parent VueDrawing after registered
    this.inShow = false
    this.inputBox = box
    this.tool = new paper.Tool()
    this.lastRectangle = null
    this.startPoint = null

    let self = this
    this.tool.onMouseDown = function (event) {
      if (self.inShow) return
      self.startPoint = event.point
    }

    this.tool.onMouseDrag = function (event) {
      if (self.inShow) return
      if (self.lastRectangle) {
        self.lastRectangle.remove()
      }
      self.endPoint = event.point
      self.lastRectangle = new paper.Path.Rectangle(self.startPoint, self.endPoint)
      self.lastRectangle.strokeColor = new paper.Color('gray')
      self.lastRectangle.strokeWidth = 1
    }

    this.tool.onMouseUp = function () {
      if (!self.inShow) {
        self.lastRectangle.remove()
        self.inputBox.style.left = `${self.startPoint.x}px`
        self.inputBox.style.top = `${self.startPoint.y}px`
        self.inputBox.style.width = `${self.endPoint.x - self.startPoint.x}px`
        self.inputBox.style.height = `${self.endPoint.y - self.startPoint.y}px`
        self.inputBox.style.display = 'block'
        self.inShow = true
      } else {
        self.inShow = false
        self.inputBox.style.display = 'none'
        if (self.inputBox.value !== '') {
          self.addTextElement()
        }
        self.startPoint = null
        self.endPoint = null
        self.inputBox.value = ''
      }
    }
  }

  switch () {
    if (this.inShow) {
      this.inputBox.style.display = 'none'
      if (this.inputBox.value !== '') {
        this.addTextElement()
        this.inputBox.value = ''
      }
    }
  }

  addTextElement () {
    let text = new paper.PointText({
      point: new paper.Point(this.startPoint.x, this.startPoint.y + this.context.style.strokeWidth + BASE_TEXT_SIZE),
      content: this.inputBox.value,
      fillColor: this.context.style.strokeColor,
      fontWeight: 'bold',
      fontSize: this.context.style.strokeWidth + BASE_TEXT_SIZE,
    })
    this.context.history.add(text)
  }
}

export default TextInput
