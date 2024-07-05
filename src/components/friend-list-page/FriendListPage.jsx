import { Link, useLoaderData } from "react-router-dom";
import styles from "./FriendListPage.module.css";

const FriendListPage = () => {
  const friends = useLoaderData();

  return (
    <section className={`defaultSection ${styles.friendListPage}`}>
      <h2>Friends</h2>
      {friends.length > 0 ? (
        <ul>
          {friends.map(({ friend }) => (
            <li key={friend._id}>
              <Link
                to={`${friend._id}/messages`}
                state={{ friendName: `${friend.firstName} ${friend.lastName}` }}
              >{`${friend.firstName} ${friend.lastName}`}</Link>
              <span>@{friend.userName}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no friends yet</p>
      )}
    </section>
  );
};

export default FriendListPage;
