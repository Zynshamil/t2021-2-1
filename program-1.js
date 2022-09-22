class Calculator {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }

    static add(x) {
        return x.a + x.b;
    }
    static sub(x) {
        return x.a - x.b;
    }
    static mul(x) {
        return x.a * x.b;
    }
    static div(x) {
        return x.a / x.b;
    }
    

}
let cal = new Calculator(10, 15, '+');
console.log("ans", Calculator.add(cal))