{
  //Constraints
  // Here name and id property have  must be use in the student

  //Constraints
  const addStudentToCourse = <T extends { name: string; id: number }>(
    student: T
  ) => {
    const course = "Fullstack Development";
    return {
      ...student,
      course,
    };
  };

  const anik = addStudentToCourse<{ name: string; id: number }>({
    name: "Anik",
    id: 212312,
  });
  const sakib = addStudentToCourse<{ name: string; id: number; email: string }>(
    {
      name: "Anik",
      id: 212312,
      email: "s@gmail.com",
    }
  );
}
