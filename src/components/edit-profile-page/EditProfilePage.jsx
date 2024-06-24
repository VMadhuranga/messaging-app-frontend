import { Form, useActionData, useLoaderData } from "react-router-dom";

const EditProfilePage = () => {
  const user = useLoaderData();
  const errors = useActionData();

  return (
    <section>
      <h2>Edit profile</h2>
      <Form method="patch">
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
      <Form method="patch">
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
      <Form method="patch">
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
      <form>
        <div>
          <label htmlFor="old_password">Old password</label>
          <input
            type="password"
            id="old_password"
            name="old_password"
            required
          />
        </div>
        <div>
          <label htmlFor="new_password">New password</label>
          <input
            type="password"
            id="new_password"
            name="new_password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm_new_password">Confirm new password</label>
          <input
            type="password"
            id="confirm_new_password"
            name="confirm_new_password"
            required
          />
        </div>
        <div>
          <button type="submit">Update password</button>
        </div>
      </form>
    </section>
  );
};

export default EditProfilePage;
