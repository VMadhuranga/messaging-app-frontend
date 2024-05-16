import { Link, Outlet, useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header>
        <h1>Messaging app</h1>
        {!["/", "/login", "/signup"].includes(pathname) && (
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
        {pathname === "/" ? (
          <>
            <p>
              Please <Link to={"/login"}>Log in</Link> to see messages
            </p>
            <p>or</p>
            <p>
              <Link to={"/signup"}>Sign up</Link> if you don&apos;t have an
              account
            </p>
          </>
        ) : (
          <Outlet />
        )}
      </main>
      <footer>
        <p>VMadhuranga &copy; 2024</p>
      </footer>
    </>
  );
};

export default App;
