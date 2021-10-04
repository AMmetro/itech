//В данном коде происходит нарушение Liskov Substitution принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area(){ return this.width * this.height;}
}

class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  area(){ return (this.radius ** 2) * Math.PI}
}

function computeSpace(shapes: Array<Rectangle | Circle>) {
  return shapes.reduce((calculatedArea, shape) => {
    calculatedArea += shape.area()
    return calculatedArea 
  }, 0);
}


 
