import { Link, useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();

  function deleteProfile(e) {
    if (!confirm("Do you really want to delete the profile")) {
      e.preventDefault();
    }
  }

  return (
    <section>
      <h2>User&apos;s name</h2>
      <div>
        <a>Edit profile</a>
      </div>
      <div>
        <Link to={`/${params.user_id}/profile/delete`} onClick={deleteProfile}>
          Delete profile
        </Link>
      </div>
      <div>
        <Link to={"/logout"}>Logout</Link>
      </div>
    </section>
  );
};

export default ProfilePage;
