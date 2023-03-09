function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (a === 0 || b === 0) return 'Error: Cannot Divide By 0';
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
console.log(add(1,2));
console.log(subtract(1,2));
console.log(divide(1,2));
console.log(divide(0,2));
console.log(multiply(2,4));