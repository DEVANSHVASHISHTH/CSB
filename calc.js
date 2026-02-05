const calc = (a,b) => ({
    add: () => a+b,
    sub: () => a-b,
    mul: () => a*b,
    div: () => (b==0 ? "error" : a/b),
    
});
const calculator = calc(7,5);
console.log("Addition",calculator.add());
console.log("subtraction",calculator.sub());
console.log("multiplication",calculator.mul());
console.log("division",calculator.div());