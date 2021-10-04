//В данном коде происходит нарушение Interface Segregation принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

interface Ifly {
  fly(): void;
}

interface Idrive {
  drive(): void;
}

class AirPlane implements Ifly,Idrive {
  public fly() {
    console.log("I can fly");
  }
  public drive() {
    console.log("I can drive");
  }
}

class Car implements Idrive {
  public drive() {
    console.log("I can drive");
  }
}

const car=new Car()
const airPlane=new AirPlane()

