import React from "react";

export function Validator({email,password}){

    if(!RegExp.test){
        return "email is invalid"
    }


    if(!passwordRegex.test(password)){

return "password is invalid"


    }

    return null

}