import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import friendsSvg from "../../assets/icons/friends.svg";
import browsePeopleSvg from "../../assets/icons/browse-people.svg";
import profileSettingsSvg from "../../assets/icons/profile-settings.svg";
import styles from "./App.module.css";

const App = () => {
  const { pathname } = useLocation();
  const param = useParams();

  return (
    <>
      <header className={styles.header}>
        <h1>Messaging app</h1>
        {!["/", "/login", "/signup"].includes(pathname) && (
          <nav>
            <ul>
              <li>
                <NavLink
                  to={`/${param.user_id}/friends`}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                >
                  <img src={friendsSvg} alt="Friends" title="Friends" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${param.user_id}/people`}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                >
                  <img
                    src={browsePeopleSvg}
                    alt="Browse people"
                    title="Browse people"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${param.user_id}/profile`}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                >
                  <img
                    src={profileSettingsSvg}
                    alt="Profile settings"
                    title="Profile settings"
                  />
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main className={styles.main}>
        {pathname === "/" ? (
          <div className={styles.mainDefault}>
            <p>
              Please <Link to={"/login"}>Log in</Link> to see messages
            </p>
            <p>or</p>
            <p>
              <Link to={"/signup"}>Sign up</Link> if you don&apos;t have an
              account
            </p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <footer className={styles.footer}>
        <p>VMadhuranga &copy; 2024</p>
      </footer>
    </>
  );
};

export default App;
