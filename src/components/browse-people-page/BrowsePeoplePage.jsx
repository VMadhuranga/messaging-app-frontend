import { useFetcher, useLoaderData } from "react-router-dom";

const BrowsePeoplePage = () => {
  const people = useLoaderData();
  const fetcher = useFetcher();

  return (
    <section>
      <h2>Browse people</h2>
      {/* render search bar */}
      {people.length > 0 ? (
        <ul>
          {people.map((person) => (
            <li key={person._id}>
              {person.firstName} {person.lastName}
              <span>{person.userName}</span>
              <fetcher.Form method="post">
                <input type="hidden" name="friend_id" value={person._id} />
                <button>Add to friends</button>
              </fetcher.Form>
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
