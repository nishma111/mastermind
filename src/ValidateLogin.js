export default function ValidateLogin(values) {
  let errors = {};
  // console.log(errors);
  //email
  //the string to be more than 0 characters and need to be an email
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email";
  }
  //password
  //more than 0 characters
  //more than 10 characters
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Passwords need to be more than 10 characters";
  }

  return errors;
}
