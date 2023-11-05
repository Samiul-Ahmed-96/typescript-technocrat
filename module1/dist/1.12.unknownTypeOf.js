"use strict";
{
    //nullable type
    const search = (value) => {
        if (value) {
            console.log("Seatching");
        }
        else {
            console.log("Not searching");
        }
    };
    search(null);
    //unknown typeof
    const getSpeed = (value) => {
        if (typeof value === "number") {
            const result = (value * 1000) / 3600;
            console.log(result);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const converted = (parseFloat(result) * 1000) / 3600;
            console.log(converted);
        }
        else {
            console.log("wrong type");
        }
    };
    getSpeed(2232);
    getSpeed("100 kmph");
    //never
    const throwError = (value) => {
        throw new Error(value);
    };
    throwError("Error Happened");
}
