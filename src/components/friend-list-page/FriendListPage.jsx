import { Link, useLoaderData, useParams } from "react-router-dom";

const FriendListPage = () => {
  const friends = useLoaderData();
  const { user_id } = useParams();

  return (
    <section>
      <h2>Friends</h2>
      {friends.length > 0 ? (
        <ul>
          {friends.map(({ friend }) => (
            <li key={friend._id}>
              <Link
                to={`${friend._id}`}
              >{`${friend.firstName} ${friend.lastName}`}</Link>
              <span>{friend.userName}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no friends yet</p>
      )}
      <p>
        <Link to={`/${user_id}/people`}>Browse people</Link>
      </p>
    </section>
  );
};

export default FriendListPage;
