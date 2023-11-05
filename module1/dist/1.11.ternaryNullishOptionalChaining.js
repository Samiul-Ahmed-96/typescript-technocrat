"use strict";
var _a;
{
    //Ternary
    const age = 13;
    const adult = age >= 18 ? "Adult" : "Not Adult";
    console.log(adult);
    //Nullish coalishing operator
    // null | undefined ( er upor base kore kono kichu kora lagle nullish operator use kora vhalo )
    const isAuthenticated = null;
    const resultNullish = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const resultTernary = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ resultNullish }, { resultTernary });
    const edward = {
        name: "Edward",
        age: 34,
        presentAddress: "uganda",
    };
    const permanentAddress = (_a = edward === null || edward === void 0 ? void 0 : edward.permanentAddress) !== null && _a !== void 0 ? _a : "No Address";
    console.log(permanentAddress);
}
