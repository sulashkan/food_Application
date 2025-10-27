export function validator (email,password){

     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     const emailRegix =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

     if (!email || !password) {
      // alert("Please fill all fields");
     return {message: "Please fill all fields"}
      
    }

    if (!emailRegix.test(email)) {
      // alert("Invalid email format");
     return { message:"Invalid email format"}
      
    }

    if (!passwordRegex.test(password)) {
      // alert("Password must be 8 characters, uppercase, lowercase, number, and special character");
       return { message:"Password must be 8 characters"}

        
    }



    return null
}