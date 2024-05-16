import { Form, useActionData } from "react-router-dom";

const SignUpForm = () => {
  const errors = useActionData();

  return (
    <Form method="post" data-testid="sign_up_form">
      <div>
        <label htmlFor="first_name">First name</label>
        <input type="text" id="first_name" name="first_name" required />
        {errors &&
          errors
            .filter((error) => error.path === "first_name")
            .map((error, index) => <span key={index}>{error.msg}</span>)}
      </div>
      <div>
        <label htmlFor="last_name">Last name</label>
        <input type="text" id="last_name" name="last_name" required />
        {errors &&
          errors
            .filter((error) => error.path === "last_name")
            .map((error, index) => <span key={index}>{error.msg}</span>)}
      </div>
      <div>
        <label htmlFor="username">User name</label>
        <input type="text" id="username" name="username" required />
        {errors &&
          errors
            .filter((error) => error.path === "username")
            .map((error, index) => <span key={index}>{error.msg}</span>)}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        {errors &&
          errors
            .filter((error) => error.path === "password")
            .map((error, index) => <span key={index}>{error.msg}</span>)}
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          required
        />
        {errors &&
          errors
            .filter((error) => error.path === "confirm_password")
            .map((error, index) => <span key={index}>{error.msg}</span>)}
      </div>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </Form>
  );
};

export default SignUpForm;
