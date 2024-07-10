import { Form, /* useFetcher */ useLoaderData } from "react-router-dom";
import addFriendSvg from "../../assets/icons/add-friend.svg";
import styles from "./BrowsePeoplePage.module.css";

const BrowsePeoplePage = () => {
  const people = useLoaderData();

  return (
    <section className={`defaultSection ${styles.browsePeoplePage}`}>
      <h2>Browse people</h2>
      {people.length > 0 ? (
        <ul>
          {people.map((person) => (
            <li key={person._id}>
              {person.firstName} {person.lastName}
              <span>@{person.userName}</span>
              <Form method="post" className="defaultForm">
                <input type="hidden" name="friend_id" value={person._id} />
                <button type="submit" title="Add to friends">
                  <img
                    src={addFriendSvg}
                    alt="Add to friends"
                    title="Add to friends"
                  />
                </button>
              </Form>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no people who are not on your friend list.</p>
      )}
    </section>
  );
};

export default BrowsePeoplePage;
