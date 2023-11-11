{
  // Type Assertion - (as)
  let anything: any;

  anything = "Bangladesh";

  anything = 2222;

  // (anything as string) eivabe as er por type declare kore diye typescript er theke besi sure hoye type add kora jbe.

  // (anything as  number)
  // (anything as  boolean)

  const kgTOgm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const result = parseFloat(value) * 1000;
      return result;
    }
    if (typeof value === "number") {
      const result = value * 1000;
    }
  };

  const result1 = kgTOgm("1000") as string; //(debeloper sure eita string return hobe)
  const result2 = kgTOgm(1000) as number; //(debeloper sure eita number return hobe)
}
