const SignUpForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="first_name">First name</label>
        <input type="text" id="first_name" name="first_name" />
        <span></span>
      </div>
      <div>
        <label htmlFor="last_name">Last name</label>
        <input type="text" id="last_name" name="last_name" />
        <span></span>
      </div>
      <div>
        <label htmlFor="username">User name</label>
        <input type="text" id="username" name="username" />
        <span></span>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <span></span>
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm password</label>
        <input type="password" id="confirm_password" name="confirm_password" />
        <span></span>
      </div>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
