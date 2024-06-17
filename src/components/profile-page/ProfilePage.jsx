import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <section>
      <h2>User&apos;s name</h2>
      <div>
        <a>Edit profile</a>
      </div>
      <div>
        <a>Delete profile</a>
      </div>
      <div>
        <Link to={"/logout"}>Logout</Link>
      </div>
    </section>
  );
};

export default ProfilePage;
