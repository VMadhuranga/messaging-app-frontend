import { useLoaderData } from "react-router-dom";

const BrowsePeoplePage = () => {
  const people = useLoaderData();
  console.log(people);

  return (
    <section>
      <h2>Browse people</h2>
      {/* render search bar */}
      {people.length && (
        <ul>
          {people.map((person) => (
            <li key={person._id}>
              {person.firstName} {person.lastName}
              <span>{person.userName}</span>
              <form>
                <input type="hidden" name="" />
                <button>Add to friends</button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BrowsePeoplePage;
