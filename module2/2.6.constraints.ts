{
  //Constraints

  const addStudentToCourse = <T>(student: T) => {
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
}
