//В данном коде происходит нарушение Interface Segregation принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

interface Actions {
  fly(): void;
  drive(): void;
}

class AirPlane implements Actions {
  public fly() {
    console.log("I can fly");
  }
  public drive() {
    console.log("I can drive");
  }
}

class Car implements Actions {
  public fly() {
    throw new Error("I can't fly");
  }
  public drive() {
    console.log("I can drive");
  }
}
