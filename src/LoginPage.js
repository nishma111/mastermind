import React from "react";
import useForm from "./useForm";
import validate from "./ValidateLogin";

const LoginPage = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted Sucessfully");
  }
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

export default LoginPage;
