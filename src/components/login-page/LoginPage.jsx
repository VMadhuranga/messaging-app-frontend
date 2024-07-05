import { Link } from "react-router-dom";
import LoginForm from "../login-form/LoginForm";

const LoginPage = () => {
  return (
    <section className="defaultSection">
      <h2>Log in</h2>
      <LoginForm />
      <p>
        Don&apos;t have an account? <Link to={"/signup"}>Sign up</Link>
      </p>
    </section>
  );
};

export default LoginPage;
