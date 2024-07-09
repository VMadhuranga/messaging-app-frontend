import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useParams,
} from "react-router-dom";
import goBackSvg from "../../assets/icons/go-back.svg";
import styles from "./EditProfilePage.module.css";
import { useState } from "react";

const EditProfilePage = () => {
  const user = useLoaderData();
  const errors = useActionData();
  const params = useParams();
  const [passwordObj, setPasswordObj] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  function updatePassword(password) {
    setPasswordObj({ ...passwordObj, ...password });
  }

  function resetPassword() {
    setPasswordObj({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  }

  return (
    <section className={`defaultSection ${styles.editProfilePage}`}>
      <div>
        <Link to={`/${params.user_id}/profile`} className="goBackBtn">
          <img
            src={goBackSvg}
            alt="Go back"
            title="Go back"
            className="goBackBtn"
          />
        </Link>
        <h2>Edit profile</h2>
      </div>
      <Form method="patch" className="defaultForm">
        <div>
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            defaultValue={user.firstName}
          />
          {errors &&
            errors
              .filter((error) => error.path === "first_name")
              .map((error, index) => <span key={index}>{error.msg}</span>)}
        </div>
        <div>
          <button type="submit">Update first name</button>
        </div>
      </Form>
      <hr />
      <Form method="patch" className="defaultForm">
        <div>
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            defaultValue={user.lastName}
          />
          {errors &&
            errors
              .filter((error) => error.path === "last_name")
              .map((error, index) => <span key={index}>{error.msg}</span>)}
        </div>
        <div>
          <button type="submit">Update last name</button>
        </div>
      </Form>
      <hr />
      <Form method="patch" className="defaultForm">
        <div>
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            defaultValue={user.userName}
          />
          {errors &&
            errors
              .filter((error) => error.path === "username")
              .map((error, index) => <span key={index}>{error.msg}</span>)}
        </div>
        <div>
          <button type="submit">Update user name</button>
        </div>
      </Form>
      <hr />
      <Form method="patch" className="defaultForm" onSubmit={resetPassword}>
        <div>
          <label htmlFor="old_password">Old password</label>
          <input
            type="password"
            id="old_password"
            name="old_password"
            required
            onChange={(e) => updatePassword({ oldPassword: e.target.value })}
            value={passwordObj.oldPassword}
          />
          {errors &&
            errors
              .filter((error) => error.path === "old_password")
              .map((error, index) => <span key={index}>{error.msg}</span>)}
        </div>
        <div>
          <label htmlFor="new_password">New password</label>
          <input
            type="password"
            id="new_password"
            name="new_password"
            required
            onChange={(e) => updatePassword({ newPassword: e.target.value })}
            value={passwordObj.newPassword}
          />
          {errors &&
            errors
              .filter((error) => error.path === "new_password")
              .map((error, index) => <span key={index}>{error.msg}</span>)}
        </div>
        <div>
          <label htmlFor="confirm_new_password">Confirm new password</label>
          <input
            type="password"
            id="confirm_new_password"
            name="confirm_new_password"
            required
            onChange={(e) =>
              updatePassword({ confirmNewPassword: e.target.value })
            }
            value={passwordObj.confirmNewPassword}
          />
          {errors &&
            errors
              .filter((error) => error.path === "confirm_new_password")
              .map((error, index) => <span key={index}>{error.msg}</span>)}
        </div>
        <div>
          <button type="submit">Update password</button>
        </div>
      </Form>
    </section>
  );
};

export default EditProfilePage;
