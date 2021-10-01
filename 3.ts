//В данном коде происходит нарушение Liskov Substitution принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

function computeSpace(shapes: Array<Rectangle | Circle>) {
  return shapes.reduce((calculatedArea, shape) => {
    if (shape instanceof Rectangle) {
      return calculatedArea + shape.width * shape.height;
    }
    if (shape instanceof Circle) {
      return calculatedArea + shape.radius * Math.PI;
    }
  }, 0);
}
