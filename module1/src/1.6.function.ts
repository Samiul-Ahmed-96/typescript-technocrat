//Normal Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);

//Arrow Function

const multiply = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method
const poorUser = {
  name: "Samiul",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

const numbers: number[] = [2, 4, 5, 8];

const square: number[] = numbers.map(
  (element: number): number => element * element
);
