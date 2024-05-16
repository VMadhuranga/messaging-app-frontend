const LoginForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">User name</label>
        <input type="text" id="username" name="username" required />
        <span></span>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <span></span>
      </div>
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
