{
  let user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "0170000000",
    address: "Uganda",
  };

  const {
    address,
    name: { firstName },
  } = user;
  console.log(address, firstName);
}
