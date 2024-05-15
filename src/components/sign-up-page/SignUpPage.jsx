import { Link } from "react-router-dom";
import SignUpForm from "../sign-up-form/SignUpForm";

const SignUpPage = () => {
  return (
    <section>
      <h2>Sign up</h2>
      <SignUpForm />
      <p>
        Already have an account? <Link to={"/login"}>Log in</Link>
      </p>
    </section>
  );
};

export default SignUpPage;
