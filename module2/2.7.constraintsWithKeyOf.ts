{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle; //Using keyof (keyof use kore object er property gula union akare pawa jbe)

  //using generic with keyof for getteing the actual value . (key hisebe ja pathabo ta obossoi object er mddhe exist krte hbe)
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. persian",
    age: 26,
    address: "ctg",
  };

  const car = {
    model: "Toyota 100",
    year: 200,
  };

  const result1 = getPropertyValue(car, "model");

  // obj[key]   26

  //
}
