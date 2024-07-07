import { Link, useLoaderData, useParams } from "react-router-dom";

const ProfilePage = () => {
  const user = useLoaderData();
  const params = useParams();

  function deleteProfile(e) {
    if (!confirm("Do you really want to delete the profile")) {
      e.preventDefault();
    }
  }

  return (
    <section className="defaultSection">
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <div>
        <Link to={`/${params.user_id}/profile/edit`}>Edit profile</Link>
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
