//  this is validate the  Register Form :

// register_input_validate  : snake Case      // use to define varibale only *

//  getAdd  : - camale case  -  // use to make file and case *

// PritntError : Pascale Case -  // use to define components *

//  sss-task : cabab case - use to define files *

const registerInputValidation = ({
  fname,
  email,
  contact,
  gender,
  password,
}) => {
  const errors = {};

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //
  const contactRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  //   Now validating the feilds -

  if (!fname || fname.trim().length < 2) {
    errors.fname = "Full name must be at least 2 characters long *";
  }

  if (!emailRegex.test(email)) {
    errors.email = "Invalid Email Address Enter valid Email *";
  }
  if (!contactRegex.test(contact)) {
    errors.contact = "Invalid Number  Enter valid Number *";
  }

  if (!["male", "female", "other"].includes(gender.toLowerCase())) {
    errors.gender = "Invalid gender *";
  }

  if (!passwordRegex.test(password)) {
    errors.password =
      "Password must be at least 8 characters long and contain at least one letter and one number *";
  }

  return errors;
};

export default registerInputValidation;
