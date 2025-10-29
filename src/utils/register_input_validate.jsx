
//  this is validate the  Register Form
const register_input_validate = (fname , email ,contact ,  gender , password) => { 
 const errors = {};

 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 const contactRegex = /^[0-9]{10}$/;
 const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; 


//   Now validating the feilds - 

   if (!fname || fname.trim().length < 2) {
    errors.fname = "Full name must be at least 2 characters long *";
  } 

 if(!emailRegex.test(email)){
    errors.email = "Invalid Email Address Enter valid Email *"
 };
 console.log(contact)
  if(!contactRegex.test(contact)){
    errors.contact = "Invalid Number  Enter valid Number *"
 };

  if (!["male", "female", "other"].includes(gender.toLowerCase())) {
    errors.gender = "Invalid gender *";
  }

  if(!passwordRegex.test(password)){
    errors.password = "Password must be at least 8 characters long and contain at least one letter and one number *";
 }

 return errors;

};

export default register_input_validate;