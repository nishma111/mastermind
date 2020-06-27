import React from "react";
import { useState, useEffect } from "react";

const Authentication = () => {
  const submit = () => {
    console.log("Submitted Sucessfully");
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <div>
            <input
              //className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            {/*error message here */}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              //className={`${errors.password && "inputError"}`}
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>
        <button type="Submit">Sign In</button>
      </form>
    </div>
  );
};

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //handling errors
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    //check if there are no errors
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

const validate = (values) => {
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
};

export default Authentication;
