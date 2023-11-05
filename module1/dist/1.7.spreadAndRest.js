"use strict";
{
    // spread operator
    // rest oprator
    // destructuring
    //learn spread operatoe
    let bros1 = ["Mir", "Firoz", "Mizan"];
    let bros2 = ["Tanmoy", "Nahid", "Rahat"];
    bros1.push(...bros2); //get bros2 items in bros1 using spread operator
    let mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    let mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2); // Get mentor1 and mentor2 items in mentor list
    // Get multiple  string item in parameter
    const greet = (...friends) => {
        friends.forEach((element) => {
            console.log(`Hello ${element}`);
        });
        greet("Anik", "Hasib", "Akib");
    };
}
