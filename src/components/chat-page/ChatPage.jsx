import { useLoaderData } from "react-router-dom";

const ChatPage = () => {
  const messages = useLoaderData();

  return (
    <section>
      <div>
        <h2>Friend name</h2>
        <form>
          <input type="hidden" name="" />
          <button type="submit">Delete friend</button>
        </form>
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
