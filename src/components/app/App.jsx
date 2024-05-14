import { Link } from "react-router-dom";

const App = () => {
  const path = location.pathname;

  return (
    <>
      <header>
        <h1>Messaging app</h1>
        {!["/", "/login", "/signup"].includes(path) && (
          <nav>
            <ul>
              <li>
                <Link to={""}>Friends</Link>
              </li>
              <li>
                <Link to={""}>Profile settings</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main>
        <p>
          Please <Link to={"login"}>Login</Link> to see messages
        </p>
        <p>or</p>
        <p>
          <Link to={"signup"}>Signup</Link>if you don&apos;t have an account
        </p>
      </main>
      <footer>
        <p>VMadhuranga &copy; 2024</p>
      </footer>
    </>
  );
};

export default App;
