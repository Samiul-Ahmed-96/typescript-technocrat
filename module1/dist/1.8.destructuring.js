"use strict";
{
    //Obeject Destructuring
    let user = {
        id: 345,
        name: {
            firstName: "Samiul",
            middleName: "Ahmed",
            lastName: "Anik",
        },
        contactNo: "Bangladesh",
        address: "Uganda",
    };
    const { address, name: { firstName }, } = user;
    //Array destructuring
    const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    //,, get first two items and others are in ...rest
    const [, , bestfriend, ...rest] = myFriends;
}
