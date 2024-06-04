import { Form, useLoaderData, useParams } from "react-router-dom";

const ChatPage = () => {
  const messages = useLoaderData();
  const params = useParams();

  return (
    <section>
      <div>
        <h2>Friend name</h2>
        <Form method="delete">
          <input type="hidden" value={params.friend_id} />
          <button type="submit">Delete friend</button>
        </Form>
      </div>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>{message.content}</li>
          ))}
        </ul>
      ) : (
        <p>There are no messages yet</p>
      )}
      <form>
        <textarea name="" id=""></textarea>
        <button type="submit">Send message</button>
      </form>
    </section>
  );
};

export default ChatPage;
