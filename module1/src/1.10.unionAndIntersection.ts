{
  //Union types (jekono ekta thaklei hbe)

  type FrontendDeveloper = "GoodDev" | "BadDev";
  type FullStackDeveloper = "GoodDev" | "BadDev";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "GoodDev";

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    bloodGroup: "A+" | "B+" | "Ab+";
  };

  const user: User = {
    name: "Anik",
    gender: "Male",
    bloodGroup: "B+",
  };

  //Intersection types (Sob gula thakte hbe)

  type FrontendDev = {
    skills: string[];
    designation1: "FrontendDev";
  };
  type BackendDev = {
    skills: string[];
    designation2: "BackendDev";
  };
  //combined types
  type FullStackDev = FrontendDev & BackendDev;

  const samiul: FullStackDev = {
    skills: ["html", "css", "express"],
    designation1: "FrontendDev",
    designation2: "BackendDev",
  };
}
