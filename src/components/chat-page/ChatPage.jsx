import { useState } from "react";
import {
  Form,
  useFetcher,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";

const ChatPage = () => {
  const messages = useLoaderData();
  const params = useParams();
  const location = useLocation();
  const fetcher = useFetcher();
  const [message, setMessage] = useState("");

  return (
    <section>
      <div>
        <h2>{location.state.friendName}</h2>
        <Form method="delete">
          <input type="hidden" value={params.friend_id} />
          <button type="submit">Delete friend</button>
        </Form>
      </div>
      {messages.length > 0 ? (
        <ul>
          {messages
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((message) => (
              <li key={message._id}>{message.content}</li>
            ))}
        </ul>
      ) : (
        <p>There are no messages yet</p>
      )}
      <fetcher.Form
        method="post"
        onSubmit={() => {
          setMessage("");
        }}
      >
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button type="submit">Send message</button>
      </fetcher.Form>
    </section>
  );
};

export default ChatPage;
