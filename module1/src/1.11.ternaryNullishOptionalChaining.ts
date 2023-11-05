{
  //Ternary
  const age: number = 13;

  const adult = age >= 18 ? "Adult" : "Not Adult";

  console.log(adult);

  //Nullish coalishing operator

  // null | undefined ( er upor base kore kono kichu kora lagle nullish operator use kora vhalo )

  const isAuthenticated = null;

  const resultNullish = isAuthenticated ?? "Guest";
  const resultTernary = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ resultNullish }, { resultTernary });

  type User = {
    name: string;
    age: number;
    presentAddress: string;
    permanentAddress?: string;
  };

  const edward: User = {
    name: "Edward",
    age: 34,
    presentAddress: "uganda",
  };

  const permanentAddress = edward?.permanentAddress ?? "No Address";
  console.log(permanentAddress);
}
