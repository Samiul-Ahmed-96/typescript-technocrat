{
  //Object
  const user: {
    firstName: string;
    lastName: string;
    middleName?: string; //Optional Type ( Thaketeo pare na o thakte pare )
    age: number;
    isMarried: boolean;
    company: "unidevGO"; //Litaral Type ( Jokhn kono kichu fixed thakbe tokhn eita use hbe )
    readonly companyAnother: string; //Litaral Type ( Jokhn kono kichu fixed thakbe tokhn eita use hbe ) access modifier style
  } = {
    firstName: "Samiul",
    company: "unidevGO", //simple litaral
    companyAnother: "unidevGO", // access modifier litaral
    lastName: "Ahmed",
    age: 25,
    isMarried: true,
  };

  console.log(user);
}
