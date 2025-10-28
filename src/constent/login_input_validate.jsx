

const validateLoginInput = (email , password ) =>{

     const errors = {};

 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; 

    if(!emailRegex.test(email)){
    errors.email = "Invalid Email Address Enter valid Email"
 };
 
      if(!passwordRegex.test(password)){
    errors.email = "Password must be at least 8 characters long and contain at least one letter and one number";
 }

}

export default validateLoginInput;