{
  //Type
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  let student1: Student = {
    name: "Mezba",
    age: 50,
    gender: "male",
    contactNo: "0170000000",
    address: "ctg",
  };
  let student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };
  let student3: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  //Type string
  type Username = string;
  type IsAdmin = boolean;

  const username: Username = "Samiul Ahmed";
  const isAdmin: IsAdmin = true;

  //Type Function

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
