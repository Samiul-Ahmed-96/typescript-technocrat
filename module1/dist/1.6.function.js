"use strict";
//Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
//Arrow Function
const multiply = (num1, num2) => num1 + num2;
// object --> function --> method
const poorUser = {
    name: "Samiul",
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    },
};
const numbers = [2, 4, 5, 8];
const square = numbers.map((element) => element * element);
