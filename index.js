// Your code here
class Polygon {
  constructor(shape) {
    this.shape = shape
  }

  get countSides() {
    return this.shape.length
  }

  get perimeter() {
    return this.shape.reduce((total, sides) => total + sides, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sorted = this.shape.sort()
    if(this.shape.includes(0) || Math.min(...this.shape) < 0) {
      return false
    } else if (sorted[0] + sorted[1] <= sorted[2]) {
      return false
    } else {
      return true
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let sized = [...new Set(this.shape)]
    if (sized.length === 1) {
      return true
    } else {
      return false
    }
  }
  get area() {
    return this.shape[0] * this.shape[1]
  }
}
