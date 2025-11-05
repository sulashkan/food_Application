import React from "react";

export function Validator({ email, password }) {

    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailpattern.test(email)) {
        return "Invalid email format"
    }


    if (!passwordRegex.test(password)) {

        return "Invalid password"


    }

    return true

}


