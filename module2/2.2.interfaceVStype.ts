{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  // Added user 1 with new property in type
  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }
  //Example
  type Person1 = {
    name: string;
    age: number;
    isMarried: boolean;
  };

  interface Person2 {
    name: string;
    age: number;
    isMarried: boolean;
  }

  type PersonWithDesignation = Person1 & {
    designation: string;
  };

  interface PersonWithPhone extends Person2 {
    phoneNumber: number;
  }

  //
  const user1: UserWithRole2 = {
    name: "sakib",
    age: 100,
    role: "Seller",
  };

  type rollNumber = number;

  // js --> object , array-> object function -> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];
  // 0 1 2 --> number type

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
