import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  const param = useParams();

  return (
    <>
      <header>
        <h1>Messaging app</h1>
        {!["/", "/login", "/signup"].includes(pathname) && (
          <nav>
            <ul>
              {![`/${param.user_id}/friends`].includes(pathname) && (
                <li>
                  <Link to={`/${param.user_id}/friends`}>Friends</Link>
                </li>
              )}
              {![`/${param.user_id}/profile`].includes(pathname) && (
                <li>
                  <Link to={`/${param.user_id}/profile`}>Profile settings</Link>
                </li>
              )}
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
