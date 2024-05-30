import { Form, useActionData } from "react-router-dom";

const LoginForm = () => {
  const errors = useActionData();

  return (
    <Form method="post">
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
        <button type="submit">Log in</button>
      </div>
    </Form>
  );
};

export default LoginForm;
