function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };


  // this.test=function () {
  //   console.log("a here");
  //   console.log(a);
  //   console.log(this.a);
  // } 

  this.sum = function() {
    return this.a + this.b;
  };

  this.test = function() {
    console.log("here a");
    console.log(this.a);
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

 console.log ( "Sum=" + calculator.sum() );
console.log ( "Mul=" + calculator.mul() );
calculator.test()
