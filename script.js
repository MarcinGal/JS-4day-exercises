

class Calculator {
    constructor() {
       this.a = 0;
       this.b = 0;
    }
    inputFirst(a) { this.a = a }
    inputSecond(b) { this.b = b }
    add() { console.log(this.a + this.b) }
    subtract() { console.log(this.a - this.b) }
    multiply() { console.log(this.a * this.b) }
    divide() { console.log(this.a / this.b) }
}

const calc = new Calculator()

calc.inputFirst(2)
calc.inputSecond(3)

calc.add()
calc.subtract()
calc.multiply()
calc.divide()
